<template>
    <PageWorksIndex/>
</template>

<script>
  import PageWorksIndex from '~/components/Work/PageWorksIndex.vue'

  export default {
    transition: 'page',
    components: {PageWorksIndex},

    async fetch ({store, query}) {
      const filter  = query.filter
      const offset  = query.page || 0
      const limit   = 40

      if (filter) {

      }
      else {
        await store.dispatch('works/findAllLatestWorks', limit, offset);
      }

    }
  }
</script>
