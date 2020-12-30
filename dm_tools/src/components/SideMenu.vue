<template>
  <div class="menu" :class="{ dark, open: expanded, closed: !expanded }">
    <div class="header">
      <div class="icon">
        <Icon :icon="expanded ? backMenuIcon : menuIcon" />
      </div>
      <div class="title">
        <h3 v-if="expanded">{{ title }}</h3>
      </div>
    </div>
    <div v-if="expanded">
      <p>side menu</p>
    </div>
    <div v-else>
      <p>thin menu</p>
    </div>
  </div>
</template>

<script>
import { mdiMenu, mdiBackburger } from "@mdi/js";
import Icon from "./Icon";
export default {
  components: {
    Icon
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    expandable: {
      type: Boolean,
      default: true
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      expanded: true,
      menuIcon: mdiMenu,
      backMenuIcon: mdiBackburger
    };
  }
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  float: left;
  flex: auto;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 3;
  background-color: $primary;
}

.dark {
  color: white;
}
.menu.open {
  width: 30vw;
}

.menu.closed {
  width: 30px;
}

.menu.open > .header {
}

.menu.open .icon {
  float: right;
}
</style>
