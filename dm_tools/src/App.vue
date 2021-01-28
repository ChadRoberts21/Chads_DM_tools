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
@import url("https://fonts.googleapis.com/css2?family=Marcellus&display=swap");

body {
  margin: 0;
  height: 100vh;
}

#app {
  font-family: Marcellus, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("./assets/parchment.jpg");
  min-height: 100%;
}

.app {
  padding: 0 30px;
  margin-left: 40px;
}
</style>
