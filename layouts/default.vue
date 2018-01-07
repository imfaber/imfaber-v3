<template>
    <div class="nuxt-app"
         :class="{'is-active-menu': this.$store.state.menuMobileIsOpened}">
        <div class="container is-fluid">
            <AppNavigation/>
        </div>
        <div class="page-canvas">
            <div class="container is-fluid">
                <nuxt/>
            </div>
        </div>
    </div>
</template>

<script>
  import AppNavigation from '~/components/AppNavigation'
  import AppLogo from '~/components/AppLogo'
  export default  {
    components: {AppNavigation, AppLogo}
  }
</script>
