<template>
    <article class="article article--lab"
             :class="'article--' + article.tags[0].machine_name">
        <header class="article__header">
            <div class="block block--transparent">
                <div class="block__body">
                    <h1 class="title is-1 has-text-centered">
                        {{article.title}}
                    </h1>

                    <div class="columns is-mobile is-centered is-multiline">
                        <div class="column is-narrow">
                            <time :datetime="article.createdAt">{{createdAtFormatted}}</time>
                        </div>
                        <div class="column is-narrow">
                            <div class="columns is-mobile is-centered">
                                <i class="column is-narrow fa fa-tags"
                                   aria-hidden="true"></i>
                                <AppFilters
                                  class="field is-grouped is-grouped-multiline column is-narrow"
                                  :filters="article.tags"></AppFilters>
                            </div>
                        </div>
                    </div>

                    <div class="columns is-desktop">
                        <div
                          class="column is-three-quarters-desktop">
                            <figure class="image is-16by9">
                                <img class="lazy-image"
                                     v-lazy="article.image.imageFile.meta.derivatives.d10_standard"
                                     :alt="article.title">
                            </figure>
                        </div>
                        <div class="column">
                            <div class="table-of-contents">
                                <h3 class="title is-4">Table of contents</h3>
                                <ol>
                                    <li v-for="(paragraph, index) in article.paragraphs" v-if="paragraph.field_title">
                                        <a :href="'#paragraph-' + paragraph.id" :data-index="index + 1">
                                            {{paragraph.field_title}}
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </header>

        <div class="article__content">
            <div class="block block--transparent article-links">
                <div class="buttons has-addons is-centered">
                    <a class="button is-medium is-warning">
                    <span class="icon">
                          <i class="fa fa-github"></i>
                    </span>
                        <span>GitHub</span>
                    </a>
                    <a class="button is-medium is-danger">
                    <span class="icon">
                          <i class="fa fa-github"></i>
                    </span>
                        <span>GitHub</span>
                    </a>
                    <a class="button is-medium is-info">
                    <span class="icon">
                          <i class="fa fa-github"></i>
                    </span>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>

            <div class="block block--transparent">
                <div class="paragraphs">
                    <div v-for="paragraph in article.paragraphs"
                         class="paragraph"
                         :class="paragraph.typeId"
                         :id="'paragraph-' + paragraph.id">

                        <h2 class="paragraph__container title is-2" v-if="paragraph.field_title">
                            <a :href="'#paragraph-' + paragraph.id"
                               class="anchor-link">
                                {{paragraph.field_title}}
                            </a>
                        </h2>

                        <div
                          class="content paragraph__container"
                          v-if="paragraph.typeId == 'paragraph--text'"
                          v-html="paragraph.field_body">
                        </div>

                        <template v-if="paragraph.typeId == 'paragraph--image'">
                            <figure class="image">
                                <img class="lazy-image"
                                     v-lazy="paragraph.field_media.imageFile.meta.derivatives.d12"
                                     :alt="article.title" @click="zoom">
                            </figure>
                        </template>

                        <div class="paragraph__container" v-if="paragraph.typeId == 'paragraph--video'">
                            <youtube class="video-wrapper" :video-id="ytVideoIdFromUrl(paragraph.field_media.video_url)"></youtube>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="block block--transparent">

        </section>

    </article>
</template>

<script>
  import moment from 'moment'
  import AppFilters from './AppFilters.vue'
  import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'

  export default {
    components: {AppFilters},
    props:      {
      article: {type: Object, default: () => {}},
    },
    data(){
      return {
        stikyKitOptions: {
          parent:     '.page',
          offset_top: 70
        },
        zoomed: []
      }
    },
    computed:   {
      createdAtFormatted(){
        return moment(String(this.article.createdAt)).locale('en-gb').format('LL')
      },
    },

    methods: {
      ytVideoIdFromUrl (url) {
        if (this.$youtube) {
          return this.$youtube.getIdFromURL(url)
        }
        return null;
      },
      ytVideoTimeFromURL (url) {
        if (this.$youtube) {
          return this.$youtube.getTimeFromURL(url)
        }
        return null;
      },
      zoom(e) {
        if (!e.target.classList.contains('zoom')) {
          e.target.classList.add('zoom')
        }
        else {
          e.target.classList.remove('zoom')
        }
      }
    },

    mounted () {
      console.log('article', this.article);
    },

  }
</script>

