import { createApp } from 'vue';
import router from './router/router';
import { createPinia } from 'pinia';
import i18n from './locales/i18n';

import { Quasar } from 'quasar';
import quasarLang from 'quasar/lang/zh-TW';

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';
import App from './App.vue';

// Tailwind CSS
import './index.css';

// Uno CSS
// import 'uno.css';

// 自訂樣式
import './style/animate.sass';
import './style/global.sass';

import 'dayjs/locale/zh-tw';
import dayjs from 'dayjs';
dayjs.locale('zh-tw')


createApp(App)
  .use(Quasar, {
    plugins: {},
    lang: quasarLang,
  })
  .use(createPinia())
  .use(router)
  .use(i18n)
  .mount('#app')

