<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-dark">
      <q-toolbar class="q-header__toolbar">
        <q-toolbar-title>
          <q-img src="../assets/logo.svg" width="56px" class="m-py-xs" />
        </q-toolbar-title>
        <select-language />
      </q-toolbar>
      <!-- <q-separator /> -->
    </q-header>
    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SelectLanguage from "@/components/widgets/SelectLanguage.vue";
export default defineComponent({
  name: "LayoutDefault",
  components: { SelectLanguage },
});
</script>
