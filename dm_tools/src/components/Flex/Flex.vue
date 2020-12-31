<template>
  <div class="flex" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
// TODO: find a better implimentation
export default {
  props: {
    grow: {
      type: Boolean,
      default: false
    },
    shrink: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 1
    },
    offset: {
      type: Number,
      default: 0
    },
    xs1: Boolean,
    xs2: Boolean,
    xs3: Boolean,
    xs4: Boolean,
    xs5: Boolean,
    xs6: Boolean,
    xs7: Boolean,
    xs8: Boolean,
    xs9: Boolean,
    xs10: Boolean,
    xs11: Boolean,
    xs12: Boolean,
    sm1: Boolean,
    sm2: Boolean,
    sm3: Boolean,
    sm4: Boolean,
    sm5: Boolean,
    sm6: Boolean,
    sm7: Boolean,
    sm8: Boolean,
    sm9: Boolean,
    sm10: Boolean,
    sm11: Boolean,
    sm12: Boolean,
    md1: Boolean,
    md2: Boolean,
    md3: Boolean,
    md4: Boolean,
    md5: Boolean,
    md6: Boolean,
    md7: Boolean,
    md8: Boolean,
    md9: Boolean,
    md10: Boolean,
    md11: Boolean,
    md12: Boolean,
    lg1: Boolean,
    lg2: Boolean,
    lg3: Boolean,
    lg4: Boolean,
    lg5: Boolean,
    lg6: Boolean,
    lg7: Boolean,
    lg8: Boolean,
    lg9: Boolean,
    lg10: Boolean,
    lg11: Boolean,
    lg12: Boolean,
    xl1: Boolean,
    xl2: Boolean,
    xl3: Boolean,
    xl4: Boolean,
    xl5: Boolean,
    xl6: Boolean,
    xl7: Boolean,
    xl8: Boolean,
    xl9: Boolean,
    xl10: Boolean,
    xl11: Boolean,
    xl12: Boolean,
    offsetXs1: Boolean,
    offsetXs2: Boolean,
    offsetXs3: Boolean,
    offsetXs4: Boolean,
    offsetXs5: Boolean,
    offsetXs6: Boolean,
    offsetXs7: Boolean,
    offsetXs8: Boolean,
    offsetXs9: Boolean,
    offsetXs10: Boolean,
    offsetXs11: Boolean,
    offsetXs12: Boolean,
    offsetSm1: Boolean,
    offsetSm2: Boolean,
    offsetSm3: Boolean,
    offsetSm4: Boolean,
    offsetSm5: Boolean,
    offsetSm6: Boolean,
    offsetSm7: Boolean,
    offsetSm8: Boolean,
    offsetSm9: Boolean,
    offsetSm10: Boolean,
    offsetSm11: Boolean,
    offsetSm12: Boolean,
    offsetMd1: Boolean,
    offsetMd2: Boolean,
    offsetMd3: Boolean,
    offsetMd4: Boolean,
    offsetMd5: Boolean,
    offsetMd6: Boolean,
    offsetMd7: Boolean,
    offsetMd8: Boolean,
    offsetMd9: Boolean,
    offsetMd10: Boolean,
    offsetMd11: Boolean,
    offsetMd12: Boolean,
    offsetLg1: Boolean,
    offsetLg2: Boolean,
    offsetLg3: Boolean,
    offsetLg4: Boolean,
    offsetLg5: Boolean,
    offsetLg6: Boolean,
    offsetLg7: Boolean,
    offsetLg8: Boolean,
    offsetLg9: Boolean,
    offsetLg10: Boolean,
    offsetLg11: Boolean,
    offsetLg12: Boolean,
    offsetXl1: Boolean,
    offsetXl2: Boolean,
    offsetXl3: Boolean,
    offsetXl4: Boolean,
    offsetXl5: Boolean,
    offsetXl6: Boolean,
    offsetXl7: Boolean,
    offsetXl8: Boolean,
    offsetXl9: Boolean,
    offsetXl10: Boolean,
    offsetXl11: Boolean,
    offsetXl12: Boolean
  },
  computed: {
    sizeClass() {
      let classes = "";
      if (this.xs1) classes += "xs1 ";
      if (this.xs2) classes += "xs2 ";
      if (this.xs3) classes += "xs3 ";
      if (this.xs4) classes += "xs4 ";
      if (this.xs5) classes += "xs5 ";
      if (this.xs6) classes += "xs6 ";
      if (this.xs7) classes += "xs7 ";
      if (this.xs8) classes += "xs8 ";
      if (this.xs9) classes += "xs9 ";
      if (this.xs10) classes += "xs10 ";
      if (this.xs11) classes += "xs11 ";
      if (this.xs12) classes += "xs12 ";
      if (this.sm1) classes += "sm1 ";
      if (this.sm2) classes += "sm2 ";
      if (this.sm3) classes += "sm3 ";
      if (this.sm4) classes += "sm4 ";
      if (this.sm5) classes += "sm5 ";
      if (this.sm6) classes += "sm6 ";
      if (this.sm7) classes += "sm7 ";
      if (this.sm8) classes += "sm8 ";
      if (this.sm9) classes += "sm9 ";
      if (this.sm10) classes += "sm10 ";
      if (this.sm11) classes += "sm11 ";
      if (this.sm12) classes += "sm12 ";
      if (this.md1) classes += "md1 ";
      if (this.md2) classes += "md2 ";
      if (this.md3) classes += "md3 ";
      if (this.md4) classes += "md4 ";
      if (this.md5) classes += "md5 ";
      if (this.md6) classes += "md6 ";
      if (this.md7) classes += "md7 ";
      if (this.md8) classes += "md8 ";
      if (this.md9) classes += "md9 ";
      if (this.md10) classes += "md10 ";
      if (this.md11) classes += "md11 ";
      if (this.md12) classes += "md12 ";
      if (this.lg1) classes += "lg1 ";
      if (this.lg2) classes += "lg2 ";
      if (this.lg3) classes += "lg3 ";
      if (this.lg4) classes += "lg4 ";
      if (this.lg5) classes += "lg5 ";
      if (this.lg6) classes += "lg6 ";
      if (this.lg7) classes += "lg7 ";
      if (this.lg8) classes += "lg8 ";
      if (this.lg9) classes += "lg9 ";
      if (this.lg10) classes += "lg10 ";
      if (this.lg11) classes += "lg11 ";
      if (this.lg12) classes += "lg12 ";
      if (this.xl1) classes += "xl1 ";
      if (this.xl2) classes += "xl2 ";
      if (this.xl3) classes += "xl3 ";
      if (this.xl4) classes += "xl4 ";
      if (this.xl5) classes += "xl5 ";
      if (this.xl6) classes += "xl6 ";
      if (this.xl7) classes += "xl7 ";
      if (this.xl8) classes += "xl8 ";
      if (this.xl9) classes += "xl9 ";
      if (this.xl10) classes += "xl10 ";
      if (this.xl11) classes += "xl11 ";
      if (this.xl12) classes += "xl12 ";
      return classes.trim();
    },
    offsetClass() {
      let classes = "";
      if (this.offsetXs1) classes += "offset-xs1 ";
      if (this.offsetXs2) classes += "offset-xs2 ";
      if (this.offsetXs3) classes += "offset-xs3 ";
      if (this.offsetXs4) classes += "offset-xs4 ";
      if (this.offsetXs5) classes += "offset-xs5 ";
      if (this.offsetXs6) classes += "offset-xs6 ";
      if (this.offsetXs7) classes += "offset-xs7 ";
      if (this.offsetXs8) classes += "offset-xs8 ";
      if (this.offsetXs9) classes += "offset-xs9 ";
      if (this.offsetXs10) classes += "offset-xs10 ";
      if (this.offsetXs11) classes += "offset-xs11 ";
      if (this.offsetXs12) classes += "offset-xs12 ";
      if (this.offsetSm1) classes += "offset-sm1 ";
      if (this.offsetSm2) classes += "offset-sm2 ";
      if (this.offsetSm3) classes += "offset-sm3 ";
      if (this.offsetSm4) classes += "offset-sm4 ";
      if (this.offsetSm5) classes += "offset-sm5 ";
      if (this.offsetSm6) classes += "offset-sm6 ";
      if (this.offsetSm7) classes += "offset-sm7 ";
      if (this.offsetSm8) classes += "offset-sm8 ";
      if (this.offsetSm9) classes += "offset-sm9 ";
      if (this.offsetSm10) classes += "offset-sm10 ";
      if (this.offsetSm11) classes += "offset-sm11 ";
      if (this.offsetSm12) classes += "offset-sm12 ";
      if (this.offsetMd1) classes += "offset-md1 ";
      if (this.offsetMd2) classes += "offset-md2 ";
      if (this.offsetMd3) classes += "offset-md3 ";
      if (this.offsetMd4) classes += "offset-md4 ";
      if (this.offsetMd5) classes += "offset-md5 ";
      if (this.offsetMd6) classes += "offset-md6 ";
      if (this.offsetMd7) classes += "offset-md7 ";
      if (this.offsetMd8) classes += "offset-md8 ";
      if (this.offsetMd9) classes += "offset-md9 ";
      if (this.offsetMd10) classes += "offset-md10 ";
      if (this.offsetMd11) classes += "offset-md11 ";
      if (this.offsetMd12) classes += "offset-md12 ";
      if (this.offsetLg1) classes += "offset-lg1 ";
      if (this.offsetLg2) classes += "offset-lg2 ";
      if (this.offsetLg3) classes += "offset-lg3 ";
      if (this.offsetLg4) classes += "offset-lg4 ";
      if (this.offsetLg5) classes += "offset-lg5 ";
      if (this.offsetLg6) classes += "offset-lg6 ";
      if (this.offsetLg7) classes += "offset-lg7 ";
      if (this.offsetLg8) classes += "offset-lg8 ";
      if (this.offsetLg9) classes += "offset-lg9 ";
      if (this.offsetLg10) classes += "offset-lg10 ";
      if (this.offsetLg11) classes += "offset-lg11 ";
      if (this.offsetLg12) classes += "offset-lg12 ";
      if (this.offsetXl1) classes += "offset-xl1 ";
      if (this.offsetXl2) classes += "offset-xl2 ";
      if (this.offsetXl3) classes += "offset-xl3 ";
      if (this.offsetXl4) classes += "offset-xl4 ";
      if (this.offsetXl5) classes += "offset-xl5 ";
      if (this.offsetXl6) classes += "offset-xl6 ";
      if (this.offsetXl7) classes += "offset-xl7 ";
      if (this.offsetXl8) classes += "offset-xl8 ";
      if (this.offsetXl9) classes += "offset-xl9 ";
      if (this.offsetXl10) classes += "offset-xl10 ";
      if (this.offsetXl11) classes += "offset-xl11 ";
      if (this.offsetXl12) classes += "offset-xl12 ";
      return classes.trim();
    },

    classes() {
      let classes = `${this.sizeClass} ${this.offsetClass}`;
      if (this.grow) classes += "grow";
      if (this.shrink) classes += "shrink";
      return classes;
    }
  }
};
</script>

<style lang="scss">
.flex,
.child-flex > * {
  flex: 1 1 auto;
  max-width: 100%;
}

.grow {
  flex-grow: 1 !important;
  flex-shrink: 0 !important;
}
.shrink {
  flex-grow: 0 !important;
  flex-shrink: 1 !important;
}
</style>
