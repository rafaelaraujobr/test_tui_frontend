<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-dark" bordered>
      <q-toolbar class="q-header__toolbar">
        <q-toolbar-title>
          <q-img src="../assets/logo.svg" width="56px" />
        </q-toolbar-title>
        <select-language />
      </q-toolbar>
      <q-toolbar class="q-header__toolbar row justify-center q-pa-lg">
        <q-input
          v-model="search"
          type="text"
          style="width: 512px"
          :label="$t('SEARCH_FOR_A_DESTINATION_OR_HOTEL')"
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
import SelectLanguage from "@/components/widgets/SelectLanguage.vue";
export default defineComponent({
  name: "LayoutDefault",
  data() {
    return {
      search: "" as string,
    };
  },
  components: { SelectLanguage },
});
</script>
