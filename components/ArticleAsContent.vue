<template>
    <article class="article article--lab"
             :class="'article--' + article.tags[0].machine_name">
        <header class="article__header">
            <div class="block block--transparent">
                <div class="block__body">
                    <h1 class="title is-2 has-text-centered">
                        <span class="codify">{{article.title}}</span>
                    </h1>

                    <div
                      class="columns is-mobile is-centered is-multiline article-meta">
                        <div class="column is-narrow">
                            <time :datetime="article.createdAt">{{createdAtFormatted}}</time>
                        </div>
                        <div class="column is-narrow">
                            <div class="columns is-mobile is-centered">
                                <i class="column is-narrow fa fa-tags"
                                   aria-hidden="true"></i>
                                <AppFilters
                                  class="field is-grouped is-grouped-multiline column is-narrow"
                                  :path="filterPath"
                                  :filters="article.tags"></AppFilters>
                            </div>
                        </div>
                    </div>

                    <div v-if="article.category.machine_name=='snippet'">
                        <figure class="image">
                            <img class="lazy-image"
                                 v-lazy="article.image.imageFile.meta.derivatives.d8_standard"
                                 :alt="article.title">
                        </figure>
                        <AppShare></AppShare>
                    </div>
                    <div class="columns is-desktop" v-else>
                        <div class="column is-three-quarters-desktop">
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
                                    <li
                                      v-for="(paragraph, index) in article.paragraphs"
                                      v-if="paragraph.field_title">
                                        <a :href="'#paragraph-' + paragraph.id"
                                           :data-index="index + 1">
                                            {{paragraph.field_title}}
                                        </a>
                                    </li>
                                    <li>
                                        <span class="tag is-info">
                                            <i
                                              class="column is-narrow fa fa-comments"
                                              aria-hidden="true"></i>
                                        </span>
                                        <a href="#disqus_thread"
                                           class="disqus-comment-count"
                                           :data-disqus-identifier="article.id">
                                            Comments
                                        </a>
                                    </li>
                                </ol>
                            </div>
                            <AppShare></AppShare>
                        </div>
                    </div>


                </div>
            </div>
        </header>

        <div class="article__content">
            <div class="block block--transparent article-links">
                <div class="buttons has-addons is-centered">
                    <a
                      class="button is-warning hint--top hint--rounded hint--bounce"
                      v-if="article.demo"
                      :href="article.demo.uri"
                      target="_blank"
                      aria-label="See a demo">
                        <span class="icon">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                        </span>
                        <span
                          v-if="article.demo.title">{{article.demo.title}}</span>
                        <span v-else>Demo</span>
                    </a>
                    <a
                      class="button is-danger hint--top hint--rounded hint--bounce"
                      v-if="article.source_code"
                      :href="article.source_code.uri"
                      target="_blank"
                      aria-label="Get the source code">
                        <span class="icon">
                            <i class="fa fa-code" aria-hidden="true"></i>
                        </span>
                        <span
                          v-if="article.source_code.title">{{article.source_code.title}}</span>
                        <span v-else>Code</span>
                    </a>
                    <a
                      class="button is-info hint--top hint--rounded hint--bounce"
                      v-if="article.project"
                      :href="article.project.uri"
                      target="_blank"
                      aria-label="Go to the project page">
                        <span class="icon">
                            <i class="fa fa-asterisk" aria-hidden="true"></i>
                        </span>
                        <span
                          v-if="article.project.title">{{article.project.title}}</span>
                        <span v-else>Project</span>
                    </a>
                </div>
            </div>

            <div class="block block--transparent">
                <div class="paragraphs">
                    <div v-for="paragraph in article.paragraphs"
                         class="paragraph"
                         :class="paragraph.typeId"
                         :id="'paragraph-' + paragraph.id">

                        <h2 class="paragraph__container title is-2"
                            v-if="paragraph.field_title">
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

                        <div
                          class="code"
                          :class="'code--'+paragraph.field_code.length+'-block'"
                          v-if="paragraph.typeId == 'paragraph--code'"
                          v-html="prismify(paragraph.field_code)">
                        </div>

                        <template v-if="paragraph.typeId == 'paragraph--image'">
                            <figure class="image">
                                <img class="lazy-image"
                                     v-lazy="paragraph.field_media.imageFile.meta.derivatives.d12"
                                     :alt="article.title" @click="zoom">
                            </figure>
                        </template>

                        <div class="paragraph__container"
                             v-if="paragraph.typeId == 'paragraph--video'">
                            <youtube class="video-wrapper"
                                     :video-id="ytVideoIdFromUrl(paragraph.field_media.video_url)"></youtube>
                        </div>

                        <div
                          class="paragraph__container"
                          v-if="paragraph.typeId == 'paragraph--quote'">
                            <blockquote
                              v-if="paragraph.typeId == 'paragraph--quote'">
                                {{paragraph.field_body_plain}}
                                <cite
                                  v-if="paragraph.field_source">— {{paragraph.field_source}}</cite>
                            </blockquote>
                        </div>
                    </div>
                    <AppShare></AppShare>
                </div>
            </div>
        </div>

        <div id="disqus_thread"></div>
        <script>
          var disqus_config = function () {
            this.page.url        = location.origin + location.pathname;
            this.page.identifier = '{{article.id}}';
          };

          (function () { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://imfaber.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
          })();
        </script>
    </article>
</template>

<script>
  import moment from 'moment'
  import AppFilters from './AppFilters.vue'
  import AppShare from './AppShare.vue'
  import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'
  import 'hint.css'
  import $ from 'jquery'
  import 'prismjs/themes/prism-tomorrow.css'

  export default {
    components: {AppFilters, AppShare},
    props:      {
      article:    {type: Object, default: () => {}},
      filterPath: {type: String, default: ''},
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
      },
      prismify(blocks){
        if (!Array.isArray(blocks)) blocks = [blocks]
        let prismCode = ''
        blocks.forEach(({value}, i) => {
          let tags = value.match(/\[\/?prism:((\w+)|((?:\w+-)+\w+))\]/ig)
          let lang = ''
          if (tags.length) {
            lang = tags[0].replace(/\[prism:|\]/g, '')
            tags.forEach((elem, i) => {
              if (i % 2 === 0) {
                value = value.replace(elem, `<code class="language-${lang}">`)
              }
              else {
                value = value.replace(elem, `</code>`)
              }
            })
            prismCode += `
            <div class="code__block">
                <header class="code__header">
                    <span class="paragraph__container">${lang}</span>
                </header>
                <div class="code__body" data-lang="${lang}">
                    <pre class="paragraph__container">${value.trim()}</pre>
                </div>
                <footer class="code__footer">
                </footer>
            </div>
          `;
          }
        })

        return prismCode;
      },
    },

    mounted () {
//      console.log('article', this.article);
    },

  }
</script>

