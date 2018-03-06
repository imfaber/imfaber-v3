<template>
    <AppSection v-if="works" class="page page--work-index">
        <div class="block block--filters">
            <div class="block__header">
                <h1 class="title is-1 has-text-centered is-spaced"><span class="codify">Work</span></h1>
                <p class="subtitle is-4 has-text-centered">Check out a selection of my best web software development projects.</p>
            </div>
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

