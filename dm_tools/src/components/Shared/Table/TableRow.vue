<template>
  <tr>
    <td
      v-for="(value, key) in item"
      :key="key + value"
      :class="{
        number: typeof value === 'number',
        text: typeof value === 'string'
      }"
    >
      {{ value }}
    </td>
  </tr>
</template>

<script>
export default {
  name: "TableRow",
  props: {
    item: Object
  }
};
</script>

<style lang="scss" scoped>
td {
  padding: 0.5rem;
  padding-top: 1rem;
}

td.text {
  text-align: left;
}

td.number {
  text-align: right;
}
</style>
