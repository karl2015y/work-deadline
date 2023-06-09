<template>
  <div
    class="p-10 flex flex-col gap-10"
    v-if="isFinished"
  >
    <div class="flex items-center gap-5">
      <q-img
        :src="logoImg"
        class="w-[70px]"
      ></q-img>
      <div class="pt-5">
        <h1 class="text-xl font-bold">花米助手</h1>
        <h2 class="text-xs">小朋友才上班</h2>
      </div>
      <div class="ml-auto mt-auto text-blue-700">
        <a href="https://data.gov.tw/dataset/14718">資料來源</a>
      </div>
    </div>
    <div class="flex gap-5 flex-nowrap flex-col sm:flex-row">
      <div class="w-full sm:w-1/2">
        <q-field
          filled
          v-model="startDate"
          label="開始日期"
        >
          <template v-slot:append>
            <q-icon name="event" />
          </template>
          <template v-slot:control>
            <div>{{ startDate }}</div>
          </template>
          <q-popup-proxy :breakpoint="600">
            <q-date
              v-model="startDate"
              :events="isHoliday"
              :event-color="(date) => isHoliday(date) ? 'red' : ''"
            >
              <div class="row items-center justify-end">
                <q-btn
                  v-close-popup
                  label="Close"
                  color="primary"
                  flat
                />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-field>
        <q-toggle
          class="mt-1"
          dense
          v-model="isCustomEndDate"
          label="自訂結束日"
        />
      </div>

      <div
        v-if="isCustomEndDate"
        class="w-full sm:w-1/2"
      >
        <q-field
          filled
          v-model="endDate"
          label="結束日期"
        >
          <template v-slot:append>
            <q-icon name="event" />
          </template>
          <template v-slot:control>
            <div>{{ endDate }}</div>
          </template>
          <q-popup-proxy :breakpoint="600">
            <q-date
              v-model="endDate"
              :events="isHoliday"
              :event-color="(date) => isHoliday(date) ? 'red' : ''"
            >
              <div class="row items-center justify-end">
                <q-btn
                  v-close-popup
                  label="Close"
                  color="primary"
                  flat
                />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-field>
        <q-toggle
          class="mt-1"
          dense
          v-model="needFirstDate"
          label="算入第一天"
        />
      </div>


      <div
        v-else
        class="w-full sm:w-1/2"
      >
        <div class="flex gap-2 items-center flex-nowrap">
          <q-input
            class="w-full"
            filled
            v-model.number="gapDays"
            type="tel"
            label="間隔天數"
          />
          <div class="flex flex-nowrap gap-1">
            <q-btn
              unelevated
              class="bg-gray-200"
              icon="add"
            />
            <q-btn
              unelevated
              class="bg-gray-200"
              icon="remove"
            />
          </div>
        </div>

        <div class="flex justify-between mt-1">
          <div>
            <q-toggle
              dense
              v-model="needFirstDate"
              label="算入第一天"
            />
            <br>
            <q-toggle
              :disable="!(gapDayType === GapDayType.DAY)"
              class="mt-0.5"
              dense
              v-model="needEndDateIsWorkDate"
              label="結束日必須為工作日"
            />
          </div>
          <div class="q-gutter-sm">
            <q-radio
              dense
              v-model="gapDayType"
              :val="GapDayType.DAY"
              :label="GapDayType.DAY"
            />
            <q-radio
              dense
              v-model="gapDayType"
              :val="GapDayType.WORK_DAY"
              :label="GapDayType.WORK_DAY"
            />

          </div>
        </div>
      </div>

    </div>

    <!-- 結果(間隔日期) -->
    <div>
      日曆天：{{ dateList.length }}天 <br>
      工作天：{{ dateList.filter(item => !isHoliday(item.西元日期)).length }}天
    </div>

    <!-- 結果 -->
    <div>
      <ul>
        <li
          v-for="dateNote in dateList"
          :class="{
            'text-red-500': isHoliday(dateNote.西元日期),
          }"
        >

          {{ formatDateWithWeekday(dateNote.西元日期) }}
          <span v-if="dateNote.備註">

            『{{ dateNote.備註 }}』
          </span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import dayjs from 'dayjs';
import { useAxios } from '@vueuse/integrations/useAxios';
import { find } from 'lodash-es';
import logoImg from '../assets/logo.jpeg'

