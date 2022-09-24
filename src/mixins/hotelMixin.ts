import { globalMixin } from "./globalMixin";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export const hotelMixin = {
  mixins: [globalMixin],
  methods: {
    ...mapActions("Hotel", ["ActionSetHotels", "ActionSetHotelFilter"]),
    async getHotels() {
      try {
        const { status, data } = await axios.get(
          "https://search-service.new-prod.stay.tui.com/goquo/hotel/search?adults=2&from=2022-09-23&duration=1&destinationType=country&destinationId=a2e354c1-e730-40ba-bce7-3d5c98f4f929&market=tui-pt&pageSize=15&page=1&"
        );
        if (status === 200) console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapGetters("Hotel", ["hotels", "hotelFilter"]),
  },
};
