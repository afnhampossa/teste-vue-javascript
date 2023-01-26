import Vue from 'vue'
import App from './App.vue'
import router from './router'

import BootstrapVue from 'bootstrap-vue'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueSession from 'vue-session'
import VueTableDynamic from 'vue-table-dynamic'

Vue.config.productionTip = false


Vue.use(VueSession)

Vue.use(BootstrapVue)
Vue.use(VueSweetalert2);
Vue.use(VueTableDynamic)
Vue.use(localStorage)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
