<template>
  <div class="columns is-multiline">
    <div :class="columnClasses" v-for="item in items">
      <slot :item="item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemsByRow: { type: String, default: "4" },
    items: { type: Array, default: [] }
  },
  computed: {
    columnClasses () {
      let colClass = 'column'

      switch (parseInt(this.itemsByRow)) {
        case 1:
          colClass += ' is-' + 12 / this.itemsByRow
          break
        case 2:
          colClass += ' is-half-tablet'
          break
        case 3:
          colClass += ' is-half-tablet is-one-third-desktop'
          break
        case 4:
          colClass += ' is-half-tablet is-one-third-desktop is-one-quarter-fullhd'
          break
      }
      return colClass
    },
    columns () {
      let columnIndex = 0
      let columns = {}
      for (const itemIndex in this.items) {
        if (itemIndex % this.itemsByRow === 0) {
          columns[++columnIndex] = []
        }
        columns[columnIndex].push(this.items[itemIndex])
      }
      return columns
    }
  }
}
</script>
