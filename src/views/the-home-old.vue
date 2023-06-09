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
    </div>
    <div class="flex gap-5 flex-nowrap flex-col sm:flex-row">
      <q-input
        filled
        v-model="startDate"
        label="開始日期"
        mask="date"
        class="w-full sm:w-1/2"
      >

        <template v-slot:append>
          <q-icon
            name="event"
            class="cursor-pointer"
          >
            <q-popup-proxy
              :breakpoint="600"
              cover
              transition-show="scale"
              transition-hide="scale"
            >
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
          </q-icon>
        </template>




      </q-input>
      <div class="w-full sm:w-1/2">
        <q-input
          filled
          v-model.number="gapDays"
          type="number"
          label="間隔天數"
        />
        <q-toggle
          dense
          v-model="needFirstDate"
          label="算入第一天"
        ></q-toggle>
      </div>

    </div>

    <div>
      預計結束日：
      <span :class="{
        'text-red-500': isHoliday(endDate),
      }">
        {{ formatDateWithWeekday(endDate) }}
        <span v-if="getDateNote(endDate) && getDateNote(endDate)?.備註">『{{ getDateNote(endDate)?.備註 }}』</span>

      </span>

      <div v-if="isHoliday(endDate)">
        下一個工作日：{{ getNextWorkDate(nextWorkDate) }}
        <ul>
          <li
            v-for="dateNote in getDateList(endDate, nextWorkDate)"
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

  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import dayjs from 'dayjs';
import { useAxios } from '@vueuse/integrations/useAxios';
import { find } from 'lodash-es';
import logoImg from '../assets/logo.jpeg'

const weekCht = ['日', '一', '二', '三', '四', '五', '六'] as const
interface DateNote {
  "西元日期": string | number;
  "星期": typeof weekCht[number]
  "是否放假": '0' | '2' | 0 | 2,
  "備註": string
}
const { data: dateNote2023List, isFinished: is2023ListFinished } = useAxios<DateNote[]>('/api/taiwan_2023.json')
const { data: dateNote2024List, isFinished: is2024ListFinished } = useAxios<DateNote[]>('/api/taiwan_2024.json')
const isFinished = computed(() => is2023ListFinished.value && is2024ListFinished.value)
const dateNoteList = computed(() => {
  if (!isFinished.value || !dateNote2023List.value || !dateNote2024List.value) return;
  return [...dateNote2023List.value, ...dateNote2024List.value]
})

const startDate = ref(dayjs().format('YYYY/MM/DD'));
const needFirstDate = ref(false)
const gapDays = ref(5)
const endDate = computed(() => {
  let _gapDays = gapDays.value
  if (needFirstDate.value) _gapDays--;
  return dayjs(startDate.value).add(_gapDays, 'days').format('YYYY/MM/DD')
})

const nextWorkDate = computed(() => getNextWorkDate(endDate.value))



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
function getDateList(from: string, to: string) {
  if (!dateNoteList.value) return [];
  const result: DateNote[] = [];
  const days = dayjs(to).diff(from, 'days')
  for (let index = 0; index <= days; index++) {
    const _date = dayjs(from).add(index, 'days').format('YYYYMMDD');
    const dateNote = getDateNote(_date)
    if (dateNote) result.push(dateNote);
  }
  return result

}

function formatDateWithWeekday(date: string | number) {
  return dayjs(date).format('YYYY/MM/DD (dd)');
}

</script>

<style scoped lang="sass">
</style>
