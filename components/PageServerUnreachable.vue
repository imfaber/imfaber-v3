<template>
  <AppSection class="page page--contact">
    <div class="container">
      <div class="content">
        <div class="has-text-centered container">
          <div class="block block--main">
            <h1 class="block__header title is-h3 has-text-centered"><span class="codify">Whooops!</span></h1>
            <div class="block__body has-text-centered">
              <p>Sorry, we can't reach server API for now. </p>
            </div>
          </div>

          <div class="block block--transparent">
            <div class="block__body has-text-centered">
              <img src="~assets/images/server-unreachable.gif" />
            </div>
          </div>

        </div>
      </div>
    </div>
  </AppSection>

</template>

<script>
import AppSection from '~/components/AppSection'
export default {
  components: { AppSection }
}
</script>