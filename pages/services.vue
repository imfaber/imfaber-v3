<template>
  <PageServices />
</template>

<script>
import PageServices from "~/components/PageServices"
export default {
  components: { PageServices },
  async asyncData ({ params }) {
    const meta = {
      title:       'Services',
      description: 'What I do and what I could help you with.',
      url:         `${process.env.baseUrl}/contact`,
    }
    return {meta};
  }
}
</script>