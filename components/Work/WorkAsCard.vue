<template>
    <nuxt-link :to="{path: '/work/' + work.slug.value}">
        <BulmaCard>
            <div slot="image" v-if="work.image" class="">
                <figure class="image is-3by2">
                    <img class="lazy-img-fadein"
                         v-lazy="work.image.thumbnail.url"/>
                </figure>
            </div>
            <div slot="content" class="has-text-centered">
                <div class="description">
                    <h3 class="title is-5">{{ work.title }}</h3>
                    <AppFilters class="field is-grouped is-grouped-multiline"
                                :filters="work.technology" :reset-button="false"></AppFilters>
                </div>
            </div>
        </BulmaCard>
    </nuxt-link>
</template>

<script>
  import BulmaCard from '~/components/BulmaCard'
  import AppFilters from '../AppFilters.vue'
  export default {
    components: {BulmaCard, AppFilters},
    props:      {
      work: {type: Object, default: () => [], required: true}
    },
  }
</script>

<style scoped>

    .thumbnail {
        max-height: 220px;
        overflow: hidden;
    }

    .image.is-square {
        background-color: whitesmoke
    }

    .card:hover {
        transition: all 0.2s ease-in-out;
        top: -10px;
        box-shadow: 0 2px 30px;
    }

    .card {
        height: 100%;
        position: relative;
        transition: all 0.3s ease-in-out;
        top: 0
    }

    .card .description {
        font-style: italic
    }

</style>

