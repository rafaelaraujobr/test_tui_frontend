<template>
  <q-carousel
    animated
    v-model="slide"
    swipeable
    arrows
    infinite
    height="200px"
    class="full-width"
  >
    <q-carousel-slide
      v-for="(item, index) in images"
      :key="index"
      :name="index"
      :img-src="item.url"
    />
  </q-carousel>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ImageHotel from "@/types/ImageHotel";
export default defineComponent({
  name: "HotelSkeleton",
  data() {
    return {
      slide: 0,
    };
  },
  props: {
    images: {
      type: Array as PropType<ImageHotel[]>,
      default: () => [],
    },
  },
});
</script>

<style></style>
