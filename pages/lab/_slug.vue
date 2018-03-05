<template>
  <PageLabSlug v-bind="{article}" />
</template>

<script>
import PageLabSlug from '~/components/Lab/PageLabSlug'
import striptags from 'striptags'

export default {
  components: { PageLabSlug },
  async asyncData ({ store, params }) {

    // Retrieve current article.
    const article = await store.dispatch('lab/findOneBySlug', params.slug);
    const meta = {
      title: article.title,
      description: striptags(article.body.summary || article.body.value).trim(),
      url: `${process.env.baseUrl}/lab/${article.slug.value}`,
//      image: article.image.imageFile.meta.derivatives.d10_standard || '',
    }

    return {article, meta};
  },
}
</script>
