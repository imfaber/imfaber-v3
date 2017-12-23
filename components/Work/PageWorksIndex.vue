<template>
  <AppSection v-if="works">
    <div class="container">
      <h3 class="title is-h3 has-text-centered">Work</h3>
      <WorksAsCards :works="works"></WorksAsCards>
    </div>
  </AppSection>
</template>

<script>
import WorksAsCards from './WorksAsCards.vue'
import AppSection from '~/components/AppSection'

export default {
  components: { WorksAsCards, AppSection },
  props: {
    works: { type: Array, default: () => [] }
  },
}
</script>