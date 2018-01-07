<template>
    <div class="recipes">
        <BulmaGrid :items="works" :itemsByRow="cardsByRow">
            <template scope="props">
                <WorkAsCard :work="props.item"></WorkAsCard>
            </template>
        </BulmaGrid>
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
