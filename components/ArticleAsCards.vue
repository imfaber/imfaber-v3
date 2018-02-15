<template>
    <div class="articles">
        <BulmaGrid :items="articles" :itemsByRow="cardsByRow">
            <template scope="props">
                <ArticleAsCard :article="props.item" :base-path="basePath"></ArticleAsCard>
            </template>
        </BulmaGrid>
        <div v-if="!articles.length" class="block block--card block--no-results">
            <p><span class="emoticon">😢</span><br/>No results found!</p>
        </div>
    </div>
</template>

<script>
  import ArticleAsCard from './ArticleAsCard.vue'
  import BulmaGrid from './BulmaGrid'
  export default {
    components: {ArticleAsCard, BulmaGrid},
    props:      {
      cardsByRow: {type: String, default: "4"},
      articles:   {type: Array, default: []},
      basePath:   {type: String, default: '/'},
    }
  }
</script>
