<template>
  <PageAbout />
</template>

<script>
import PageAbout from "~/components/PageAbout"
export default {
  components: { PageAbout },
  async asyncData ({ params }) {
    const meta = {
      title:       'About me',
      description: 'I am a Front End Engineer, Back End Developer and UI/UX specialist.',
      url:         `${process.env.baseUrl}/contact`,
    }
    return {meta};
  }
}
</script>