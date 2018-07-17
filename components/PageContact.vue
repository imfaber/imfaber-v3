<template>
  <AppSection class="page page--contact">
    <div class="container">
      <div class="content">
        <div class="block block--main">
          <h1 class="block__header title is-3 has-text-centered"><span class="codify">Get in touch</span></h1>
          <div class="block__body has-text-centered">
            <p class="is-size-5">If you want to get in touch, talk to me about a project, collaboration or just say hi,
              feel free to contact me by <a class="link--green" href="mailto:fabrizio@imfaber.me" title="Get in touch by email">email</a>, using the following social media or the form below.</p>
            <nav class="level has-text-centered">
              <div class="level-left">
                <div class="level-item has-text-centered">
                  <a class="navbar-item social-icon" target="_blank"
                     href="https://github.com/imfaber">
                    <span class="icon"><i class="fa fa-github"></i></span>
                  </a>
                </div>
                <div class="level-item has-text-centered">
                  <a class="navbar-item social-icon" target="_blank"
                     href="https://twitter.com/imfaber">
                    <span class="icon"><i class="fa fa-twitter"></i></span>
                  </a>
                </div>
                <div class="level-item has-text-centered">
                  <a class="navbar-item social-icon" target="_blank"
                     href="https://www.linkedin.com/pub/fabrizio-meinero/35/a57/782">
                    <span class="icon"><i class="fa fa-linkedin"></i></span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </AppSection>
</template>

<script>
import ContactForm from "~/components/ContactForm"
import AppSection from "~/components/AppSection"
export default {
  components: { ContactForm, AppSection }
}
</script>
