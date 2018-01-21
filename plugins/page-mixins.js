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

        $.fn.reverse    = [].reverse
        let transition = {}
        let delay     = 100
        let blockClass  = '.block'
        let animation   = 'translate'
        transition.name = 'blocks'
        transition.css  = false

        if (from && from.path === to.path) {
          blockClass = '.block--card'
          animation  = 'scale'
          delay      = 75
          $('html,body').animate({scrollTop: 0}, 500)
        }

        transition.beforeEnter = function (el) {
          const $blocks = $(blockClass, el).slice(0, 10)
          $blocks.each((i, elem) => {
            $(elem).addClass(`${animation}-block-in-setup`)
          })
        }

        transition.afterEnter = function (el, done) {
          $('html,body').animate({scrollTop: 0}, 0)
          setTimeout(() => {
            const $blocks = $(blockClass, el).slice(0, 10)
            $blocks.reverse().each((i, elem) => {
              setTimeout(() => {
                $(elem)
                  .toggleClass(`${animation}-block-in ${animation}-block-in-setup`)
                  .removeClass(`translate-block-in scale-block-in`)
              }, i * delay)
            })
            setTimeout(done, $blocks.length * delay - delay)
          }, 10)
        }

        transition.leave = function (el, done) {
          $(blockClass, el).reverse().each((i, elem) => {
            setTimeout(() => $(elem).toggleClass(`${animation}-block-out`), i * delay)
          })
          setTimeout(done, $(blockClass, el).length * delay + 500)
        }

        transition.afterLeave = function (el) {
          $(blockClass, el).each((i, elem) => {
            $(elem).toggleClass(`${animation}-block-out`)
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