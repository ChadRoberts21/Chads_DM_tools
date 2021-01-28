<template>
  <container>
    <layout column>
      <flex>
        <h1>Home Page</h1>
      </flex>
      <flex>
        <Card>
          I'm a card
        </Card>
      </flex>
    </layout>
  </container>
</template>

<script>
import Card from "@/components/Shared/Card";
export default {
  name: "Home",
  components: {
    Card
  }
};
</script>
