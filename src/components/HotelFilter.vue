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
    <q-separator spaced />
    <q-card-section class="row q-col-gutter-sm q-pa-xs" v-if="!isMobile">
      <div class="col-6">
        <q-btn
          unelevated
          :label="$t('CLEAR')"
          outline
          class="full-width"
          color="white"
          text-color="primary"
          no-caps
          @click="clearFilter()"
        />
      </div>
      <div class="col-6">
        <q-btn
          unelevated
          no-caps
          :label="$t('APPLY')"
          color="primary"
          @click="onFilter()"
          class="full-width"
        />
      </div>
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
        country: Array<string> | string;
      },
      all: false as boolean,

      countries: [
        { label: "Portugal", value: "Portugal" },
        { label: "Spain", value: "Spain" },
        { label: "Italy", value: "Italy" },
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
          country: Object.values(val).join(),
        });
      },
      deep: true,
    },
    // filter: {
    //   handler() {
    //     console.log(this.hotelFilter);
    //     if (this.hotelFilter.country) this.filter.country = [];
    //   },
    //   deep: true,
    // },
  },
  methods: {
    clearFilter() {
      if (this.dialogFilterHotel) this.ActionSetDialogFilterHotel(false);
      this.ActionSetHotelFilter({ country: "" });
      this.filter.country = [];
      this.getHotels();
    },
  },
  created() {
    if (this.hotelFilter.country)
      this.filter.country = this.hotelFilter.country.split(",");
  },
});
</script>

<style></style>
