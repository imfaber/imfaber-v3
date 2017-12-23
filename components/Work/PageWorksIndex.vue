<template>
  <AppSection v-if="workItems">
    <div class="container">
      <h3 class="title is-h3 has-text-centered">Work</h3>
      <WorksAsCards :works="workItems"></WorksAsCards>
    </div>
  </AppSection>
</template>

<script>
import WorksAsCards from './WorksAsCards.vue'
import AppSection from '~/components/AppSection'
import { mapGetters } from 'vuex'

export default {
  components: { WorksAsCards, AppSection },
  computed: {
    ...mapGetters({
      workItems: 'works/list'
    }),
  },

}
</script>