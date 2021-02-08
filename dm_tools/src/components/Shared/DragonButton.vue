<template>
  <button :style="{ backgroundImage: `url(${background})` }">
    <slot />
  </button>
</template>

<script>
import ScalesSvg from "@/assets/shadow-scale-pattern-32.svg";
export default {
  name: "DragonButton",
  data() {
    return {
      background: ScalesSvg
    };
  }
};
</script>

<style lang="scss" scoped>
button {
  background: $primary;
  color: white;
  fill: white;
  border-radius: $app-border-radius;
  padding: 0.25rem;
  padding: 0.5rem 1rem;
  border: unset;
  font: unset;
  font-weight: bold;
  text-align: center;
  align-self: center;
  display: inline-flex;
  align-items: center;
}

button:focus {
  outline: unset;
  box-shadow: 0 4px 12px 1px #000000aa;
}

button:hover {
  background: white;
  color: $primary;
  fill: $primary;
}

button:active {
  background: white;
  color: $primary;
  fill: $primary;
  box-shadow: 0 4px 12px 1px #000000aa;
}
</style>
