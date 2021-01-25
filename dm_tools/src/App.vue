<template>
  <div id="root" class="app">
    <router-view />
    <SideMenu title="test" dark></SideMenu>
  </div>
</template>

<script>
import SideMenu from "@/components/Shared/SideMenu";
export default {
  name: "Home",
  components: {
    SideMenu
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("./assets/parchment.jpg");
  height: 100%;
}

.app {
  padding: 30px;
  margin-left: 40px;
}
</style>
