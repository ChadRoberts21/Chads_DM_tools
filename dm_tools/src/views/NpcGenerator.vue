<template>
  <container>
    <layout column>
      <!-- header -->
      <flex>
        <layout>
          <flex>
            <h2>Npc Generator</h2>
          </flex>
        </layout>
      </flex>
      <!-- main content -->
      <flex class="content">
        <container>
          <layout row justify="space-around">
            <flex>
              <card class="npc">
                <Table :headers="headers" :items="npcs" />
              </card>
            </flex>
            <flex>
              <card title="Options">
                <options />
              </card>
            </flex>
          </layout>
        </container>
      </flex>
      <!-- test -->
      <flex>
        <stat-block />
      </flex>
    </layout>
  </container>
</template>

<script>
import Card from "@/components/Shared/Card";
import Options from "@/components/NpcGenerator/Options";
import StatBlock from "@/components/Shared/StatBlock.vue";
import Table from "@/components/Shared/Table";

import { Alignments, Races } from "@/assets/data/dnd";
import { FirstNames, LastNames, JobTitles } from "@/assets/data/npc/modurn";
import RaceGenerator from "@/models/NPC/raceGenerator";
import NpcGenerator from "@/models/NPC/npcGenerator";
export default {
  name: "NpcGenerator",
  components: {
    Card,
    Options,
    StatBlock,
    Table
  },
  data() {
    return {
      npcGenerator: null,
      raceGenerator: null,
      generatorOptions: null,
      npcs: null
    };
  },
  mounted() {
    this.npcs = [];
    for (let index = 0; index < 5; index++) {
      this.npcs.push(this.createNpc());
    }
  },
  computed: {
    headers() {
      if (this.npcs) return Object.keys(this.npcs[0]);
      else return [];
    }
  },
  methods: {
    createNpc() {
      if (!this.raceGenerator)
        this.raceGenerator = new RaceGenerator(Races, Alignments);
      if (!this.npcGenerator)
        this.npcGenerator = new NpcGenerator(
          FirstNames,
          LastNames,
          JobTitles,
          "any",
          this.raceGenerator
        );
      return this.npcGenerator.new();
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
}

.card.npc {
  padding: 2rem;
}
</style>
