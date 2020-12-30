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
    "fill-height": {
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
      let classes = `${this.justifyContent} ${this.align} ${this.direction}`;

      if (this.wrap) classes += " wrap";
      return classes;
    }
  }
};
</script>

<style lang="scss">
.layout {
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  min-width: 0;
}
.row {
  flex-direction: row;
}
.row-reverse {
  flex-direction: row-reverse;
}
.column {
  flex-direction: column;
}
.column-reverse {
  flex-direction: column-reverse;
}
.wrap {
  flex-wrap: wrap;
}
.nowrap {
  flex-wrap: nowrap;
}
.wrap-reverse {
  flex-wrap: wrap-reverse;
}
.fill-height {
  height: 100%;
}

.jc-flex-start {
  justify-content: flex-start;
}
.jc-flex-end {
  justify-content: flex-end;
}
.jc-center {
  justify-content: center;
}
.jc-space-between {
  justify-content: space-between;
}
.jc-space-around {
  justify-content: space-around;
}
.jc-space-evenly {
  justify-content: space-evenly;
}

.jc-start {
  justify-content: start;
}
.jc-end {
  justify-content: end;
}
.jc-left {
  justify-content: left;
}
.jc-right {
  justify-content: right;
}

.align-stretch {
  align-items: stretch;
}
.align-flex-start {
  align-items: flex-start;
}
.align-flex-end {
  align-items: flex-end;
}
.align-center {
  align-items: center;
}
.align-baseline {
  align-items: baseline;
}
.align-first-baseline {
  align-items: first baseline;
}
.align-last-baseline {
  align-items: last baseline;
}
.align-start {
  align-items: start;
}
.align-end {
  align-items: end;
}
.align-self-start {
  align-items: self-start;
}
.align-self-end {
  align-items: self-end;
}
</style>
