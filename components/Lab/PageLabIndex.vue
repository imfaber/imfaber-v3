<template>
    <AppSection v-if="articles" class="page page--lab-index">
        <div class="block block--filters">
            <h1 class="block__header title is-h3 has-text-centered"><span class="codify">Laboratory</span></h1>
            <AppFilters class="field is-grouped is-grouped-multiline block__body" :filters="filters" :reset-button="true" :path="basePath"></AppFilters>
        </div>
        <ArticleAsCards :articles="articles" :base-path="basePath" cards-by-row="3"></ArticleAsCards>
    </AppSection>
</template>

<script>
  import ArticleAsCards from '~/components/ArticleAsCards.vue'
  import AppSection from '~/components/AppSection'
  import AppFilters from '../AppFilters.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {ArticleAsCards, AppSection, AppFilters},
    props:      {
      articles: {type: Array, default: () => []}
    },
    data () {
      return {
        basePath: '/lab'
      }
    },
    computed:   {
      ...mapGetters({
        filters: 'lab/filters'
      }),
    },
    mounted () {
      console.log(this.articles);
//      console.log(this.article.paragraphs[0].type);
    },
  }
</script>

