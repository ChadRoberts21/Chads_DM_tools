<template>
  <div class="home">
    <h1>Home Page</h1>
    <Container>
      <Layout>
        <p class="flex size-xs3">test</p>
        <p>test2</p>
      </Layout>
    </Container>
    <SideMenu title="test" dark></SideMenu>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import Container from "@/components/Flex/Container";
import Layout from "@/components/Flex/Layout";
export default {
  name: "Home",
  components: {
    SideMenu,
    Container,
    Layout
  }
};
</script>
