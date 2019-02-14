import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'


import VueCountdown from '@chenfengyuan/vue-countdown';
import './plugins/element.js'

Vue.component(VueCountdown.name, VueCountdown);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
