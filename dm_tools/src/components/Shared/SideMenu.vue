<template>
  <container
    class="menu"
    :class="{ dark, open: expanded, closed: !expanded }"
    :style="{ backgroundImage: `url(${background})` }"
  >
    <layout column>
      <flex class="header">
        <layout row reverse justify="space-between">
          <flex class="icon">
            <icon
              class="float-right"
              :icon="expanded ? backMenuIcon : menuIcon"
              @click="onMenuIconClick"
            />
          </flex>
          <flex class="title">
            <h3 v-if="expanded">{{ title }}</h3>
          </flex>
        </layout>
      </flex>
      <flex class="content">
        <card
          @click="goToHome"
          :class="{ active: currentRouteName === 'Home' }"
        >
          <side-menu-action :icon="homeIcon" title="Home" />
        </card>
        <card
          @click="goToDice"
          :class="{ active: currentRouteName === 'Dice' }"
        >
          <side-menu-action :icon="d20Icon" title="Dice" />
        </card>
        <card
          @click="goToNpcGenerator"
          :class="{ active: currentRouteName === 'NpcGenerator' }"
        >
          <side-menu-action :icon="npcIcon" title="Npc Generator" />
        </card>
        <card
          @click="goToAbout"
          :class="{ active: currentRouteName === 'About' }"
        >
          <side-menu-action :icon="aboutIcon" title="About" />
        </card>
      </flex>
    </layout>
  </container>
</template>

<script>
import {
  mdiMenu,
  mdiBackburger,
  mdiDiceD20,
  mdiHome,
  mdiInformation,
  mdiFaceWoman
} from "@mdi/js";
import Icon from "./Icon";
import SideMenuAction from "./SideMenuAction.vue";
import ScalesSvg from "@/assets/shadow-scale-pattern-64.svg";
import Card from "./Card.vue";
export default {
  components: {
    Icon,
    SideMenuAction,
    Card
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    expandable: {
      type: Boolean,
      default: true
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      expanded: false,
      background: ScalesSvg,
      menuIcon: mdiMenu,
      backMenuIcon: mdiBackburger,
      homeIcon: mdiHome,
      aboutIcon: mdiInformation,
      npcIcon: mdiFaceWoman,
      d20Icon: mdiDiceD20
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  methods: {
    onMenuIconClick() {
      this.expanded = !this.expanded;
    },
    goToHome() {
      this.$router.push({ name: "Home" });
    },
    goToDice() {
      this.$router.push({ name: "Dice" });
    },
    goToNpcGenerator() {
      this.$router.push({ name: "NpcGenerator" });
    },
    goToAbout() {
      this.$router.push({ name: "About" });
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  float: left;
  flex: auto;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 3;
  background-color: $primary;
  align-items: flex-start;
}

.dark {
  color: white;
}
.menu.open {
  width: 25vw;
}

.menu.closed {
  width: 35px;
}

.menu.open .icon {
  float: right;
}

.menu .card {
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.menu .card:hover {
  background: transparent;
  color: white;
  fill: white;
}

.menu .card:active {
  background: $primary;
  color: white;
  fill: white;
}

.menu .card.active {
  background: $primary;
  color: white;
  fill: white;
  box-shadow: 0 4px 12px 1px #000000aa;
}

.menu.closed .card {
  width: min-content;
}

.header {
  width: 100%;
}

.header.flex {
  max-height: 12vh;
  border-bottom: #00000030 1px solid;
}

.header .icon {
  float: right;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.25s;
  border-radius: 10px;
  background: white;
  color: #000;
  padding: 3px 2px 5px 2px !important;
  flex: 0 0 auto;
}

.header .icon:hover {
  background: transparent;
  color: white;
  fill: white;
}

.header .icon:active {
  background: $primary;
  color: white;
  fill: white;
}

.header h3 {
  float: left;
  margin: 0;
}

.content.flex {
  width: 100%;
  margin-top: 1rem;
}
</style>