const weekCht = ['日', '一', '二', '三', '四', '五', '六'] as const
interface DateNote {
  "西元日期": string;
  "星期": typeof weekCht[number]
  "是否放假": '0' | '2',
  "備註": string
}
const { data: dateNote2023List, isFinished: is2023ListFinished } = useAxios<DateNote[]>('/api/taiwan_2023.json')
const { data: dateNote2024List, isFinished: is2024ListFinished } = useAxios<DateNote[]>('/api/taiwan_2024.json')
const isFinished = computed(() => is2023ListFinished.value && is2024ListFinished.value)
const dateNoteList = computed(() => {
  if (!isFinished.value || !dateNote2023List.value || !dateNote2024List.value) return;
  return [...dateNote2023List.value, ...dateNote2024List.value].map(item => ({
    "西元日期": item.西元日期.toString(),
    "星期": item.星期.toString(),
    "是否放假": item.是否放假.toString(),
    "備註": item.備註.toString(),
  }) as DateNote)
})


const isCustomEndDate = ref(false)
const startDate = ref(dayjs().format('YYYY/MM/DD'));
const needFirstDate = ref(false)
const needEndDateIsWorkDate = ref(false)
const gapDays = ref(5)
enum GapDayType {
  DAY = "日曆天",
  WORK_DAY = "工作天"
}
const gapDayType = ref<`${GapDayType}`>(GapDayType.DAY)
const endDate = ref(dayjs().add(gapDays.value, 'days').format('YYYY/MM/DD'));
watch([gapDays, needFirstDate], () => {
  if (!isCustomEndDate.value) {
    let _gapDays = gapDays.value
    if (needFirstDate.value) _gapDays--;
    endDate.value = dayjs(startDate.value).add(_gapDays, 'days').format('YYYY/MM/DD')
  } else {
    gapDays.value = dateList.value.length
  }
})


const nextWorkDate = computed(() => getNextWorkDate(endDate.value))


/**找出行事曆裡的資料 */
function getDateNote(date: string | number) {
  const _date = dayjs(date).format('YYYYMMDD');
  const dateNote = find(dateNoteList.value, (_dateNote => _dateNote.西元日期.toString() === _date));
  return dateNote
}

function isHoliday(date: string | number) {
  if (!dateNoteList.value) return false;
  const dateNote = getDateNote(date)
  return dateNote?.是否放假.toString() === '2'
}
function getNextWorkDate(date: string) {
  let index = 0;
  let _date = date;
  while (isHoliday(_date)) {
    _date = dayjs(_date).add(1, 'days').format('YYYY/MM/DD');
  }
  return dayjs(_date).format('YYYY/MM/DD');
}

/**
 * 取得 from 到 to 的 list
 * @param from 
 * @param to 
 */
function getDateList(from: string, to: string, includeFirstDate: boolean) {
  if (!dateNoteList.value) return [];
  const result: DateNote[] = [];
  const days = dayjs(to).diff(from, 'days')
  for (let index = 0; index <= days; index++) {
    const _date = dayjs(from).add(index, 'days').format('YYYYMMDD');
    const dateNote = getDateNote(_date)
    if (dateNote) result.push(dateNote);
  }
  if (!includeFirstDate) result.shift()
  return result

}

function getDateListFromDays(from: string, days: number, includeFirstDate: boolean) {
  if (!dateNoteList.value) return [];
  const result: DateNote[] = [];
  for (let index = 0; index <= days; index++) {
    const _date = dayjs(from).add(index, 'days').format('YYYYMMDD');
    const dateNote = getDateNote(_date)
    if (dateNote) result.push(dateNote);
  }
  if (!includeFirstDate) result.shift()
  return result

}


const dateList = computed(() => {
  if (isCustomEndDate.value || gapDayType.value === '日曆天') {
    if (!needEndDateIsWorkDate.value) return getDateList(startDate.value, endDate.value, needFirstDate.value);
    return getDateList(startDate.value, nextWorkDate.value, needFirstDate.value);
  }

  let days = gapDays.value;
  let workDays = getDateListFromDays(startDate.value, days, needFirstDate.value).filter(item => !isHoliday(item.西元日期)).length
  while (workDays < gapDays.value) {
    days++
    workDays = getDateListFromDays(startDate.value, days, needFirstDate.value).filter(item => !isHoliday(item.西元日期)).length
    console.log("🚀 ~ file: the-home.vue:256 ~ dateList ~ workDays:", workDays)
  }

  return getDateListFromDays(startDate.value, days, needFirstDate.value)

})


function formatDateWithWeekday(date: string | number) {
  return dayjs(date).format('YYYY/MM/DD (dd)');
}

</script>

<style scoped lang="sass">
</style>
