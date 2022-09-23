<template>
  <q-page padding>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
});
</script>
