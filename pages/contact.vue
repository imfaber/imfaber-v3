<template>
  <PageContact />
</template>

<script>
import PageContact from "~/components/PageContact"
export default {
  components: { PageContact },
  async asyncData ({ params }) {
    const meta = {
      title:       'Get in touch',
      description: 'If you wanna get in touch, talk to me about a project collaboration or just say hi, contact me via social media or contact form.',
      url:         `${process.env.baseUrl}/contact`,
    }
    return {meta};
  }
}
</script>