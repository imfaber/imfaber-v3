<template>
  <PageWorkSlug v-bind="{work}" />
</template>

<script>
import PageWorkSlug from '~/components/Work/PageWorkSlug'
import striptags from 'striptags'

export default {
  transition: 'page',
  components: { PageWorkSlug },
  async asyncData ({ store, params }) {
    const work = await store.dispatch('works/findOneBySlug', params.slug);
    const meta = {
      title: work.title,
      description: striptags(work.body.summary || work.body.value).trim(),
      url: `${process.env.baseUrl}/works/${work.slug.value}`,
      image: work.image.thumbnail.url
    }

    return {work, meta};
  },
  head () {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.meta.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.meta.description },
        { hid: 'twitter:image', name: 'twitter:image', content: this.meta.image },
        { hid: 'twitter:url', name: 'twitter:url', content: this.meta.url },
        { hid: 'twitter:site', name: 'twitter:site', content: '@imfaber' },
        { hid: 'og:type', name: 'og:type', content: 'work' },
        { hid: 'og:url', name: 'og:url', content: this.meta.url },
        { hid: 'og:title', name: 'og:title', content: this.meta.title },
        { hid: 'og:description', name: 'og:description', content: this.meta.description },
        { hid: 'og:image', name: 'og:image', content: this.meta.image },
        { hid: 'theme-color', name: 'theme-color', content: this.work.background_color.color },
        { hid: 'MobileOptimized', name: 'MobileOptimized', content: 'width' },
        { hid: 'HandheldFriendly', name: 'HandheldFriendly', content: 'true' },

      ],
      link: [
        { hid: 'canonical', name: 'canonical', href: this.meta.url }
      ]

    }
  }
}
</script>
