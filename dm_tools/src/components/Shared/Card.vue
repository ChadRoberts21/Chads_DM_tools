<template>
  <div class="card">
    <div
      v-if="title"
      class="title"
      :style="{ backgroundImage: `url(${background})` }"
    >
      <h2>{{ title }}</h2>
    </div>
    <slot />
  </div>
</template>

<script>
import ScalesSvg from "@/assets/shadow-scale-pattern-32.svg";
export default {
  name: "Card",
  props: ["title"],
  data() {
    return {
      background: ScalesSvg
    };
  }
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  -webkit-transition: -webkit-box-shadow 0.25s;
  transition: -webkit-box-shadow 0.25s;
  transition: box-shadow 0.25s;
  transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;
  border-radius: $app-border-radius;
  padding-left: 0;
  padding-right: 0;
  background: white;
  color: #000;
}

.card .title {
  border-radius: $app-border-radius $app-border-radius 0 0;
  background: $primary;
  color: white;
  min-height: 2rem;
}
</style>
