<template>
    <div class="nuxt-app"
         :class="{'is-active-menu': this.$store.state.menuMobileIsOpened}">
        <div class="container is-fluid">
            <AppNavigation/>
        </div>
        <div class="page-canvas">
            <div class="container is-fluid">
                <nuxt/>

                <footer class="site-footer">
                    <div class="">© {{ year }} Imfaber - Fabrizio Meinero</div>
                </footer>
            </div>
        </div>
        <!--<vue-particles-->
          <!--color="#393939"-->
          <!--:particleOpacity="0.8"-->
          <!--linesColor="#717171"-->
          <!--:particlesNumber="80"-->
          <!--shapeType="circle"-->
          <!--:particleSize="10"-->
          <!--:linesWidth="1"-->
          <!--:lineLinked="true"-->
          <!--:lineOpacity=".2"-->
          <!--:linesDistance="150"-->
          <!--:moveSpeed="1"-->
          <!--:hoverEffect="false"-->
          <!--hoverMode="repulse"-->
          <!--:clickEffect="false"-->
          <!--clickMode="none"-->
        <!--/>-->
    </div>
</template>

<script>
  import AppNavigation from '~/components/AppNavigation'
  import AppLogo from '~/components/AppLogo'
  export default  {
    components: {AppNavigation, AppLogo},
    data() {
        const year = new Date().getFullYear();

        return {
            year
        }
    },

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



