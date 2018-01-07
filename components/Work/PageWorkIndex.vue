<template>
    <AppSection v-if="works" class="page page--work-index">
        <div class="block block--heading">
            <h3 class="title is-h3 has-text-centered">Work</h3>
        </div>
        <AppFilters class="field is-grouped is-grouped-multiline block block--filters" :filters="filters" :reset-button="true"></AppFilters>
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

