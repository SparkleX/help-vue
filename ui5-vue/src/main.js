import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-fiori/dist/Assets.js";
import "@ui5/webcomponents-icons/dist/Assets.js";



import "@ui5/webcomponents/dist/Label.js";

import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/List.js";
import "@ui5/webcomponents-fiori/dist/Page.js";
import "@ui5/webcomponents-fiori/dist/Bar.js";

import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
setTheme("sap_fiori_3");
createApp(App).mount('#app')
