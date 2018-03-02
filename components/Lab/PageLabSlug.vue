<template>
  <AppSection v-if="article" class="page page--lab-article"
              :class="'page--' + article.slug.value">
    <ArticleAsContent :article="article"></ArticleAsContent>
  </AppSection>
</template>

<script>
  import AppSection from '../AppSection'
  import ArticleAsContent from '../ArticleAsContent.vue'

  export default {
    components: {AppSection, ArticleAsContent},
    props:      {
      article: {type: Object, default: () => {}},
    },
  }
</script>

