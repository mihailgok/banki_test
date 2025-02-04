import Vue from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide';

// Используем плагин VueSplide
Vue.use(VueSplide);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
