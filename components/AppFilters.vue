<template>
    <AppSection v-if="filters">
        <div v-for="filter in filters" class="control">
            <div class="tags has-addons" :class="{'is-active': isActive(filter.machine_name)}">
                <template v-if="isActive(filter.machine_name)">
                    <span class="tag" @click.prevent="remove(filter.machine_name)">{{filter.name}}</span>
                    <span class="tag is-delete" @click.prevent="remove(filter.machine_name)"></span>
                </template>
                <template v-else>
                    <span class="tag" @click.prevent="add(filter.machine_name)">{{filter.name}}</span>
                </template>
            </div>
        </div>
        <div class="control" v-if="resetButton && filterParams.length">
            <div class="tags has-addons is-active">
                <span class="tag"
                      @click.prevent="reset()">
                    Reset
                </span>
                <span class="tag is-delete" @click.prevent="reset()"></span>
            </div>
        </div>
    </AppSection>
</template>

<script>
  import AppSection from '~/components/AppSection'

  export default {
    components: {AppSection},
    props:      {
      filters:     {type: Array, default: () => {}},
      resetButton: {type: Boolean, default: false},
    },

    computed: {
      filterParams() {
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

    methods: {
      add(filter){
        // Skip if filter is already active.
        if (this.isActive(filter)) return
        this.filterParams.push(filter)
        this.updateQuery()
      },
      remove(filter){
        this.filterParams.splice(this.filterParams.indexOf(filter), 1)
        this.updateQuery()
      },
      isActive (filter) {
        return (this.filterParams.indexOf(filter) >= 0)
      },
      reset () {
        this.filterParams.length = 0
        this.updateQuery()
      },
      updateQuery(){
        let query    = Object.assign({}, this.$route.query)
        query.filter = this.filterParams;
        this.$router.replace({query: query});
      }
    },
  }
</script>

<style scoped lang="scss">
    .tags {
        .tag {
            cursor: pointer;
        }
    }
</style>