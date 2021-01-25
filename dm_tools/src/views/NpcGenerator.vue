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
              <card>
                <npc-table />
              </card>
            </flex>
            <flex>
              <card>
                <options />
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
import NpcTable from "@/components/NpcGenerator/NpcTable";
export default {
  name: "NpcGenerator",
  components: {
    Card,
    Options,
    NpcTable
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
}
</style>
