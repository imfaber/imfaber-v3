<template>
    <PageBlogIndex v-bind="{articles}"/>
</template>

<script>
  import PageBlogIndex from '~/components/Blog/PageBlogIndex.vue'

  export default {
    components: {PageBlogIndex},

    async asyncData ({store, query}) {
      const filterTag      = query.tag || []
      const filterCategory = query.category || []
      const offset         = query.page || 0
      const limit          = 40
      let articles         = [];

//      store.dispatch('blog/fetchFilters');

      if (filterTag.length || filterCategory.length) {
        articles = await store.dispatch('blog/findAllByFilters', {
          tags:       filterTag,
          categories: filterCategory,
        }, limit, offset);
      }
      else {
        articles = await store.dispatch('blog/findAll', limit, offset);
      }

      const meta = {
        title:       'Blog',
        description: 'Articles, side projects, snippets, tutorials and everything else accomplished on my spare software development time.',
        url:         `${process.env.baseUrl}/lab`,
      }

      return {articles, meta};
    },

    async fetch ({store}) {
      if (!store.getters['blog/tagFilters'].length) {
        const terms = await store.dispatch('blog/fetchAllTags');
        store.commit('blog/tagFilters', terms)
      }
      if (!store.getters['blog/categoryFilters'].length) {
        const terms = await store.dispatch('blog/fetchAllCategories');
        store.commit('blog/categoryFilters', terms)
      }
    }
  }
</script>
