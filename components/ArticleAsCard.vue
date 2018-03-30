<template>
    <div class="block block--card">
        <nuxt-link :to="{path: `${basePath}/${article.slug.value}`}">
            <BulmaCard :class="`card--article article--${article.slug.value}`">
                <template v-if="article.image">
                    <figure slot="image" class="image is-16by9">
                        <img class="lazy-image"
                             v-lazy="article.image.imageFile.meta.derivatives.d5_standard"
                             :alt="article.title"/>
                        <AppFilters
                          :filters="[article.category]"
                          filter-name="category"
                          :path="basePath"></AppFilters>
                    </figure>
                </template>
                <div class="content" slot="content">
                    <h2 class="title is-5">{{article.title}}</h2>
                </div>
                <div slot="footer" class="footer">
                    <AppFilters class="field is-grouped is-grouped-multiline"
                                :filters="article.tags"
                                :reset-button="false"
                                filter-name="tag"
                                :path="basePath"></AppFilters>
                </div>
            </BulmaCard>
        </nuxt-link>
    </div>
</template>

<script>
  import BulmaCard from './BulmaCard'
  import AppFilters from './AppFilters.vue'
  export default {
    components: {BulmaCard, AppFilters},
    props:      {
      article:  {type: Object, default: () => [], required: true},
      basePath: {type: String, default: '/', required: true}
    },
    mounted() {
//      console.log(this.article);
    }
  }
</script>

