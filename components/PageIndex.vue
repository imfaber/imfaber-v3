<template>
    <AppSection class="page page--index">
        <div class="container">
            <Hello></Hello>
        </div>
    </AppSection>
</template>

<script>
  import AppSection from '~/components/AppSection'
  import Hello from '~/components/Hello'

  export default {
    components: {AppSection, Hello},
  }
</script>

<style scoped lang="scss">
    .page--index {
        background: #2a2a2a;
    }
</style>