<template>
    <AppSection v-if="work" class="page page--work-details"
                :class="'work--' + work.slug.value">

        <article>
            <header class="work__header">
                <div class="block block--main"
                     :style="brandColours">
                    <div class="block__body">
                        <h1 class="title is-h1">
                            <a v-if="work.is_online"
                               :href="work.project_link.uri"
                               target="_blank">{{work.title}} <i class="fa fa-external-link" aria-hidden="true"></i></a>
                            <template v-else><span class="codify">{{work.title}}</span></template>
                        </h1>
                        <div class="description" v-html="work.body.value"></div>
                    </div>
                </div>

                <div class="block--pager has-addons">
                    <nuxt-link
                      v-if="prevWork"
                      :to="{path: '/work/' + prevWork.slug.value}"
                      class="button is-dark hint--top hint--rounded hint--bounce"
                      :aria-label="prevWork.title"
                    >
                        <i class="fa fa-arrow-left"
                           aria-hidden="true"></i>
                    </nuxt-link>

                    <nuxt-link
                      to="/work"
                      class="button is-dark hint--top hint--rounded hint--bounce"
                      aria-label="See full list"
                    >
                        <i class="fa fa-th-large" aria-hidden="true"></i>
                    </nuxt-link>

                    <nuxt-link
                      v-if="nextWork"
                      :to="{path: '/work/' + nextWork.slug.value}"
                      class="button is-dark hint--top hint--rounded hint--bounce"
                      :aria-label="nextWork.title"
                    >
                        <i class="fa fa-arrow-right"
                           aria-hidden="true"></i>
                    </nuxt-link>
                </div>
            </header>


            <div class="columns">
                <div class="column is-one-third-tablet">
                    <div class="sticky" v-stick-in-parent="stikyKitOptions">
                        <section class="block">
                            <header class="block__header">
                                <h3 class="title is-h3">Role</h3>
                            </header>
                            <div class="block__body">
                                <p>
                                    In this project I acted as
                                    <template v-for="(role, i) in work.role">
                                        <template
                                          v-if="i && i < work.role.length - 1">
                                            ,
                                        </template>
                                        <template
                                          v-if="i && i == work.role.length - 1">
                                            and
                                        </template>
                                        <strong>{{role.name}}</strong>
                                    </template>
                                    developer.
                                </p>
                            </div>
                        </section>

                        <section class="block">
                            <header class="block__header">
                                <h3 class="title is-h3">
                                    Technologies & Skills</h3>
                                <p class="subtitle">
                                    Code technologies I got involved while working on this project</p>
                            </header>
                            <div class="block__body">
                                <AppFilters
                                  class="field is-grouped is-grouped-multiline"
                                  :filters="work.technology"></AppFilters>
                            </div>
                        </section>

                        <section class="block">
                            <header class="block__header">
                                <h3 class="title is-h3">This project was done...</h3>
                            </header>
                            <div class="block__body block__body--meta">
                                <p>...in <strong>{{workYear}}</strong> at <a :href="work.workplace.website.uri" target="_blank"><strong>{{work.workplace.name}}</strong></a></p>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="column is-two-third-tablet">
                    <section class="block block--transparent">
                        <style>
                            .tags:hover .tag,
                            .swiper-pagination-bullet-active {
                                background: {{ work.background_color.color}};
                                color: white;
                            }
                        </style>
                        <div v-swiper:mySwiper="swiperOption">
                            <template v-if="banners.length>1">
                                <div class="swiper-pagination"
                                     slot="pagination"></div>
                                <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
                                <!--<div class="swiper-button-next" slot="button-next"></div>-->
                            </template>
                            <div class="swiper-wrapper">
                                <div
                                  class="swiper-slide has-text-centered work-gallery"
                                  v-for="banner in banners">
                                    <span class="frame">
                                        <img v-lazy="banner">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </article>

    </AppSection>
</template>

<script>
  import AppFilters from '../AppFilters'
  import AppSection from '../AppSection'
  import moment from 'moment'
  import 'swiper/dist/css/swiper.css'
  import 'hint.css'
  import { mapGetters } from 'vuex'

  export default {
    components: {AppSection, AppFilters},
    props:      {
      work: {type: Object, default: () => {}},
    },
    data () {
      return {
        swiperOption:    {
          slidesPerView:  'auto',
          autoHeight:     true,
          centeredSlides: true,
          spaceBetween:   30,
          pagination:     {
            el:        '.swiper-pagination',
            clickable: true
          }
        },
        stikyKitOptions: {
          parent:     '.columns',
          offset_top: 70
        },
        brandColours: {
          'background-color': this.work.background_color.color
        },
        nextWork: null,
        prevWork: null,
      }
    },

    computed: {

      ...mapGetters({
        list: 'work/list'
      }),

      banners(){
        let banners = [];
        this.work.image_gallery.forEach((item) => {
          banners.push(item.imageFile.url)
        })
        return banners
      },

      workYear(){
        return moment(String(this.work.year)).format('YYYY')
      },

    },

    methods: {
      processWorkNavigation() {
        this.list.some((elem, i) => {
          if (elem.slug.value === this.work.slug.value) {
            if (this.list[i - 1]) {
              this.prevWork = this.list[i - 1]
            }
            if (this.list[i + 1]) {
              this.nextWork = this.list[i + 1]
            }
            return true
          }
        })
      }
    },

    watch: {
      list: function (newValue, oldValue) {
        this.processWorkNavigation()
      }
    },

    mounted () {
      this.processWorkNavigation()
      this.$Lazyload.$on('loaded', (data, formCache) => {
        if (this.mySwiper) {
          this.mySwiper.update();
        }
      })
    },

  }
</script>

