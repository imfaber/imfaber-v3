<template>
    <div class="block block--card">
        <nuxt-link :to="{path: '/work/' + work.slug.value}">
            <BulmaCard :style="{'background-color': work.background_color.color}">
                <h3 slot="header" v-if="" class="title has-text-centered">
                    {{ work.title }}
                </h3>
                <div slot="image" v-if="work.image" class="">
                    <figure class="image is-3by2">
                        <img class="lazy-img-fadein"
                             v-lazy="work.image.thumbnail.url"/>
                    </figure>
                </div>
                <div slot="content" class="has-text-centered">
                    <div class="description">
                        <AppFilters class="field is-grouped is-grouped-multiline"
                                    :filters="work.technology" :reset-button="false"></AppFilters>
                    </div>
                </div>
            </BulmaCard>
        </nuxt-link>
    </div>
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

