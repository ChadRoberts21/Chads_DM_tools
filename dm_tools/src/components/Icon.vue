<template>
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :fill="colour"
    :style="{ width: size }"
  >
    <path :d="icon"></path>
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    colour: {
      type: String
    },
    size: {
      type: String,
      default: "2rem"
    }
  }
};
</script>
