<template>
    <PageLabIndex v-bind="{articles}"/>
</template>

<script>
  import PageLabIndex from '~/components/Lab/PageLabIndex.vue'

  export default {
    components: {PageLabIndex},

    async asyncData ({store, query}) {
      const filter = query.filter
      const offset = query.page || 0
      const limit  = 40
      let articles = [];

      store.dispatch('lab/fetchFilters');

      if (filter && filter.length) {
        articles = await store.dispatch('lab/findAllByTag', filter, limit, offset);
      }
      else {
        articles = await store.dispatch('lab/findAll', limit, offset);
      }

      const meta = {
        title:       'Lab',
        description: 'Side projects, experiments and everything else accomplished on my spare software development time.',
        url:         `${process.env.baseUrl}/lab`,
      }

      console.log(articles);

      return {articles, meta};
    },

    async fetch ({store}) {
      if (store.getters['lab/filters'].length) {
        return
      }
      const terms = await store.dispatch('lab/fetchFilters');
      store.commit('lab/filters', terms)
    }
  }
</script>
