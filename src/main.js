import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

// Libraries
import Loading from "vue-loading-overlay";
import VueSweetalert2 from 'vue-sweetalert2';

// Styles
import 'sweetalert2/dist/sweetalert2.min.css';
import 'vue-loading-overlay/dist/vue-loading.css';

// Vue Uses
Vue.use(VueSweetalert2);
Vue.use(Loading, {
  color: "#9155fd",
  loader: "dots",
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
