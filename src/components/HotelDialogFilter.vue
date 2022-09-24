<template>
  <q-dialog
    v-model="dialogFilterHotel"
    persistent
    :maximized="isMobile"
    position="left"
  >
    <q-card :style="`min-width:${$q.screen.width}px`">
      <q-toolbar class="q-py-md">
        <q-btn
          flat
          round
          dense
          icon="sym_o_arrow_back_ios"
          @click="ActionSetDialogFilterHotel(false)"
        />
        <q-toolbar-title class="text-h6">
          {{ $t("FILTER_BY") }}
        </q-toolbar-title>
      </q-toolbar>
      <q-separator spaced />
      <q-card-section
        :style="
          isMobile
            ? `height:${$q.screen.height - (96 + 17 + 17 + 66)}px`
            : 'max-height: 60vh'
        "
        class="scroll"
      >
        <hotel-filter />
      </q-card-section>
      <q-separator spaced />
      <q-card-section class="row q-col-gutter-sm">
        <div class="col-6">
          <q-btn
            unelevated
            :label="$t('CLEAR')"
            outline
            class="full-width q-py-md"
            color="white"
            text-color="primary"
            no-caps
            @click="ActionSetDialogFilterHotel(false)"
          />
        </div>
        <div class="col-6">
          <q-btn
            unelevated
            no-caps
            :label="$t('APPLY')"
            color="primary"
            type="submit"
            class="full-width q-py-md"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { hotelMixin } from "@/mixins/hotelMixin";
import HotelFilter from "./HotelFilter.vue";

export default defineComponent({
  name: "HotelDialogFilter",
  mixins: [hotelMixin],
  components: { HotelFilter },
});
</script>

<style></style>
