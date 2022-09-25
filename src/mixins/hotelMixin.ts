import { globalMixin } from "./globalMixin";
import { mapActions, mapGetters } from "vuex";
import store from "@/store";
import axios from "axios";
export const hotelMixin = {
  mixins: [globalMixin],
  methods: {
    ...mapActions("Hotel", [
      "ActionSetHotels",
      "ActionSetHotelFilter",
      "ActionSetSearchHotel",
      "ActionSetPaginationHotel",
      "ActionSetLoadingHotel",
      "ActionSetModeGridHotel",
      "ActionSetDialogHotel",
      "ActionSetTotalHotel",
      "ActionSetDialogFilterHotel",
    ]),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    objectToQuery(params: Array<any>): string {
      return (
        Object.keys(params)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((key: any) => `${key}=${params[key]}`)
          .join("&")
      );
    },
    async getHotels() {
      this.ActionSetLoadingHotel(true);
      const { page, rowsPerPage, descending, orderBy } =
        store.getters["Hotel/paginationHotel"];

      const filter = { ...store.getters["Hotel/hotelFilter"] };
      try {
        let query = "?";
        query += page ? `page=${page}` : "";
        query += rowsPerPage ? `&perPage=${rowsPerPage}` : "";
        query += `&sort=${descending ? "desc" : "asc"}`;
        query += orderBy ? `&orderBy=${orderBy}` : "";
        query +=
          Object.keys(filter).length > 0
            ? `&${this.objectToQuery(filter)}`
            : "";

        const { status, data } = await axios.get(
          "https://app-tui-test.herokuapp.com/api/v1/hotels" + query
        );
        if (status === 200) {
          const { records, total, pages } = data;
          this.ActionSetHotels(records);
          this.ActionSetPaginationHotel({
            total,
            pages,
          });
        }
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
      "paginationHotel",
      "dialogFilterHotel",
      "hotelFilter",
    ]),
  },
};
