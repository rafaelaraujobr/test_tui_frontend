import { globalMixin } from "./globalMixin";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export const hotelMixin = {
  mixins: [globalMixin],
  methods: {
    ...mapActions("Hotel", [
      "ActionSetHotels",
      "ActionSetHotelFilter",
      "ActionSetLoadingHotel",
      "ActionSetModeGridHotel",
      "ActionSetDialogHotel",
      "ActionSetDialogFilterHotel",
    ]),
    async getHotels() {
      this.ActionSetLoadingHotel(true);
      try {
        const { status, data } = await axios.get(
          "https://search-service.new-prod.stay.tui.com/goquo/hotel/search?adults=2&from=2022-09-24&duration=1&destinationType=country&destinationId=a2e354c1-e730-40ba-bce7-3d5c98f4f929&ip=179.108.189.40&market=tui-pt&pageSize=15&page=1&",
          { headers: { Authorization: "Bearer DlSZiSqqfVlue7WQqLEAfNBqQNkx" } }
        );
        if (status === 200) this.ActionSetHotels(data.hotels);
      } catch (error) {
        console.log(error);
      } finally {
        this.ActionSetLoadingHotel(false);
      }
    },
  },
  computed: {
    ...mapGetters("Hotel", [
      "hotels",
      "loadingHotel",
      "modeGridHotel",
      "dialogHotel",
      "dialogFilterHotel",
      "hotelFilter",
    ]),
  },
};
