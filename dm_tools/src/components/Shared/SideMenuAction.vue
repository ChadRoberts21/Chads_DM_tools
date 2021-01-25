<template>
  <layout class="action" row justify="space-between">
    <flex xs1 class="icon">
      <icon :icon="icon" />
    </flex>
    <flex class="title">
      {{ title }}
    </flex>
  </layout>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "SideMenuAction",
  components: {
    Icon
  },
  props: ["icon", "title", "dark"]
};
</script>

<style lang="scss" scoped>
.action .icon {
  margin-left: 0.5rem;
}

.menu.closed .action .title {
  display: none;
}

.menu.closed .action .icon {
  margin: 0.1rem;
}
</style>
