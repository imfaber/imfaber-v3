<template>
  <AppSection v-if="works">
    <div class="container">
      <h3 class="title is-h3 has-text-centered">Work</h3>
      <WorkFilters />
      <WorksAsCards :works="works"></WorksAsCards>
    </div>
  </AppSection>
</template>

<script>
import WorksAsCards from './WorksAsCards.vue'
import AppSection from '~/components/AppSection'
import WorkFilters from './WorkFilters'

export default {
  components: { WorksAsCards, AppSection, WorkFilters },
  props: {
    works: { type: Array, default: () => [] }
  },
}
</script>