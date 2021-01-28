<template>
  <container class="stat-block">
    <layout column justify="start">
      <flex fill>
        <Name
          :name="monster.name"
          :size="monster.size"
          :type="monster.type"
          :alignment="monster.alignment"
        />
      </flex>
      <div class="divider" />
      <flex fill>
        <Vitals
          :ac="monster.armour"
          :hp="monster.hitPoints"
          :hpDice="monster.hitDice"
          :speed="monster.speed"
        />
      </flex>
      <div class="divider" />
      <flex fill>
        <Stats
          :strength="monster.strength"
          :dexterity="monster.dexterity"
          :constitution="monster.constitution"
          :intelligence="monster.intelligence"
          :wisdom="monster.wisdom"
          :charisma="monster.charisma"
        />
      </flex>
      <div class="divider" />
      <flex fill>
        <Action />
      </flex>
    </layout>
  </container>
</template>

<script>
import Name from "@/components/Shared/StatBlock/Name";
import Stats from "@/components/Shared/StatBlock/Stats";
import Action from "@/components/Shared/StatBlock/Action";
import Vitals from "./StatBlock/Vitals.vue";
import MonsterModel from "@/models/monster.js";
export default {
  name: "StatBlock",
  props: {
    monster: {
      type: MonsterModel,
      required: true,
      default: new MonsterModel()
    }
  },
  components: {
    Name,
    Stats,
    Action,
    Vitals
  }
};
</script>

<style lang="scss" scoped>
.stat-block {
  text-align: left;
}

.stat-block .divider {
  background-color: $primary-dark;
  height: 2px;
  width: calc(100% - 2rem);
}
</style>
