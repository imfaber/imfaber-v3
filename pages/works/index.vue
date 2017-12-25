<template>
    <PageWorksIndex v-bind="{works}"/>
</template>

<script>
  import PageWorksIndex from '~/components/Work/PageWorksIndex.vue'

  export default {
    transition: 'page',
    components: {PageWorksIndex},

    async asyncData ({store, query}) {
      const filter = query.filter
      const offset = query.page || 0
      const limit  = 40
      let works    = [];

      if (filter) {

      }
      else {
        works = await store.dispatch('works/findAll', limit, offset);
      }

      const meta = {
        title: 'Work',
        description: 'Checkout my web portfolio',
        url: `${process.env.baseUrl}/works`,
//        image: work.image.thumbnail.url,
      }

      return { works, meta };
    }
  }
</script>
