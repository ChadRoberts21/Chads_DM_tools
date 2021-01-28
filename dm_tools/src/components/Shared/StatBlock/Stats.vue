<template>
  <container>
    <layout>
      <flex class="stat">
        <layout column>
          <flex>
            <span class="title">
              STR
            </span>
          </flex>
          <flex>
            <span class="value">
              {{ strength }} ({{ calculateModifyer(strength) }})
            </span>
          </flex>
        </layout>
      </flex>
      <flex class="stat">
        <layout column>
          <flex>
            <span class="title">
              DEX
            </span>
          </flex>
          <flex>
            <span class="value">
              {{ dexterity }} ({{ calculateModifyer(dexterity) }})
            </span>
          </flex>
        </layout>
      </flex>
      <flex class="stat">
        <layout column>
          <flex>
            <span class="title">
              CON
            </span>
          </flex>
          <flex>
            <span class="value">
              {{ constitution }} ({{ calculateModifyer(constitution) }})
            </span>
          </flex>
        </layout>
      </flex>
      <flex class="stat">
        <layout column>
          <flex>
            <span class="title">
              INT
            </span>
          </flex>
          <flex>
            <span class="value">
              {{ intelligence }} ({{ calculateModifyer(intelligence) }})
            </span>
          </flex>
        </layout>
      </flex>
      <flex class="stat">
        <layout column>
          <flex>
            <span class="title">
              WIS
            </span>
          </flex>
          <flex>
            <span class="value">
              {{ wisdom }} ({{ calculateModifyer(wisdom) }})
            </span>
          </flex>
        </layout>
      </flex>
      <flex class="stat">
        <layout column>
          <flex>
            <span class="title">
              CHA
            </span>
          </flex>
          <flex>
            <span class="value">
              {{ charisma }} ({{ calculateModifyer(charisma) }})
            </span>
          </flex>
        </layout>
      </flex>
    </layout>
  </container>
</template>

<script>
export default {
  name: "StatBlockStats",
  props: [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma"
  ],
  methods: {
    calculateModifyer(value) {
      let mod = Math.floor((value - 10) / 2);
      return mod >= 0 ? `+${mod}` : mod.toString();
    }
  }
};
</script>

<style lang="scss" scoped>
.stat {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.title {
  font-weight: bold;
  color: $primary-dark;
}

.value {
  font-weight: 300;
}
</style>
