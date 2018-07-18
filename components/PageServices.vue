<template>
  <AppSection class="page page--services">
    <div>
      <div class="content">
        <div class="block block--main">
          <h1 class="block__header title is-3 has-text-centered"><span class="codify">Services</span></h1>
          <div class="block__body has-text-centered">
            <p class="subtitle is-4 has-text-centered">What I do and what I can help you with...</p>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-half">
            <section class="block">
              <header class="block__header">
                <h3 class="title is-3">Front-End</h3>
              </header>
              <div class="block__body">
                <ul>
                  <li>HTML5</li>
                  <li>CSS3, SASS, LESS</li>
                  <li>Javascript, jQuery, Vue, Angular, React</li>
                  <li>Automation with Gulp, Grunt or NPM</li>
                </ul>
              </div>
            </section>
          </div>
          <div class="column is-half">
            <section class="block">
              <header class="block__header">
                <h3 class="title is-3">Back-End</h3>
              </header>
              <div class="block__body">
                <ul>
                  <li>PHP</li>
                  <li>Symfony</li>
                  <li>Laravel</li>
                  <li>NodeJS</li>
                </ul>
              </div>
            </section>
          </div>
          <div class="column is-half">
            <section class="block">
              <header class="block__header">
                <h3 class="title is-3">CMS</h3>
              </header>
              <div class="block__body">
                <ul>
                  <li>Drupal</li>
                  <li>Wordpress</li>
                  <li>Squarespace</li>
                </ul>
              </div>
            </section>
          </div>
          <div class="column is-half">
            <section class="block">
              <header class="block__header">
                <h3 class="title is-3">E-Commerce</h3>
              </header>
              <div class="block__body">
                <ul>
                  <li>Woocommerce</li>
                  <li>Drupal Commerce</li>
                  <li>Shopify</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </AppSection>
</template>

<script>
import AppSection from "~/components/AppSection"
export default {
  components: { AppSection }
}
</script>
