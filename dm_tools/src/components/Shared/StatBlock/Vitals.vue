<template>
  <container>
    <layout column>
      <flex grow fill>
        <span class="title">
          Armour Class <span class="value">{{ ac }}</span>
        </span>
      </flex>
      <flex grow fill>
        <span class="title">
          Hit Points
          <span class="value"> {{ hp }}</span>
          <span v-if="hpDice" class="value"> ({{ hpDice }})</span>
        </span>
      </flex>
      <flex grow fill>
        <span class="title">
          Speed
          <span class="value"> {{ speeds }}</span>
        </span>
      </flex>
    </layout>
  </container>
</template>

<script>
export default {
  name: "StatBlockName",
  props: ["ac", "hp", "hpDice", "speed"],
  computed: {
    speeds() {
      const suffix = "ft.";
      let speedsArray = [];
      for (const key in this.speed) {
        if (
          Object.hasOwnProperty.call(this.speed, key) &&
          this.speed[key] > 0
        ) {
          const element = this.speed[key];
          if (key === "default") {
            speedsArray.push(`${element} ${suffix}`);
          } else {
            speedsArray.push(`${key} ${element} ${suffix}`);
          }
        }
      }
      return speedsArray.join(", ");
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-weight: bold;
  color: $primary-dark;
}

.value {
  font-weight: 300;
  color: black;
}
</style>
