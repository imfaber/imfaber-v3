<template>
  <PageIndex />
</template>

<script>
import PageIndex from '~/components/PageIndex'
import { findAllLatestRecipes, findHomePromotedArticlesAndRecipes  } from '~/lib/api'

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
