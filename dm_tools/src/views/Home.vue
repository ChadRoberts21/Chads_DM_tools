<template>
  <div class="home">
    <h1>Home Page</h1>
    <Container>
      <Layout>
        <Flex xs4>test</Flex>
        <Flex>test2</Flex>
      </Layout>
    </Container>
    <SideMenu title="test" dark></SideMenu>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import Container from "@/components/Flex/Container";
import Layout from "@/components/Flex/Layout";
import Flex from "@/components/Flex/Flex";
export default {
  name: "Home",
  components: {
    SideMenu,
    Container,
    Layout,
    Flex
  }
};
</script>
