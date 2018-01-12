<template>
    <div class="block block--card">
        <nuxt-link :to="{path: '/work/' + work.slug.value}">
            <BulmaCard :style="{'background-color': work.background_color.color}" :class="'card--work work--' + work.slug.value">
                <h3 slot="header" v-if="" class="title has-text-centered">
                    {{ work.title }}
                </h3>
                <template v-if="work.image">
                    <figure slot="image" class="image is-3by2">
                        <span class="img" v-lazy:background-image="work.image.thumbnail.url"></span>
                        <span class="overlay" :style="{'background-color': work.background_color.color}"></span>
                    </figure>
                </template>
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

