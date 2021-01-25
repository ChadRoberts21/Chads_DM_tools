<template>
  <div class="home">
    <h1>Home Page</h1>
    <container>
      <layout>
        <flex>
          <Card>
            I'm a card
          </Card>
        </flex>
      </layout>
    </container>
  </div>
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
