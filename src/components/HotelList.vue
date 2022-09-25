<template>
  <q-toolbar class="q-px-sm q-pb-md">
    <q-toolbar-title class="text-weight-bold">
      {{ $t("HOTELS_IN") }}
      {{
        !hotelFilter?.country || hotelFilter?.country.split(",").length === 3
          ? $t("ALL") + " " + $t("COUNTRIES")
          : hotelFilter?.country
      }}
      <q-skeleton
        v-if="loadingHotel"
        type="text"
        square
        width="25%"
        height="28px"
        animation="fade"
      />
      <div class="text-caption" v-else>
        {{ paginationHotel.total }} {{ $t("RESULTS") }}
      </div>
    </q-toolbar-title>
    <q-btn-group unelevated outline v-if="!isMobile">
      <q-btn
        color="primary"
        :outline="!modeGridHotel"
        icon="sym_o_grid_view"
        @click="ActionSetModeGridHotel(true)"
      />
      <q-btn
        color="primary"
        :outline="modeGridHotel"
        icon="sym_o_view_list"
        @click="ActionSetModeGridHotel(false)"
      />
    </q-btn-group>
  </q-toolbar>
  <q-table
    :rows="hotels"
    :rows-per-page-options="[0]"
    :pagination:sync="paginationHotel"
    row-key="id"
    flat
    grid
    hide-pagination
    :loading="loadingHotel"
  >
    <template v-slot:no-data="{ message }">
      <div class="full-width row flex-center text-primary q-gutter-sm">
        <span> {{ message }} </span>
      </div>
    </template>
    <template v-slot:loading>
      <hotel-skeleton
        v-for="n in paginationHotel.rowsPerPage"
        :key="n"
        :type="modeGridHotel ? 'grid' : 'row'"
      />
    </template>
    <template v-slot:item="props">
      <q-card
        class="q-my-sm full-width grid-style__transition"
        flat
        v-if="!modeGridHotel"
      >
        <q-card-section horizontal>
          <hotel-carousel :images="props.row.images" />
          <q-card-section class="full-width">
            <div class="text-h6 text-weight-medium">
              {{ props.row.name }}
            </div>
            <q-rating
              v-model="props.row.star_rating"
              color="warning"
              size="1.2rem"
              flat
              icon="star_border"
              icon-selected="star"
              readonly
            />
            <div class="text-caption">
              <q-icon name="sym_o_pin_drop" size="0.9rem" />
              {{ props.row.city }}, {{ props.row.region }},
              {{ props.row.country }}
            </div>
            <div class="q-gutter-md row justify-end items-end q-mt-lg">
              <div class="col-12 row justify-end text-h5 text-weight-medium">
                <div class="text-h5 text-weight-medium">
                  {{
                    toCurrency(
                      props.row.price_per_person,
                      props.row.currency,
                      "de-DE",
                      0
                    )
                  }}<q-span class="text-caption">/{{ $t("PER_NIGHT") }}</q-span>
                </div>
              </div>
              <div class="col-12 row justify-end">
                <q-btn
                  color="primary"
                  no-caps
                  unelevated
                  class="q-px-lg"
                  :label="$t('CHECK_AVAILABILITY')"
                />
              </div>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
      <div class="q-pa-sm col-xs-12 col-sm-6 col-md-6" v-else>
        <q-card flat class="grid-style__transition">
          <hotel-carousel :images="props.row.images" />
          <q-card-section>
            <div class="text-h6 text-weight-medium">
              {{ props.row.name }}
            </div>
            <q-rating
              v-model="props.row.star_rating"
              color="warning"
              size="1.2rem"
              flat
              icon="star_border"
              icon-selected="star"
              readonly
            />
            <div class="text-caption">
              <q-icon name="sym_o_pin_drop" size="0.9rem" />
              {{ props.row.city }} {{ props.row.region }}
              {{ props.row.country }}
            </div>
          </q-card-section>
          <q-card-section class="q-pr-md q-gutter-md row justify-end items-end">
            <div class="col-12 row justify-end text-weight-medium">
              <div class="text-h5 text-weight-medium">
                {{
                  toCurrency(
                    props.row.price_per_person,
                    props.row.currency,
                    "de-DE",
                    0
                  )
                }}<q-span class="text-caption">/{{ $t("PER_NIGHT") }}</q-span>
              </div>
            </div>
            <div class="col-12 row justify-end" v-if="!isMobile">
              <q-btn
                color="primary"
                no-caps
                unelevated
                class="q-px-lg"
                :label="$t('CHECK_AVAILABILITY')"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </template>
    <template v-slot:bottom>
      <hotel-pagination />
    </template>
  </q-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { hotelMixin } from "@/mixins/hotelMixin";
import HotelSkeleton from "./HotelSkeleton.vue";
import HotelCarousel from "./HotelCarousel.vue";
import HotelPagination from "./HotelPagination.vue";

export default defineComponent({
  name: "HotelList",
  mixins: [hotelMixin],
  components: { HotelSkeleton, HotelCarousel, HotelPagination },
  watch: {
    isMobile() {
      this.ActionSetModeGridHotel(this.isMobile);
    },
  },
  created() {
    this.ActionSetModeGridHotel(this.isMobile);
    this.getHotels();
  },
});
</script>

<style>
.grid-style__transition {
  transition: transform 0.28s, background-color 0.28s;
}

.grid-style__transition:hover {
  transform: scale(1.04);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
