<template>
    <AppSection v-if="works" class="page page--work-index">
        <div class="container">
            <div class="cover"></div>
            <h3 class="title is-h3 has-text-centered">Work</h3>
            <AppFilters class="field is-grouped is-grouped-multiline" :filters="filters" :reset-button="true"></AppFilters>
            <WorkAsCards :works="works"></WorkAsCards>
        </div>
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
    mounted(){
//        this.$store.commit('navBarColor', '#0ac2d2')
    },
  }
</script>

<style scoped lang="scss">
    .page--work-index {
        background: #0ac2d2;
        &:before {
            background: #0ac2d2;
        }
    }
</style>