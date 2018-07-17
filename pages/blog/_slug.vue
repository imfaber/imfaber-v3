<template>
  <PageBlogSlug v-bind="{article}" />
</template>

<script>
import PageBlogSlug from '~/components/blog/PageBlogSlug'
import striptags from 'striptags'

export default {
  components: { PageBlogSlug },
  async asyncData ({ store, params }) {

    // Retrieve current article.
    const article = await store.dispatch('blog/findOneBySlug', params.slug);
    const meta = {
      title: article.title,
      description: striptags(article.body.summary || article.body.value || article.body).trim(),
      url: `${process.env.baseUrl}/lab/${article.slug.value}`,
      image: article.image.imageFile.meta.derivatives.d10_standard || '',
    }

    return {article, meta};
  },
}
</script>
