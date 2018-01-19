<template>
  <PageWorkSlug v-bind="{work}" />
</template>

<script>
import PageWorkSlug from '~/components/Work/PageWorkSlug'
import striptags from 'striptags'

export default {
  components: { PageWorkSlug },
  async asyncData ({ store, params }) {

    // If work list is not in store yet put it for work navigation.
    if (!store.getters['work/list']) {
      await store.dispatch('work/findAll');
    }

    // Retrieve current work.
    const work = await store.dispatch('work/findOneBySlug', params.slug);
    const meta = {
      title: work.title,
      description: striptags(work.body.summary || work.body.value).trim(),
      url: `${process.env.baseUrl}/works/${work.slug.value}`,
      image: work.image.thumbnail.url,
      themeColor: work.background_color.color
    }

    return {work, meta};
  },
}
</script>
