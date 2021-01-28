<template>
  <thead :style="{ backgroundImage: `url(${background})` }">
    <tr>
      <th v-for="(value, index) in headers" :key="index">{{ value }}</th>
    </tr>
  </thead>
</template>

<script>
import ScalesSvg from "@/assets/shadow-scale-pattern-32.svg";
export default {
  name: "TableHeader",
  props: {
    headers: Array
  },
  data() {
    return {
      background: ScalesSvg
    };
  }
};
</script>

<style lang="scss" scoped>
th {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

tr {
  height: 2rem;
}

thead {
  background: $primary;
  color: white;
  border-radius: $app-border-radius;
  height: 2rem;
}
</style>
