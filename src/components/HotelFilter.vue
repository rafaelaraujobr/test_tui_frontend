<template>
  <q-card flat>
    <q-card-section class="q-pa-none">
      <div class="text-body1 text-weight-bold q-pa-md">
        {{ $t("COUNTRIES") }}
      </div>
      <q-checkbox v-model="all" size="lg" color="primary" :label="$t('ALL')" />
      <q-option-group
        color="primary"
        :options="countries"
        type="checkbox"
        v-model="filter.country"
        size="lg"
      />
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { hotelMixin } from "@/mixins/hotelMixin";

export default defineComponent({
  name: "HotelFilter",
  mixins: [hotelMixin],
  data() {
    return {
      filter: {
        country: [],
      } as {
        country: Array<string>;
      },
      all: true as boolean,

      countries: [
        { label: "Portugal", value: "a2e354c1-e730-40ba-bce7-3d5c98f4f929" },
        { label: "Spain", value: "4c87c840-c998-4f7e-b650-44729ff51898" },
        { label: "Italy", value: " c9e2e019-40ba-43cb-b365-c55d55977f56" },
      ] as Array<{
        label: string;
        value: string;
      }>,
    };
  },
  watch: {
    all() {
      if (this.all) this.filter.country = this.countries.map((l) => l.value);
      else if (
        Object.keys(this.filter.country).length === this.countries.length
      )
        this.filter.country = [];
    },
    "filter.country": {
      handler(val) {
        Object.keys(val).length === this.countries.length
          ? (this.all = true)
          : (this.all = false);

        this.ActionSetHotelFilter({
          destinationId:
            Object.values(val).length === 1 ? val[0] : Object.values(val),
        });
      },
      deep: true,
    },
  },
  created() {
    Object.keys(this.filter.country).length === this.countries.length
      ? (this.all = true)
      : (this.all = false);
  },
  mounted() {
    this.getHotels();
  },
});
</script>

<style></style>
