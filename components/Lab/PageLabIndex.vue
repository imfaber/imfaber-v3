<template>
    <AppSection v-if="articles" class="page page--lab-index">
        <div class="block block--filters">
            <div class="block__header">
                <h1 class="title is-1 has-text-centered is-spaced"><span
                  class="codify">Laboratory</span></h1>
                <p class="subtitle is-4 has-text-centered">
                    Tools, modules, experiments and everything else accomplished on my spare software development time.</p>
            </div>
            <AppFilters
              class="field is-grouped is-grouped-multiline block__body block__body--category"
              :filters="categoryFilters"
              :reset-button="true"
              filter-name="category"
              :path="basePath"></AppFilters>
            <AppFilters
              class="field is-grouped is-grouped-multiline block__body"
              :filters="tagFilters"
              :reset-button="true"
              filter-name="tag"
              :path="basePath"></AppFilters>
        </div>
        <ArticleAsCards :articles="articles" :base-path="basePath"
                        cards-by-row="3"></ArticleAsCards>
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
        tagFilters:      'lab/tagFilters',
        categoryFilters: 'lab/categoryFilters'
      }),
    },
    mounted () {
      console.log(this.articles);
//      console.log(this.article.paragraphs[0].type);
    },
  }
</script>

