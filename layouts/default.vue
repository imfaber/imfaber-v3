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
        <vue-particles
          color="#393939"
          :particleOpacity="0.7"
          linesColor="#505050"
          :particlesNumber="80"
          shapeType="circle"
          :particleSize="10"
          :linesWidth="2"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="1"
          :hoverEffect="true"
          hoverMode="repulse"
          :clickEffect="true"
          clickMode="push"
        />
    </div>
</template>

<script>
  import AppNavigation from '~/components/AppNavigation'
  import AppLogo from '~/components/AppLogo'
  export default  {
    components: {AppNavigation, AppLogo},
  }
</script>

<style scoped>
    #particles-js {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;
        width: 100vw;
        height: 100vh;
    }
</style>



