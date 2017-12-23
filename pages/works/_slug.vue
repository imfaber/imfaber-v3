<template>
  <PageWorkSlug v-bind="{work}" />
</template>

<script>
import PageWorkSlug from '~/components/Work/PageWorkSlug'

export default {
  transition: 'page',
  components: { PageWorkSlug },
  async asyncData ({ store, params }) {
    const work = await store.dispatch('works/findOneBySlug', params.slug);
    debugger
    return {work};
  }
}
</script>
