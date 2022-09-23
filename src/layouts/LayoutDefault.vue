<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-dark" bordered>
      <q-toolbar class="q-header__toolbar">
        <q-toolbar-title>
          <q-img src="../assets/logo.svg" width="56px" />
        </q-toolbar-title>
        <div class="q-gutter-sm">
          <q-btn size="xs" dense flat>
            <q-avatar size="md" rounded>
              <img src="../assets/images/flags/portugal.png" />
            </q-avatar>
          </q-btn>
          <q-btn size="xs" dense flat class="light-dimmed">
            <q-avatar size="md" rounded>
              <img src="../assets/images/flags/spain.png" />
            </q-avatar>
          </q-btn>
          <q-btn size="xs" dense flat class="light-dimmed">
            <q-avatar size="md" rounded>
              <img src="../assets/images/flags/united-states.png" />
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>
      <q-toolbar class="q-header__toolbar row justify-center q-pa-lg">
        <q-input
          v-model="search"
          type="text"
          style="width: 512px"
          label="Buscar por um destino ou hotel"
          outlined
        >
          <template v-slot:prepend>
            <q-icon name="sym_o_search" />
          </template>
        </q-input>
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
  data() {
    return {
      search: "" as string,
    };
  },
});
</script>
