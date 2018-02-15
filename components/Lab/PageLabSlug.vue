<template>
  <AppSection v-if="lab" class="page page--lab-details"
              :class="'lab--' + lab.slug.value">

    <style>
      .nuxt-progress{
      background: {{ lab.background_color.color}} !important;
      }

      .navbar.is-fluid .navbar-item.is-active {
      color: {{ lab.background_color.color}};
      }
      .navbar.is-fluid .navbar-item:after {
      background: {{ lab.background_color.color}};
      }

      .tags:hover .tag,
      .swiper-pagination-bullet-active {
      background: {{ lab.background_color.color}};
      color: white;
      }
      .tabs li.is-active a{
      border-bottom-color: {{ lab.background_color.color}};
      color: {{ lab.background_color.color}};
      }
    </style>

    <style v-if="lab.slug.value=='wwf-uk'">
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
      <header class="lab__header">
        <div class="block block--main"
             :style="brandColours">
          <div class="block__body">
            <h1 class="title is-h1">
              <a v-if="lab.is_online"
                 :href="lab.project_link.uri"
                 target="_blank">{{lab.title}} <i
                class="fa fa-external-link"
                aria-hidden="true"></i></a>
              <template v-else><span
                class="codify">{{lab.title}}</span></template>
            </h1>
            <div class="description" v-html="lab.body.value"></div>
          </div>
        </div>

        <div class="block--pager has-addons">


          <nuxt-link
            v-if="prevLab"
            :to="{path: '/lab/' + prevLab.slug.value}"
            class="hint--top hint--top hint--rounded hint--bounce"
            :aria-label="prevLab.title"
          >
                        <span class="button is-dark"
                              :class="{'is-loading': prevLoading}"
                              @click="prevLoading = true"
                        >
                            <i class="fa fa-arrow-left" aria-hidden="true"></i>
                        </span>
          </nuxt-link>


          <nuxt-link
            to="/lab"
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
            v-if="nextLab"
            :to="{path: '/lab/' + nextLab.slug.value}"
            class="hint--top hint--rounded hint--bounce"
            :aria-label="nextLab.title"
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
                <h3 class="title is-h3">Role</h3>
              </header>
              <div class="block__body">
                <p>
                  In this project I acted as
                  <template v-for="(role, i) in lab.role">
                    <template
                      v-if="i && i < lab.role.length - 1">
                      ,
                    </template>
                    <template
                      v-if="i && i == lab.role.length - 1">
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
                  Code technologies I got involved while labing on this project</p>
              </header>
              <div class="block__body">
                <AppFilters
                  class="field is-grouped is-grouped-multiline"
                  :filters="lab.technology"></AppFilters>
              </div>
            </section>

            <section class="block">
              <header class="block__header">
                <h3 class="title is-h3">
                  This project was done...</h3>
              </header>
              <div class="block__body block__body--meta">
                <p>...in <strong>{{labYear}}</strong> at <a
                  :href="lab.labplace.website.uri"
                  target="_blank"><strong>{{lab.labplace.name}}</strong></a>
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
                  class="swiper-slide has-text-centered lab-gallery"
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
                  class="swiper-slide has-text-centered lab-gallery"
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
                  class="swiper-slide has-text-centered lab-gallery"
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
      lab: {type: Object, default: () => {}},
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
          'background-color': this.lab.background_color.color
        },
        nextLab:        null,
        prevLab:        null,
        activeTab:       'desktop'
      }
    },

    computed: {

      ...mapGetters({
        list: 'lab/list'
      }),

      banners(){
        let banners = {
          desktop: [],
          tablet:  [],
          mobile:  [],
        }
        this.lab.desktop_gallery.forEach((item) => {
          banners.desktop.push(item.imageFile.url)
        })
        this.lab.tablet_gallery.forEach((item) => {
          banners.tablet.push(item.imageFile.url)
        })
        this.lab.mobile_gallery.forEach((item) => {
          banners.mobile.push(item.imageFile.url)
        })
        return banners
      },

      labYear(){
        return moment(String(this.lab.year)).format('YYYY')
      },

    },

    methods: {
      processLabNavigation() {
        this.list.some((elem, i) => {
          if (elem.slug.value === this.lab.slug.value) {
            if (this.list[i - 1]) {
              this.prevLab = this.list[i - 1]
            }
            if (this.list[i + 1]) {
              this.nextLab = this.list[i + 1]
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
        this.processLabNavigation()
      }
    },

    mounted () {
//      console.log(this.lab);
      this.processLabNavigation()
      this.$Lazyload.$on('loaded', (data, formCache) => {
        if (this.mySwiper) {
          this.mySwiper.update();
        }
      })
    },

  }
</script>

