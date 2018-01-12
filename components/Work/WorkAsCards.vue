<template>
    <div class="works">
        <BulmaGrid :items="works" :itemsByRow="cardsByRow">
            <template scope="props">
                <WorkAsCard :work="props.item"></WorkAsCard>
            </template>
        </BulmaGrid>
        <div v-if="!works.length" class="block block--card block--no-results">
            <p><span class="emoticon">😢</span><br/>No results found!</p>
        </div>
    </div>
</template>

<script>
  import WorkAsCard from './WorkAsCard.vue'
  import BulmaGrid from '~/components/BulmaGrid'
  export default {
    components: {WorkAsCard, BulmaGrid},
    props:      {
      cardsByRow: {type: String, default: "4"},
      title:      {type: String, default: ''},
      moreLink:   {type: String, default: ''},
      works:      {type: Array, default: []}
    }
  }
</script>
