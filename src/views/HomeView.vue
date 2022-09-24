<template>
  <q-toolbar class="row justify-center q-pa-lg bg-white">
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
  <q-separator />
  <q-page padding>
    <div class="row q-col-gutter-xl">
      <div class="col-3" v-if="!isMobile">
        <q-card flat>
          <q-card-section> </q-card-section>
        </q-card>
      </div>
      <div :class="isMobile ? 'col-12' : 'col-9'"></div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { globalMixin } from "@/mixins/globalMixin";
export default defineComponent({
  name: "HomeView",
  mixins: [globalMixin],
  data() {
    return {
      search: "" as string,
    };
  },
});
</script>
