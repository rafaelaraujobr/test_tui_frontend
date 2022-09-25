<template>
  <q-page padding>
    <q-breadcrumbs class="q-mt-sm">
      <q-breadcrumbs-el label="Hotels" to="/hotels" />
      <q-breadcrumbs-el :label="hotel?.name" />
      <template v-slot:separator>
        <q-icon size="1.2em" name="arrow_forward" color="primary" />
      </template>
    </q-breadcrumbs>
    <q-card class="q-mt-lg" flat>
      <q-carousel
        swipeable
        animated
        v-model="slide"
        thumbnails
        infinite
        arrows
        v-model:fullscreen="fullscreen"
      >
        <q-carousel-slide
          v-for="(item, index) in hotel?.images"
          :key="index"
          :name="index"
          :img-src="item.url"
        />
        <template v-slot:control>
          <q-carousel-control position="top-right" :offset="[18, 18]">
            <q-btn
              round
              dense
              color="white"
              unelevated
              text-color="primary"
              :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
              @click="fullscreen = !fullscreen"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
      <q-card-section>
        <div class="text-h5">{{ hotel.name }}</div>
        <q-rating
          v-model="hotel.star_rating"
          color="warning"
          size="1.2rem"
          flat
          icon="star_border"
          icon-selected="star"
          readonly
        />
        <div class="text-subtitle2 q-mt-sm">
          <q-icon name="sym_o_pin_drop" size="0.9rem" />
          {{ hotel.city }}, {{ hotel.region }},
          {{ hotel.country }}
        </div>
      </q-card-section>
      <div class="q-gutter-md row justify-end items-end">
        <q-card-section
          class="col-12 row justify-end text-h4 text-weight-medium"
        >
          <div class="text-h4 text-weight-medium text-primary">
            {{ toCurrency(hotel.price_per_person, hotel.currency, "de-DE", 0)
            }}<q-span class="text-caption">/{{ $t("PER_NIGHT") }}</q-span>
          </div>
        </q-card-section>
      </div>
      <q-card-section class="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Turpis cursus in hac
        habitasse platea. Nunc sed id semper risus in hendrerit gravida rutrum.
        Pretium lectus quam id leo in vitae turpis massa sed. Libero justo
        laoreet sit amet cursus sit amet dictum sit. At quis risus sed vulputate
        odio ut enim. Vel pharetra vel turpis nunc eget lorem dolor sed viverra.
        Imperdiet massa tincidunt nunc pulvinar sapien et. Quam vulputate
        dignissim suspendisse in est. Nisi lacus sed viverra tellus in hac
        habitasse platea. Rhoncus dolor purus non enim praesent. Platea dictumst
        vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
        Bibendum at varius vel pharetra vel turpis nunc. Facilisis magna etiam
        tempor orci eu lobortis elementum nibh tellus.
      </q-card-section>
      <q-card-section>
        <iframe
          class="full-width"
          frameborder="0"
          height="450"
          src="https://maps.google.com/maps?q=10.305385,77.923029&hl=es;z=14&amp;output=embed"
        ></iframe>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { hotelMixin } from "@/mixins/hotelMixin";
import Hotel from "@/types/Hotel";
import axios from "axios";
export default defineComponent({
  name: "HotelPage",
  mixins: [hotelMixin],
  props: {
    id: {
      type: String,
      required: true,
    },
    // hotel: {
    //   type: Object as PropType<Hotel>,
    //   required: true,
    // },
  },
  data() {
    return {
      hotel: {} as Hotel,
      slide: 0 as number,
      fullscreen: false as boolean,
    };
  },
  methods: {
    async getHotel() {
      try {
        const { status, data } = await axios.get(
          "https://app-tui-test.herokuapp.com/api/v1/hotels/" + this.id
        );
        if (status === 200) this.hotel = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getHotel();
  },
});
</script>
