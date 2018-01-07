<template>
    <AppSection class="page page--index">
        <Hello></Hello>
    </AppSection>
</template>

<script>
  import AppSection from '~/components/AppSection'
  import Hello from '~/components/Hello'

  export default {
    components: {AppSection, Hello},
  }
</script>
