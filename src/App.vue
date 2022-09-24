<template>
  <router-view />
</template>

<script lang="ts">
import { colors } from "quasar";
const { getPaletteColor } = colors;
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  mounted() {
    this.$q.addressbarColor.set(getPaletteColor("primary"));
  },
});
</script>
