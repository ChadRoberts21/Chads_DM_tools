<template>
  <div class="container" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    fluid: {
      type: Boolean,
      default: false
    },
    gridList: {
      type: String,
      default: "xs"
    }
  },
  computed: {
    gridListClass() {
      switch (this.gridList) {
        case "xl":
          return "grid-list-xl";
        case "lg":
          return "grid-list-lg";
        case "md":
          return "grid-list-md";
        case "sm":
          return "grid-list-sm";
        case "xs":
          return "grid-list-xs";
        default:
          return null;
      }
    },
    classes() {
      let classes = "";
      if (this.fluid) classes += " fluid";
      if (this.gridList) classes += ` ${this.gridListClass}`;
      return classes.trim();
    }
  }
};
</script>

<style lang="scss">
.container {
  display: flex;
}
</style>
