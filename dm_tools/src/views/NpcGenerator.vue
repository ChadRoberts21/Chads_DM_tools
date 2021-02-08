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
          <layout row justify="space-around" align="flex-start">
            <flex>
              <card class="npc">
                <layout column>
                  <flex>
                    <Table :headers="headers" :items="npcs" />
                  </flex>
                  <flex v-if="npcs?.length > 0" fill class="table-buttons">
                    <layout row justify="flex-end">
                      <flex>
                        <dragon-button @click="exportJSONData">
                          <icon :icon="fileJSONIcon" />
                          Export as JSON
                        </dragon-button>
                      </flex>
                      <flex>
                        <dragon-button @click="exportCSVData">
                          <icon :icon="fileCSVIcon" />
                          Export as CSV
                        </dragon-button>
                      </flex>
                    </layout>
                  </flex>
                </layout>
              </card>
            </flex>
            <flex>
              <card title="Options">
                <options
                  :defaultOptions="defaultOptions"
                  @generate="handleGenerate"
                />
              </card>
            </flex>
          </layout>
        </container>
      </flex>
    </layout>
  </container>
</template>

<script>
import Card from "@/components/Shared/Card";
import Options from "@/components/NpcGenerator/Options";
import Table from "@/components/Shared/Table";
import DragonButton from "@/components/Shared/DragonButton.vue";
import Icon from "@/components/Shared/Icon.vue";

import { Alignments, Races } from "@/assets/data/dnd";
import {
  AllNames as ModurnNames,
  JobTitles as ModurnJobs
} from "@/assets/data/npc/modurn";
import {
  AllNames as ClassicNames,
  JobTitles as ClassicJobs
} from "@/assets/data/npc/classic";
import { mdiFileTable, mdiFileCode } from "@mdi/js";
import RaceGenerator from "@/models/NPC/raceGenerator";
import NpcGenerator from "@/models/NPC/npcGenerator";
export default {
  name: "NpcGenerator",
  components: {
    Card,
    Options,
    Table,
    DragonButton,
    Icon
  },
  data() {
    return {
      defaultOptions: {
        count: 10,
        gender: "any",
        style: "classic"
      },
      npcGenerator: null,
      raceGenerator: null,
      generatorOptions: null,
      fileCSVIcon: mdiFileTable,
      fileJSONIcon: mdiFileCode,
      npcs: null
    };
  },
  mounted() {
    this.handleGenerate(this.defaultOptions);
  },
  computed: {
    headers() {
      if (this.npcs) return Object.keys(this.npcs[0]);
      else return [];
    }
  },
  methods: {
    createNpc(options) {
      let names;
      let jobs;
      switch (options?.style) {
        case "modurn":
          names = ModurnNames;
          jobs = ModurnJobs;
          break;
        case "classic":
        default:
          names = ClassicNames;
          jobs = ClassicJobs;
          break;
      }

      if (!this.raceGenerator)
        this.raceGenerator = new RaceGenerator(Races, Alignments);
      if (!this.npcGenerator)
        this.npcGenerator = new NpcGenerator(
          names,
          jobs,
          options?.gender ? options.gender : "any",
          this.raceGenerator
        );
      return this.npcGenerator.new();
    },
    resetGenerators() {
      this.raceGenerator = null;
      this.npcGenerator = null;
    },
    handleGenerate(options) {
      this.npcs = [];
      this.resetGenerators();
      for (let index = 0; index < options.count; index++) {
        this.npcs.push(this.createNpc(options));
      }
    },
    exportCSVData() {
      let csv = this.headers.join(",") + "\n";
      this.npcs.forEach(row => {
        csv += Object.values(row).join(",");
        csv += "\n";
      });

      const anchor = document.createElement("a");
      anchor.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
      anchor.target = "_blank";
      anchor.download = "RandomNpcs.csv";
      anchor.click();
    },
    exportJSONData() {
      const json = JSON.stringify(this.npcs, null, 2);

      const anchor = document.createElement("a");
      anchor.href = "data:text/json;charset=utf-8," + encodeURIComponent(json);
      anchor.target = "_blank";
      anchor.download = "RandomNpcs.json";
      anchor.click();
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

.table-buttons {
  margin-top: 0.5rem;
}
</style>
