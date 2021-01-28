<template>
  <table>
    <table-header :headers="headers" />
    <tbody>
      <table-row v-for="(item, index) in items" :key="index" :item="item" />
    </tbody>
  </table>
</template>

<script>
import TableHeader from "./Table/TableHeader.vue";
import TableRow from "./Table/TableRow.vue";
export default {
  name: "Table",
  components: {
    TableHeader,
    TableRow
  },
  props: {
    headers: Array,
    items: Array
  }
};
</script>

<style lang="scss">
table {
  border-style: solid;
  border-spacing: unset;
  border-color: $primary;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 1px;
  border-bottom-left-radius: $app-border-radius;
  border-bottom-right-radius: $app-border-radius;
  border-top-width: 0;
  padding-bottom: 1rem;
}

table th:first-child {
  border-radius: $app-border-radius 0 0 0;
}

table th:last-child {
  border-radius: 0 $app-border-radius 0 0;
}
</style>
