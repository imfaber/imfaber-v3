import Vue from 'vue'
const PageMixins = {
  install(Vue, options) {
    Vue.mixin({

      /**
       * Head defaults.
       * @returns {{}}
       */
      head() {
        let head  = {}
        head.meta = []
        head.link = []
        if (this.meta && this.meta.title) {
          head.title = `${this.meta.title} | Fabrizio Meinero - Imfaber`
          head.meta.push({hid: 'twitter:title', name: 'twitter:title', content: this.meta.title})
          head.meta.push({hid: 'og:title', name: 'twitter:title', content: this.meta.title})
        }
        if (this.meta && this.meta.description) {
          head.meta.push({hid: 'description', name: 'description', content: this.meta.description})
          head.meta.push({hid: 'twitter:description', name: 'twitter:description', content: this.meta.description})
          head.meta.push({hid: 'og:description', name: 'twitter:description', content: this.meta.description})
        }
        if (this.meta && this.meta.image) {
          head.meta.push({hid: 'twitter:image', name: 'twitter:image', content: this.meta.image})
          head.meta.push({hid: 'og:image', name: 'twitter:image', content: this.meta.image})
        }
        if (this.meta && this.meta.url) {
          head.meta.push({hid: 'twitter:url', name: 'twitter:url', content: this.meta.url})
          head.meta.push({hid: 'og:url', name: 'twitter:url', content: this.meta.url})
          head.link.push({hid: 'canonical', name: 'canonical', href: this.meta.url})
        }
        if (this.meta && this.meta.themeColor) {
          head.meta.push({hid: 'theme-color', name: 'theme-color', content: this.meta.themeColor})
        }
        return head
      },

      /**
       * Transition defaults.
       * @param from
       * @param to
       * @returns {*}
       */
      transition (to, from) {
        console.log('from', from)
        console.log('to', to)

        const navRouteOrder = {
          'index':    0,
          'works':    1,
          'about':    2,
          'recipies': 3,
          'contact':  4
        }

        if (!from) return

        if (from.name !== to.name) {
          if (navRouteOrder[to.name] > navRouteOrder[from.name]) {
            console.log('transition: page-forward')
            return 'page-forward'
          }
          console.log('transition: page-backward')
          return 'page-backward'
        }
        else {
          console.log('transition: filter')
          return 'filter'
        }
      }
    })
  }
}

Vue.use(PageMixins)