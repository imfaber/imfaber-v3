<template>
    <div class="hello">

        <div>
            <div class="block block--transparent"><span class="emoticon">👋</span></div>
            <h1 class="block block--transparent">Hello, my name is Fabrizio Meinero.</h1>
            <div class="block block--transparent">
                <p>I'm a freelance Full-Stack Web Developer and I love to build</p>
                <p>
                    <span class="typed-text"></span>
                </p>
            </div>
            <div class="block block--transparent block--availability">
                <p>
                    <nuxt-link to="/contact"
                               class="hint--bottom hint--rounded hint--bounce hint--success"
                               aria-label="Get in touch">
                        <span><b>Have a project for me?</b><br/>I'm available for hire!</span>
                    </nuxt-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
  import Typed from 'typed.js'
  import 'hint.css'

  export default {
    mounted(){
      const typed = new Typed('.typed-text', {
        strings:    [
          " web applications",
          " corporate and personal websites",
          " responsive user interfaces",
          " communities",
          " eCommerce",
        ],
        typeSpeed:  30,
        backSpeed:  20,
        backDelay:  2000,
        cursorChar: '_',
        loop:       true,
      });
    }
  }
</script>
