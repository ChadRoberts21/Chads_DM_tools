<template>
  <div class="layout" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    row: {
      type: Boolean,
      default: true
    },
    column: {
      type: Boolean,
      default: false
    },
    wrap: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    },
    fillHeight: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: "center"
    },
    justify: {
      type: String,
      default: "center"
    }
  },
  computed: {
    justifyContent() {
      switch (this.justify.toLowerCase()) {
        case "start":
          return "jc-start";
        case "end":
          return "jc-end";
        case "left":
          return "jc-left";
        case "right":
          return "jc-right";
        case "flex-start":
          return "jc-flex-start";
        case "flex-end":
          return "jc-flex-end";
        case "space-between":
          return "jc-space-between";
        case "space-around":
          return "jc-space-around";
        case "space-evenly":
          return "jc-space-evenly";
        case "center":
        default:
          return "jc-center";
      }
    },
    alignItems() {
      switch (this.align.toLowerCase()) {
        case "stretch":
          return "align-stretch";
        case "flex-start":
          return "align-flex-start";
        case "flex-end":
          return "align-flex-end";
        case "baseline":
          return "align-baseline";
        case "first-baseline":
          return "align-first-baseline";
        case "last-baseline":
          return "align-last-baseline";
        case "start":
          return "align-start";
        case "end":
          return "align-end";
        case "self-start":
          return "align-self-start";
        case "self-end":
          return "align-self-end";
        case "center":
        default:
          return "align-center";
      }
    },
    direction() {
      let direction;
      if (this.row) direction = "row";
      if (this.column) direction = "column";

      if (this.reverse) direction += "-reverse";

      return direction;
    },
    classes() {
      let classes = `${this.justifyContent} ${this.alignItems} ${this.direction}`;

      if (this.wrap) classes += " wrap";
      return classes;
    }
  }
};
</script>
