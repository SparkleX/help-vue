import Vue from 'vue';
import App from './App.vue';
import HelpWc from 'help-wc';
Vue.use(HelpWc);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
window.Vue=Vue;