<template>
  <div class="menu" :class="{ dark }">
    <div v-if="expanded">
      <p>{{ title }}</p>
      <Icon :icon="homeIcon" />
      <p>side menu</p>
    </div>
    <div v-else>
      <p>thin menu</p>
    </div>
  </div>
</template>

<script>
import { mdiHome } from "@mdi/js";
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
      homeIcon: mdiHome
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
</style>
