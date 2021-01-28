<template>
  <container>
    <layout column justify="start">
      <flex class="name" grow fill>
        <h2>{{ name }}</h2>
      </flex>
      <flex class="details" grow fill>
        {{ size }} {{ type }}, {{ alignment }}.
      </flex>
    </layout>
  </container>
</template>

<script>
export default {
  name: "StatBlockName",
  props: ["name", "size", "type", "alignment"]
};
</script>

<style lang="scss" scoped>
.name h2 {
  color: $primary-dark;
  text-align: left;
  margin: 0;
}

.details {
  font-style: italic;
}
</style>
