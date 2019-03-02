import Vue from 'vue';
import './plugins/vuetify';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';


Vue.use(VueRouter);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
