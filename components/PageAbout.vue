<template>
    <div class="about">

        <div>
            <h1>Hello, my name is Fabrizio Meinero.</h1>
            <p>I'm a Full Stack Web Developer and I love to build</p>
            <p>
                <span class="typed-text"></span>
            </p>
            <p>
                <nuxt-link to="/about" class="navbar-item">Read more avout me<br /><i class="fa fa-chevron-down" aria-hidden="true"></i></nuxt-link>
            </p>
        </div>
    </div>
</template>

<script>


  export default {
    mounted(){

    }
  }
</script>

<style scoped lang="scss">
    .about {
        margin: 40px 0;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - 280px);

        h1 {
            font-size: 1.5rem;
            color: #cfcfcf;
            font-family: NunitoBold, Helvetica Neue, Helvetica, Arial, sans-serif;
            margin-bottom: 20px;
        }
        p {
            color: #7a7a7a;
            font-size: 1.2rem;
        }
    }
</style>