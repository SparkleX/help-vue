/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'
import pinia from '../store'
import Colada, { PiniaColadaPlugin } from 'colada-plugin';
import { createI18n } from 'vue-i18n'
import { i18n } from "../i18n"
export function registerPlugins(app) {
  loadFonts();

 /* const messages = {
    en: {
      message: {
        hello: 'hello world'
      }
    },
    "zh-CN": {
      message: {
        hello: '你好世界2'
      }
    },
    zh: {
      message: {
        hello: '你好世界'
      }
    },
    ja: {
      message: {
        hello: 'こんにちは、世界'
      }
    }
  }

  const i18n = createI18n({
    locale: window.navigator.language,//    'ja',
    fallbackLocale: 'en',
    messages
  });*/
  app
    .use(vuetify)
    .use(router)
    .use(i18n)
    .use(pinia);
  pinia.use(PiniaColadaPlugin);
  app.use(Colada);
}
