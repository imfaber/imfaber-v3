<template>
    <AppSection v-if="filters">
        <div v-for="filter in filters" class="control">
            <div class="tags has-addons"
                 :class="[
                   isActive(filter.machine_name) ? 'is-active' : '',
                   `tags--${filter.machine_name}`]
                  ">
                <template v-if="isActive(filter.machine_name)">
                    <span class="tag"
                          @click.prevent="remove(filter.machine_name)">{{filter.name}}</span>
                    <span class="tag is-delete"
                          @click.prevent="remove(filter.machine_name)"></span>
                </template>
                <template v-else>
                    <span class="tag" @click.prevent="add(filter.machine_name)">{{filter.name}}</span>
                </template>
            </div>
        </div>
        <div class="control" v-if="resetButton && filterParams.length">
            <div class="tags has-addons is-active reset">
                <!--<span class="tag"-->
                <!--@click.prevent="reset()">-->
                <!--Reset-->
                <!--</span>-->
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
      path:        {type: String, default: '/work'},
      filterName:  {type: String, default: 'filter'},
      filters:     {type: Array, default: () => {}},
      resetButton: {type: Boolean, default: false},
    },

    computed: {
      filterParams() {
        if (!this.$route.query[this.filterName]) {
          this.$route.query[this.filterName] = [];
        }
        let filters = this.$route.query[this.filterName].slice()
        if (filters && !Array.isArray(filters)) {
          filters = [filters]
        }
        return filters
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
        let query              = Object.assign({}, this.$route.query)
        query[this.filterName] = this.filterParams;
        this.$router.push({path: this.path, query: query});
      }
    },
  }
</script>
