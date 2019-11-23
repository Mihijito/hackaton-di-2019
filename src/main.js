import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';
import store from './store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import solid from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(brands, solid);

Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
