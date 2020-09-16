import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCharts from 'v-charts'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css';
import http from "./httpConfig/axiosUrl";

Vue.config.productionTip = false
Vue.prototype.$http = http;
Vue.use(ViewUI)
Vue.use(VCharts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
