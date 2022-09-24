<template>
  <q-card class="q-my-sm full-width" flat v-if="type == 'row'">
    <q-card-section horizontal>
      <q-skeleton height="200px" square animation="fade" class="full-width" />
      <q-card-section class="full-width">
        <q-skeleton
          type="text"
          square
          width="50%"
          height="56px"
          animation="fade"
        />
        <q-skeleton
          type="text"
          square
          height="12px"
          width="40%"
          animation="fade"
        />
        <div class="q-pr-md q-gutter-md row justify-end items-end q-mt-lg">
          <q-skeleton
            type="text"
            square
            width="20%"
            height="51px"
            animation="fade"
          />
          <q-skeleton
            type="text"
            square
            width="20%"
            height="51px"
            animation="fade"
          />
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>

  <q-card v-else class="row bg-transparent" flat>
    <div class="q-pa-sm col-xs-12 col-sm-6 col-md-4" v-for="n in 3" :key="n">
      <q-card flat>
        <q-skeleton height="233px" square />
        <q-card-section class="q-pb-sm">
          <q-skeleton type="text" class="text-subtitle1" />
          <q-skeleton type="text" width="50%" class="text-subtitle1" />
          <div class="q-gutter-md row justify-between items-end">
            <q-skeleton
              type="text"
              width="40%"
              height="58px"
              animation="fade"
            />
            <q-skeleton
              type="text"
              width="40%"
              height="58px"
              animation="fade"
            />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HotelSkeleton",
  props: {
    type: {
      type: String,
      default: "row",
    },
  },
});
</script>

<style></style>
