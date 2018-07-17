import Vue from 'vue'
import VueCarousel from 'vue-carousel';

if (process.browser) {
  Vue.use(VueCarousel);
}