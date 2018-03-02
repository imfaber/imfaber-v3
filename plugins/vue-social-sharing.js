import Vue from 'vue'
import SocialSharing from 'vue-social-sharing'

if (process.browser) {
  Vue.use(SocialSharing)
}