<template>
  <layout row class="dragon input number">
    <flex
      class="input button left"
      :style="{ backgroundImage: `url(${background})` }"
      @click="decrement"
    >
      <icon :icon="minusIcon" size="1.5rem" />
    </flex>
    <flex class="input number">
      <input type="number" :value="value" @change.stop="update" />
    </flex>
    <flex
      class="input button right"
      :style="{ backgroundImage: `url(${background})` }"
      @click="increment"
    >
      <icon :icon="plusIcon" size="1.5rem" />
    </flex>
  </layout>
</template>

<script>
import { mdiPlus, mdiMinus } from "@mdi/js";
import ScalesSvg from "@/assets/shadow-scale-pattern-32.svg";
import Icon from "@/components/Shared/Icon";
export default {
  name: "Options",
  components: {
    Icon
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    maxValue: Number,
    minValue: Number
  },
  data() {
    return {
      background: ScalesSvg,
      plusIcon: mdiPlus,
      minusIcon: mdiMinus
    };
  },
  methods: {
    increment() {
      if (!this.maxValue || this.value < this.maxValue)
        this.update(this.value + 1);
    },
    decrement() {
      if (!this.minValue || this.value > this.minValue)
        this.update(this.value - 1);
    },
    update(value) {
      if (value.target) this.$emit("change", Number(value.target.value));
      else this.$emit("change", value);
    }
  }
};
</script>

<style lang="scss" scoped>
.dragon.input.number {
  border: $primary 1px solid;
  border-radius: $app-border-radius + 1;
}

.dragon.input.number:focus-within {
  box-shadow: 0 3px 6px 0px #000000aa;
}

.button {
  border: $primary 1px solid;
  background: $primary;
  color: white;
  fill: white;
  padding: 0.25rem;
  padding: 0.5rem 1rem;
  border: unset;
  font: unset;
  font-weight: bold;
}

.button.input.left {
  border-top-left-radius: $app-border-radius;
  border-bottom-left-radius: $app-border-radius;
}

.button.input.right {
  border-top-right-radius: $app-border-radius;
  border-bottom-right-radius: $app-border-radius;
}

.flex.button.input.right,
.flex.button.input.left {
  padding: 2px 0 !important;
}

.button:focus {
  outline: unset;
  box-shadow: 0 4px 12px 1px #000000aa;
}

.button:hover {
  background: white;
  color: $primary;
  fill: $primary;
}

.button:active {
  background: white;
  color: $primary;
  fill: $primary;
  box-shadow: 0 4px 12px 1px #000000aa;
}

input {
  border: none;
  text-align: center;
  padding: 5px;
  width: min-content;
  font: unset;
  max-width: 3rem;
}

input:focus {
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.flex.input.number {
  padding: 0 !important;
}
</style>
