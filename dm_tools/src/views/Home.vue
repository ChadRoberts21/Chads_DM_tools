<template>
  <div class="home">
    <h1>Home Page</h1>
    <SideMenu title="test" dark></SideMenu>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
export default {
  name: "Home",
  components: {
    SideMenu
  }
};
</script>
