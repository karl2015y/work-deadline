<template>

  <router-view />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import quasarLangs from 'quasar/lang/index.json';
import { LangCode } from './locales/i18n';

import { useMeta } from 'quasar';
import { useMouse } from '@vueuse/core';
import { useMainStore } from './stores/main.store';
import { useLang } from './composables/use-lang';

const store = useMainStore();
const { x, y } = useMouse();
const { t } = useLang();

const date = ref();

const lang = ref(store.lang);
watch(lang, (value) => store.setLang(value));

const langs = quasarLangs.filter((lang) =>
  (Object.values(LangCode) as string[]).includes(lang.isoName)
);
const langOptions = langs.map((lang) => ({
  label: lang.nativeName, value: lang.isoName
}));


useMeta(() => ({
  title: `花米助手-見紅就休`,
  titleTemplate: (title) => `${title} v${import.meta.env.PACKAGE_VERSION}`,
  htmlAttr: {
    lang: lang.value
  }
}));


</script>

<style lang="sass">
html, body, #app
  width: 100%
  height: 100%
  padding: 0
  margin: 0

#app
  display: flex
  flex-direction: column
</style>
