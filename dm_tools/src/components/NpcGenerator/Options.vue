<template>
  <container>
    <layout column>
      <flex>
        <layout>
          <flex>
            Count:
          </flex>
          <flex>
            <input type="number" />
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
                <input type="radio" id="female" name="gender" value="female" />
                <label for="female">Female</label>
              </flex>
              <flex>
                <input type="radio" id="male" name="gender" value="male" />
                <label for="male">Male</label>
              </flex>
              <flex>
                <input type="radio" id="any" name="gender" value="any" />
                <label for="any">Any</label>
              </flex>
            </layout>
          </flex>
        </layout>
      </flex>
      <flex>
        <dragon-button>
          test
        </dragon-button>
      </flex>
    </layout>
  </container>
</template>

<script>
import DragonButton from "@/components/Shared/DragonButton";
export default {
  name: "Options",
  components: {
    DragonButton
  },
  props: {
    count: Number
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
  margin: 5px;
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
