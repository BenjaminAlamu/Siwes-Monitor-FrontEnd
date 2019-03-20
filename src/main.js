import Vue from 'vue';
import './plugins/vuetify';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Datetime from 'vue-datetime'
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(Datetime)

Vue.use(BootstrapVue)

Vue.use(VueRouter);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
