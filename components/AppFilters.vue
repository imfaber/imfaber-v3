<template>
  <AppSection v-if="filters">
    <nav>
      <ul>
        <li v-for="filter in filters">
          <div class="control">
            <div class="tags has-addons">
              <nuxt-link class="tag is-link" :to="{path: '/works', query:{filter: filter.machine_name}}">
                {{filter.name}}
              </nuxt-link>
              <a class="tag is-delete"></a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </AppSection>
</template>

<script>
import AppSection from '~/components/AppSection'

export default {
  components: { AppSection },
  props: {
    filter: { type: String, default: "4" },
    items: { type: Array, default: [] }
  },
}
</script>