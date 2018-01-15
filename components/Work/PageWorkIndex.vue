<template>
    <AppSection v-if="works" class="page page--work-index">
        <div class="block block--filters">
            <h1 class="block__header title is-h3 has-text-centered">Work</h1>
            <AppFilters class="field is-grouped is-grouped-multiline block__body" :filters="filters" :reset-button="true"></AppFilters>
        </div>
        <WorkAsCards :works="works"></WorkAsCards>
    </AppSection>
</template>

<script>
  import WorkAsCards from './WorkAsCards.vue'
  import AppSection from '~/components/AppSection'
  import AppFilters from '../AppFilters.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {WorkAsCards, AppSection, AppFilters},
    props:      {
      works: {type: Array, default: () => []}
    },
    computed:   {
      ...mapGetters({
        filters: 'work/filters'
      }),
    },
  }
</script>

