<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-dark" bordered>
      <q-toolbar class="q-header__toolbar">
        <q-toolbar-title> Tui </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LayoutDefault",
});
</script>
