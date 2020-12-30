<template>
  <div class="flex" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    grow: {
      type: Boolean,
      default: false
    },
    shrink: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 1
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classes() {
      if (this.grow) return "grow";
      if (this.shrink) return "shrink";
      return "";
    }
  }
};
</script>

<style lang="scss">
.flex,
.child-flex > * {
  flex: 1 1 auto;
  max-width: 100%;
}

.grow {
  flex-grow: 1 !important;
  flex-shrink: 0 !important;
}
.shrink {
  flex-grow: 0 !important;
  flex-shrink: 1 !important;
}
</style>
