<template>
    <nav class="navbar is-transparent">
        <div class="navbar-brand">
            <nuxt-link to="/" class="navbar-item">
                <AppLogo></AppLogo>
                <span>faber</span>
            </nuxt-link>
            <div @click="setMenuMobileIsOpened" class="navbar-burger"
                 :class="{'is-active': this.$store.state.menuMobileIsOpened}"
                 data-target="app-menu">
                <i></i>
                <i></i>
                <i></i>
            </div>
        </div>

        <div id="app-menu" class="navbar-menu" :class="{'is-active': this.$store.state.menuMobileIsOpened}">
            <div class="navbar-start">
                <nuxt-link to="/work" class="navbar-item">Work</nuxt-link>
                <nuxt-link to="/lab" class="navbar-item">Lab</nuxt-link>
                <nuxt-link to="/contact" class="navbar-item">Contact</nuxt-link>
            </div>

            <div class="navbar-end">
                <a class="navbar-item social-icon" target="_blank" href="">
                    <span class="icon"><i class="fa fa-github"></i></span>
                </a>
                <a class="navbar-item social-icon" target="_blank" href="">
                    <span class="icon"><i class="fa fa-twitter"></i></span>
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
      }
    }
  }
</script>

