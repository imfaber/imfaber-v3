<template>
    <nav class="navbar is-transparent is-fluid">
        <div class="navbar-brand">
            <nuxt-link to="/" class="navbar-item home-link" :class="{'is-active': isActiveItem('')}">
                <!--<AppLogo></AppLogo>-->
                <span class="codify">Imfaber</span>
            </nuxt-link>
            <div @click="setMenuMobileIsOpened" class="navbar-burger"
                 :class="{'is-active': this.$store.state.menuMobileIsOpened}"
                 data-target="app-menu">
                <i></i>
                <i></i>
                <i></i>
            </div>
        </div>

        <div id="app-menu" class="navbar-menu"
             :class="{'is-active': this.$store.state.menuMobileIsOpened}">
            <div class="navbar-start">
                <nuxt-link to="/about" class="navbar-item"
                           :class="{'is-active': isActiveItem('about')}">
                    <span @click="setMenuMobileIsClosed">About</span>
                </nuxt-link>
                <nuxt-link to="/work" class="navbar-item"
                           :class="{'is-active': isActiveItem('work')}">
                    <span @click="setMenuMobileIsClosed">Work</span>
                </nuxt-link>
                <!-- <nuxt-link to="/services" class="navbar-item"
                           :class="{'is-active': isActiveItem('services')}">
                    <span @click="setMenuMobileIsClosed">Services</span>
                </nuxt-link> -->
                <nuxt-link to="/blog" class="navbar-item" :class="{'is-active': isActiveItem('blog')}">
                    <span @click="setMenuMobileIsClosed">Blog</span>
                </nuxt-link>
                <nuxt-link to="/contact" class="navbar-item" :class="{'is-active': isActiveItem('contact')}">
                    <span @click="setMenuMobileIsClosed">Contact</span>
                </nuxt-link>
            </div>

            <div class="navbar-end">
                <a class="navbar-item social-icon" target="_blank"
                   href="https://github.com/imfaber">
                    <span class="icon"><i class="fa fa-github"></i></span>
                </a>
                <a class="navbar-item social-icon" target="_blank"
                   href="https://twitter.com/imfaber">
                    <span class="icon"><i class="fa fa-twitter"></i></span>
                </a>
                <a class="navbar-item social-icon" target="_blank"
                   href="https://www.linkedin.com/pub/fabrizio-meinero/35/a57/782">
                    <span class="icon"><i class="fa fa-linkedin"></i></span>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
  import AppLogo from '~/components/AppLogo'

  export default {
    components: {AppLogo},
    methods:    {
      setMenuMobileIsOpened () {
        this.$store.commit('setMenuMobileIsOpened', !this.$store.state.menuMobileIsOpened)
      },

      setMenuMobileIsClosed () {
        this.$store.commit('setMenuMobileIsOpened', false)
      },

      isActiveItem(item) {
        return this.$route.path.substring(1).split('/')[0] === item
      },

    },
  }
</script>

