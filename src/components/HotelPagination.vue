<template>
  <q-toolbar class="bg-transparent">
    <span class="q-mr-md text-body2" v-if="!isMobile">
      {{ paginationHotel.total }} {{ $t("RESULTS") }}
    </span>
    <span class="q-mr-md text-body2" v-else>
      {{ paginationHotel.total }}
    </span>
    <q-space />
    <q-select
      v-model="currentRowsPerPage"
      :options="[6, 10, 20, 50, 80, 100]"
      style="min-width: 40px"
      borderless
      dense
      bg-color="bg-transparent"
    />
    <q-separator spaced inset vertical />
    <q-pagination
      unelevated
      dense
      v-model="currentPage"
      color="primary"
      :max-pages="isMobile ? 1 : 6"
      :max="paginationHotel.pages"
      direction-links
      :boundary-numbers="isMobile ? false : true"
      padding="6px 14px"
      active-color="primary"
      active-text-color="white"
    />
  </q-toolbar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { hotelMixin } from "@/mixins/hotelMixin";
export default defineComponent({
  name: "HotelPagination",
  mixins: [hotelMixin],
  props: {
    selected: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    currentPage: {
      get() {
        return this.paginationHotel.page;
      },
      set(value: number) {
        this.ActionSetPaginationHotel({
          ...this.paginationHotel,
          page: value,
        });
        this.getHotels();
      },
    },
    currentRowsPerPage: {
      get() {
        return this.paginationHotel.rowsPerPage;
      },
      set(value: number) {
        this.ActionSetPaginationHotel({
          ...this.paginationHotel,
          rowsPerPage: value,
          page: 1,
        });
        this.getHotels();
      },
    },
  },
});
</script>

<style></style>
