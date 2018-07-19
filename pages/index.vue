<template>
  <PageIndex />
</template>

<script>
import PageIndex from '~/components/PageIndex'

export default {
  components: { PageIndex },
  async asyncData ({ params }) {
    const meta = {
      url:         `${process.env.baseUrl}`,
    }
    return {meta};
  }
}
</script>
