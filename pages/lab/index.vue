<template>
    <PageLabIndex v-bind="{articles}"/>
</template>

<script>
  import PageLabIndex from '~/components/Lab/PageLabIndex.vue'

  export default {
    components: {PageLabIndex},

    async asyncData ({store, query}) {
      const filterTag      = query.tag || []
      const filterCategory = query.category || []
      const offset         = query.page || 0
      const limit          = 40
      let articles         = [];

//      store.dispatch('lab/fetchFilters');

      if (filterTag.length || filterCategory.length) {
        articles = await store.dispatch('lab/findAllByFilters', {
          tags:       filterTag,
          categories: filterCategory,
        }, limit, offset);
      }
      else {
        articles = await store.dispatch('lab/findAll', limit, offset);
      }

      const meta = {
        title:       'Lab',
        description: 'Side projects, snippets, tutorials and everything else accomplished on my spare software development time.',
        url:         `${process.env.baseUrl}/lab`,
      }

      return {articles, meta};
    },

    async fetch ({store}) {
      if (!store.getters['lab/tagFilters'].length) {
        const terms = await store.dispatch('lab/fetchAllTags');
        store.commit('lab/tagFilters', terms)
      }
      if (!store.getters['lab/categoryFilters'].length) {
        const terms = await store.dispatch('lab/fetchAllCategories');
        store.commit('lab/categoryFilters', terms)
      }
    }
  }
</script>
