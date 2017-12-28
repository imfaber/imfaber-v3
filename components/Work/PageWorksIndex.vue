<template>
    <AppSection v-if="works" class="page page--works">
        <div class="container">
            <h3 class="title is-h3 has-text-centered">Work</h3>
            <AppFilters class="field is-grouped is-grouped-multiline" :filters="filters" :reset-button="true"></AppFilters>
            <WorksAsCards :works="works"></WorksAsCards>
        </div>
    </AppSection>
</template>

<script>
  import WorksAsCards from './WorksAsCards.vue'
  import AppSection from '~/components/AppSection'
  import AppFilters from '../AppFilters.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {WorksAsCards, AppSection, AppFilters},
    props:      {
      works: {type: Array, default: () => []}
    },
    computed:   {
      ...mapGetters({
        filters: 'works/filters'
      }),
    },
  }
</script>

<style scoped lang="scss">
    $bg-color: #0ac2d2;
    .page--works {
        background: $bg-color;
    }
</style>