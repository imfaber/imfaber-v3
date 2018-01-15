<template>
    <AppSection v-if="work" class="page page--work-details"
                :class="'work--' + work.slug.value">

        <article>
            <header class="work__header">
                <div class="block block--main"
                     :style="{'background-color': work.background_color.color}">
                    <div class="block__body">
                        <h1 class="title is-h1">{{work.title}}</h1>
                        <div class="description" v-html="work.body.value"></div>
                    </div>
                </div>

                <div class="block block--pager has-addons">
                    <span class="button is-dark"><i class="fa fa-arrow-left"
                                                    aria-hidden="true"></i></span>
                    <nuxt-link to="/work" class="button is-dark">
                        <i class="fa fa-th-large" aria-hidden="true"></i>
                    </nuxt-link>
                    <span class="button is-dark"><i class="fa fa-arrow-right"
                                                    aria-hidden="true"></i></span>
                </div>
            </header>

            <div class="columns">
                <div class="column is-one-third-tablet sticky">
                    <section class="block block--transparent">
                        <span class="tag is-danger is-large">{{workYear}}</span>
                        <a v-if="work.is_online" class="tag is-large"
                           :href="work.project_link.uri"
                           target="_blank">{{work.project_link.title}}</a>
                        <span v-else class="tag is-danger is-large">The site offline</span>
                    </section>

                    <section class="block">
                        <header class="block__header">
                            <h3 class="title is-h3">Role</h3>
                        </header>
                        <div class="block__body">
                            <p>
                                In this project I acted as
                                <template v-for="(role, i) in work.role">
                                    <template v-if="i && i < work.role.length - 1">, </template>
                                    <template v-if="i && i == work.role.length - 1"> and </template>
                                    <strong>{{role.name}}</strong>
                                </template> developer.
                            </p>
                        </div>
                    </section>

                    <section class="block">
                        <header class="block__header">
                            <h3 class="title is-h3">Technologies & Skills</h3>
                            <p class="subtitle">
                                Code technologies I got involved while working on this project</p>
                        </header>
                        <div class="block__body">
                            <AppFilters class="field is-grouped is-grouped-multiline"
                                        :filters="work.technology"></AppFilters>
                        </div>
                    </section>

                </div>
                <div class="column is-two-third-tablet">
                    <section class="block block--transparent">
                        <style>
                            .swiper-pagination-bullet-active {
                                background: {{work.background_color.color}};
                            }
                        </style>
                        <div v-swiper:mySwiper="swiperOption">
                            <template v-if="banners.length>1">
                                <div class="swiper-pagination" slot="pagination"></div>
                                <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
                                <!--<div class="swiper-button-next" slot="button-next"></div>-->
                            </template>
                            <div class="swiper-wrapper">
                                <div class="swiper-slide has-text-centered work-gallery" v-for="banner in banners">
                                    <span class="frame">
                                        <img :src="banner">
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
  import WorkAsDetail from './WorkAsDetail'
  import AppFilters from '../AppFilters'
  import AppSection from '../AppSection'
  import moment from 'moment'
  import 'swiper/dist/css/swiper.css'
//  import 'sticky-kit/dist/sticky-kit.js';
  import $ from 'jquery'

  export default {
    components: {WorkAsDetail, AppSection, AppFilters},
    props:      {
      work: {type: Object, default: () => {}},
    },
    data () {
      return {
        swiperOption: {
          slidesPerView: 'auto',
          autoHeight: true,
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    computed:   {
      banners(){
        let banners = [];
        this.work.image_gallery.forEach((item) => {
          banners.push(item.imageFile.url)
        })
        return banners
      },
      workYear(){
        return moment(String(this.work.year)).format('YYYY')
      }
    },
    mounted () {
//      debugger
      console.log(this.work);
//      require('sticky-kit/dist/sticky-kit.js')
//      $(".column.sticky").stick_in_parent();
    }
  }
</script>

