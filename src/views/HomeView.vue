<template>
  <q-toolbar class="row justify-center q-pa-lg bg-white">
    <q-input
      v-model="search"
      type="search"
      style="width: 512px"
      :label="$t('SEARCH_FOR_A_DESTINATION_OR_HOTEL')"
      outlined
      clearable
      debounce="1000"
      clear-icon="close"
      @update:model-value="getHotels()"
      @keyup.enter="getHotels()"
      @clear="getHotels()"
    >
      <template v-slot:prepend>
        <q-icon name="sym_o_search" />
      </template>
    </q-input>
  </q-toolbar>
  <q-separator v-if="isMobile" />
  <div class="row justify-center bg-white q-pa-md" v-if="isMobile">
    <q-btn
      @click="ActionSetDialogFilterHotel(true)"
      color="white"
      text-color="primary"
      icon="sym_o_filter_list"
      :label="$t('FILTER')"
      no-caps
      class="q-px-xl"
      style="z-index: 1"
    />
  </div>
  <q-separator />
  <q-page padding>
    <div class="row q-col-gutter-xl">
      <div class="col-3" v-if="!isMobile">
        <q-card flat>
          <q-card-section>
            <hotel-filter />
          </q-card-section>
        </q-card>
      </div>
      <div :class="isMobile ? 'col-12' : 'col-9'">
        <hotel-list />
      </div>
    </div>
    <hotel-dialog-filter />
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { hotelMixin } from "@/mixins/hotelMixin";
import HotelFilter from "../components/HotelFilter.vue";
import HotelList from "@/components/HotelList.vue";
import HotelDialogFilter from "@/components/HotelDialogFilter.vue";
export default defineComponent({
  name: "HomeView",
  mixins: [hotelMixin],
  components: { HotelFilter, HotelDialogFilter, HotelList },
  methods: {
    teste() {
      console.log("teste");
    },
  },
  computed: {
    search: {
      get() {
        return this.searchHotel;
      },
      set(value: string) {
        this.ActionSetSearchHotel(value);
      },
    },
  },
});
</script>
