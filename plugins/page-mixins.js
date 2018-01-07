import Vue from 'vue'
import $ from 'jquery'

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
        // console.log('from', from)
        // console.log('to', to)

        if (from && from.name === to.name) {
          return 'filter'
        }

        let transition = {}
        const delay     = 75
        transition.name = 'blocks'
        transition.css  = false

        transition.beforeEnter = function (el) {
          $('.block', el).each((i, elem) => {
            $(elem).addClass(`block-in-setup`)
          })
        }

        $.fn.reverse = [].reverse

        transition.afterEnter = function (el, done) {
          setTimeout(() => {
            $('.block', el).reverse().each((i, elem) => {
              setTimeout(() => $(elem).toggleClass(`block-in block-in-setup`), i * delay)
            })
            setTimeout(done, $('.block', el).length * delay - delay)
          }, 10)
        }

        transition.leave = function (el, done) {
          $('.block', el).reverse().each((i, elem) => {
            setTimeout(() => $(elem).toggleClass(`block-out`), i * delay)
          })
          setTimeout(done, $('.block', el).length * delay + 500)
        }

        transition.afterLeave = function (el) {
          $('.block', el).each((i, elem) => {
            $(elem).toggleClass(`block-out`)
          })
        }

        return transition
      },

      mounted(){
        const $body = $('body')

        if ($body.hasClass('loaded')) return
        $(window).on('scroll', function () {
          if ($(this).scrollTop() > 5) {
            $body.addClass('scrolled')
          }
          else {
            $body.removeClass('scrolled')
          }
        })

        $body.addClass('loaded')

      }

    })
  }
}

Vue.use(PageMixins)