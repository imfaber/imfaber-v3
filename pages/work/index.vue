<template>
    <PageWorkIndex v-bind="{works}"/>
</template>

<script>
  import PageWorkIndex from '~/components/Work/PageWorkIndex.vue'

  export default {
    components: {PageWorkIndex},
//    watchQuery: [
//      'filter',
//      'page',
//    ],

    async asyncData ({store, query}) {
      const filter = query.filter
      const offset = query.page || 0
      const limit  = 40
      let works    = [];

//      store.dispatch('work/fetchFilters');

      if (filter && filter.length) {
        works = await store.dispatch('work/findAllByTechAndSkills', filter, limit, offset);
      }
      else {
        works = await store.dispatch('work/findAll', limit, offset);
      }

      const meta = {
        title:       'Work',
        description: 'Check out a selection of the best projects I worked on.',
        url:         `${process.env.baseUrl}/work`,
      }

      return {works, meta};
    },

    async fetch ({store}) {
      if (store.getters['work/filters'].length) {
        return
      }
      const terms = await store.dispatch('work/fetchFilters');
      store.commit('work/filters', terms)
    }
  }
</script>
