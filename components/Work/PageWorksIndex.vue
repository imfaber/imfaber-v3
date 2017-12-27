<template>
    <AppSection v-if="works">
        <div class="container">
            <h3 class="title is-h3 has-text-centered">Work</h3>
            <AppSection v-if="filters"
                        class="field is-grouped is-grouped-multiline">
                <div v-for="filter in filters" class="control">
                    <div class="tags has-addons">
                        <a class="tag is-link"
                           @click.prevent="addFilter(filter.machine_name)">
                            {{filter.name}}
                        </a>
                        <a class="tag is-delete"
                           @click.prevent="removeFilter(filter.machine_name)"
                           v-if="isActiveFilter(filter.machine_name)"></a>
                    </div>
                </div>
            </AppSection>
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
      filterParams () {
        if (!this.$route.query.filter) {
          this.$route.query.filter = [];
        }
        let filterParams = this.$route.query.filter.slice()
        if (filterParams && !Array.isArray(filterParams)) {
          filterParams = [filterParams]
        }
        return filterParams
      }
    },
    methods:    {
      addFilter(filter){
        // Skip if filter is already active.
        if (this.isActiveFilter(filter)) return
        this.filterParams.push(filter)
        this.updateQuery()
      },
      removeFilter(filter){
        this.filterParams.splice(this.filterParams.indexOf(filter), 1);
        this.updateQuery()
      },
      isActiveFilter (filter) {
        return (this.filterParams.indexOf(filter) >= 0)
      },
      updateQuery(){
        let query    = Object.assign({}, this.$route.query)
        query.filter = this.filterParams;
        this.$router.replace({query: query});
      }
    },

  }
</script>