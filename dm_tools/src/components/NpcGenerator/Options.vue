<template>
  <container>
    <layout column>
      <flex>
        <layout column>
          <flex>
            Count:
          </flex>
          <flex>
            <dragon-number-input
              :value="localCount"
              @change="handelCountChange"
            />
          </flex>
        </layout>
      </flex>
      <flex>
        <layout column>
          <flex>
            Gender:
          </flex>
          <flex>
            <layout row>
              <flex>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  @click="handleGenderChange"
                  :checked="defaultOptions.gender === 'female'"
                />
                <label for="female">Female</label>
              </flex>
              <flex>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  @click="handleGenderChange"
                  :checked="defaultOptions.gender === 'male'"
                />
                <label for="male">Male</label>
              </flex>
              <flex>
                <input
                  type="radio"
                  id="any"
                  name="gender"
                  value="any"
                  @click="handleGenderChange"
                  :checked="defaultOptions.gender === 'any'"
                />
                <label for="any">Any</label>
              </flex>
            </layout>
          </flex>
        </layout>
      </flex>
      <flex>
        <layout column>
          <flex>
            Style:
          </flex>
          <flex>
            <layout row>
              <flex>
                <input
                  type="radio"
                  id="clasic"
                  name="style"
                  value="classic"
                  @click="handleStyleChange"
                  :checked="defaultOptions.style === 'classic'"
                />
                <label for="classic">Classic</label>
              </flex>
              <flex>
                <input
                  type="radio"
                  id="modurn"
                  name="style"
                  value="modurn"
                  @click="handleStyleChange"
                  :checked="defaultOptions.style === 'modurn'"
                />
                <label for="male">Modurn</label>
              </flex>
            </layout>
          </flex>
        </layout>
      </flex>
      <flex>
        <dragon-button @click="handleGenerate">
          Generate
        </dragon-button>
      </flex>
    </layout>
  </container>
</template>

<script>
import { mdiPlus, mdiMinus } from "@mdi/js";
import DragonButton from "@/components/Shared/DragonButton";
import DragonNumberInput from "@/components/Shared/DragonNumberInput.vue";
export default {
  name: "Options",
  components: {
    DragonButton,
    DragonNumberInput
  },
  props: {
    defaultOptions: Object
  },
  data() {
    return {
      plusIcon: mdiPlus,
      minusIcon: mdiMinus,
      localCount: this.defaultOptions?.count ?? 10,
      localGender: "any",
      localStyle: "classic"
    };
  },
  methods: {
    handelCountChange(value) {
      this.localCount = value;
    },
    handleGenderChange(value) {
      if (value.target) this.localGender = value.target.value;
      else this.localGender = value;
    },
    handleStyleChange(value) {
      if (value.target) this.localStyle = value.target.value;
      else this.localStyle = value;
    },
    handleGenerate() {
      let options = {
        count: this.localCount,
        gender: this.localGender,
        style: this.localStyle
      };

      this.$emit("generate", options);
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  border-bottom-color: $primary;
  border-radius: $app-border-radius;
  border-top: none;
  border-right: none;
  border-left: none;
  text-align: center;
  border-width: 1px;
  padding: 5px;
  width: min-content;
  font: unset;
  max-width: 6rem;
}

input:focus {
  outline: none;
  box-shadow: 0 3px 6px 0px #000000aa;
  border-width: 3px;
}

input[type="radio" i] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0 5px;
  border: 1px solid $primary;
}

input:checked {
  border: 1px solid $primary;
  background: $primary;
}
</style>
