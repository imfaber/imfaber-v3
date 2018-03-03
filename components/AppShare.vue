<template>
    <social-sharing network-tag="div" :url="pageUrl()" inline-template>
        <div class="social-sharing columns is-mobile is-centered">
            <network network="facebook" class="column is-narrow">
                <span class="hint--top hint--rounded hint--bounce"
                      aria-label="Share on Facebook!">
                    <i class="fa fa-fw fa-facebook"></i>
                </span>
            </network>
            <network network="twitter" class="column is-narrow">
                <span class="hint--top hint--rounded hint--bounce"
                      aria-label="Share on Twitter!">
                    <i class="fa fa-fw fa-twitter"></i>
                </span>
            </network>
            <network network="googleplus" class="column is-narrow">
                <span class="hint--top hint--rounded hint--bounce"
                      aria-label="Share on Google+!">
                    <i class="fa fa-fw fa-google-plus"></i>
                </span>
            </network>
        </div>
    </social-sharing>
</template>

<script>
  import 'hint.css'
  export default {
    methods: {
      pageUrl(){
        if (process.browser) {
          return location.origin + location.pathname
        }
        return null;
      }
    }
  }
</script>

