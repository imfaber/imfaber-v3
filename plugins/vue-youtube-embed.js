import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'

if (process.browser) {
  Vue.use(VueYouTubeEmbed)
}