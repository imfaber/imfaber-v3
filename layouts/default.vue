<template>
    <div class="nuxt-app"
         :class="{'is-active-menu': this.$store.state.menuMobileIsOpened}">
        <AppNavigation/>
        <div class="page-canvas">
            <nuxt/>
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

<style scoped lang="scss">
    $size: 320px;
    .page-canvas {
        position: relative;
        z-index:2;
        width: 100%;
        height: 100%;
        -webkit-perspective: 1200px;
        -moz-perspective: 1200px;
        perspective: 1200px;
        background: #2a2a2a;
    }

</style>
