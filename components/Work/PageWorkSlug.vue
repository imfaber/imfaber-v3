<template>
  <AppSection v-if="work" class="page page--work-details"
              :class="'work--' + work.slug.value">

    <style lang="scss">
      .nuxt-progress{
      background: {{ work.background_color.color}} !important;
      }

      .navbar.is-fluid .navbar-item.is-active {
      color: {{ work.background_color.color}};
      }
      .navbar.is-fluid .navbar-item:after {
      background: {{ work.background_color.color}};
      }

      .tags:hover .tag,
      .swiper-pagination-bullet-active {
      background: {{ work.background_color.color}};
      color: white;
      }
      .tabs li.is-active a{
      border-bottom-color: {{ work.background_color.color}};
      color: {{ work.background_color.color}};
      }

      .page--work-details header.work__header .block--main:before {
        background: {{ work.background_color.color}};
      }
    </style>

    <style v-if="work.slug.value=='wwf-uk'">
      .nuxt-progress{
      background: #ffffff !important;
      }

      .navbar.is-fluid .navbar-item.is-active {
      color: #ffffff;
      }
      .navbar.is-fluid .navbar-item:after {
      background: #ffffff;
      }
    </style>

    <article>
      <header class="work__header">
        <div class="block block--main"
             :style="brandColours">
          <div class="block__body">
            <h1 class="title is-1">
              <a v-if="work.is_online"
                 :href="work.project_link.uri"
                 target="_blank">{{work.title}} <i
                class="fa fa-external-link"
                aria-hidden="true"></i></a>
              <template v-else><span
                class="codify">{{work.title}}</span></template>
            </h1>
            <div class="description" v-html="work.body.value"></div>
          </div>
        </div>

        <div class="block--pager has-addons">


          <nuxt-link
            v-if="prevWork"
            :to="{path: '/work/' + prevWork.slug.value}"
            class="hint--top hint--top hint--rounded hint--bounce"
            :aria-label="prevWork.title"
          >
                        <span class="button is-dark"
                              :class="{'is-loading': prevLoading}"
                              @click="prevLoading = true"
                        >
                            <i class="fa fa-arrow-left" aria-hidden="true"></i>
                        </span>
          </nuxt-link>


          <nuxt-link
            to="/work"
            class="hint--top hint--rounded hint--bounce"
            aria-label="See full list"
          >
                        <span class="button is-dark"
                              :class="{'is-loading': listLoading}"
                              @click="listLoading = true"
                        >
                            <i class="fa fa-th-large" aria-hidden="true"></i>
                        </span>
          </nuxt-link>

          <nuxt-link
            v-if="nextWork"
            :to="{path: '/work/' + nextWork.slug.value}"
            class="hint--top hint--rounded hint--bounce"
            :aria-label="nextWork.title"
          >
                        <span class="button is-dark"
                              :class="{'is-loading': nextLoading}"
                              @click="nextLoading = true"
                        >
                            <i class="fa fa-arrow-right"
                               aria-hidden="true"></i>
                        </span>
          </nuxt-link>
        </div>
      </header>


      <div class="columns">
        <div class="column is-one-third-tablet">
          <div class="sticky" v-stick-in-parent="stikyKitOptions">
            <section class="block">
              <header class="block__header">
                <h3 class="title is-3">Role</h3>
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
                <h3 class="title is-3">
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
                <h3 class="title is-3">
                  This project was done...</h3>
              </header>
              <div class="block__body block__body--meta">
                <p>...in <strong>{{workYear}}</strong> at <a
                  :href="work.workplace.website.uri"
                  target="_blank"><strong>{{work.workplace.name}}</strong></a>
                </p>
              </div>
            </section>
          </div>
        </div>
        <div class="column is-two-third-tablet">
          <section class="block block--transparent">
            <div class="tabs is-toggle-rounded is-centered is-large"
                 v-if="banners.desktop.length || banners.tablet.length || banners.mobile.length">
              <ul>
                <li
                  :class="{'is-active': (activeTab == 'desktop')}"
                  v-if="banners.desktop.length">
                  <a
                    @click.stop.prevent="setActiveTab('desktop')">
                    <i class="fa fa-desktop"
                       aria-hidden="true"></i>
                  </a>
                </li>
                <li
                  :class="{'is-active': (activeTab == 'tablet')}"
                  v-if="banners.tablet.length">
                  <a
                    @click.stop.prevent="setActiveTab('tablet')">
                    <i class="fa fa-tablet"
                       aria-hidden="true"></i>
                  </a>
                </li>
                <li
                  :class="{'is-active': (activeTab == 'mobile')}"
                  v-if="banners.mobile.length">
                  <a
                    @click.stop.prevent="setActiveTab('mobile')">
                    <i class="fa fa-mobile"
                       aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div v-swiper:mySwiper="swiperOption"
                 v-if="activeTab=='desktop'">
              <template v-if="banners.desktop.length>1">
                <div class="swiper-pagination"
                     slot="pagination"></div>
              </template>
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide has-text-centered work-gallery"
                  v-for="banner in banners.desktop">
                                    <span class="frame">
                                        <img v-lazy="banner">
                                    </span>
                </div>
              </div>
            </div>
            <div v-swiper:mySwiper="swiperOption"
                 v-if="activeTab=='tablet'">
              <template v-if="banners.tablet.length>1">
                <div class="swiper-pagination"
                     slot="pagination"></div>
              </template>
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide has-text-centered work-gallery"
                  v-for="banner in banners.tablet">
                                    <span class="frame">
                                        <img v-lazy="banner">
                                    </span>
                </div>
              </div>
            </div>
            <div v-swiper:mySwiper="swiperOption"
                 v-if="activeTab=='mobile'">
              <template v-if="banners.mobile.length>1">
                <div class="swiper-pagination"
                     slot="pagination"></div>
              </template>
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide has-text-centered work-gallery"
                  v-for="banner in banners.mobile">
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
        prevLoading:     false,
        listLoading:     false,
        nextLoading:     false,
        stikyKitOptions: {
          parent:     '.columns',
          offset_top: 70
        },
        brandColours:    {
          'background-color': this.work.background_color.color
        },
        nextWork:        null,
        prevWork:        null,
        activeTab:       'desktop'
      }
    },

    computed: {

      ...mapGetters({
        list: 'work/list'
      }),

      banners(){
        let banners = {
          desktop: [],
          tablet:  [],
          mobile:  [],
        }
        this.work.desktop_gallery.forEach((item) => {
          banners.desktop.push(item.imageFile.url)
        })
        this.work.tablet_gallery.forEach((item) => {
          banners.tablet.push(item.imageFile.url)
        })
        this.work.mobile_gallery.forEach((item) => {
          banners.mobile.push(item.imageFile.url)
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
      },

      setActiveTab (tab) {
        this.activeTab = tab
        setTimeout(() => {
          this.mySwiper.init();
          this.mySwiper.slideTo(0, 0);
        }, 1)
      }
    },

    watch: {
      list: function (newValue, oldValue) {
        this.processWorkNavigation()
      }
    },

    mounted () {
//      console.log(this.work);
      this.processWorkNavigation()
      this.$Lazyload.$on('loaded', (data, formCache) => {
        if (this.mySwiper) {
          this.mySwiper.update();
        }
      })
    },

  }
</script>

