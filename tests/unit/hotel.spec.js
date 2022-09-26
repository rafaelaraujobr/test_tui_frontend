import { mount } from "@vue/test-utils";
import HotelPage from "@/pages/HotelPage.vue";
import i18n from "./testUtils";

const hotel = {
  id: "e21a5760-75c5-4477-b12c-948ca0cb1391",
  name: "Mediterranea Hotel & Convention Center",
  country: "Italy",
  city: "Salerno",
  region: "Campania",
  star_rating: 4,
  price_per_person: 72.95,
  currency: "EUR",
  adults: 2,
  images: [
    {
      url: "https://static.hdpp-tui.com/ehb/giata/bigger/63/630362/630362a_hb_r_001.jpg",
    },
    {
      url: "https://static.hdpp-tui.com/ehb/giata/bigger/63/630362/630362a_hb_ro_027.jpg",
    },
    {
      url: "https://static.hdpp-tui.com/ehb/giata/bigger/63/630362/630362a_hb_ro_018.JPG",
    },
    {
      url: "https://static.hdpp-tui.com/ehb/giata/bigger/63/630362/630362a_hb_ro_028.jpg",
    },
    {
      url: "https://static.hdpp-tui.com/ehb/giata/bigger/63/630362/630362a_hb_ro_005.JPG",
    },
    {
      url: "https://static.hdpp-tui.com/ehb/giata/bigger/63/630362/630362a_hb_ro_004.JPG",
    },
    {
      url: "https://i.travelapi.com/hotels/2000000/1740000/1736200/1736143/5084b0a2_b.jpg",
    },
  ],
  created_at: "2022-09-25T04:44:18.123Z",
};

describe("HotelPage", () => {
  it("Testing hotel parameters", async () => {
    const wrapper = mount(HotelPage, {
      global: {
        plugins: [i18n],
      },
      propsData: {
        id: hotel.id,
      },
    });
    await wrapper.setData({ hotel: hotel });
    expect(wrapper.get('[data-test="name"]').text()).toMatch(hotel.nome);
    // expect(wrapper.get('[data-test="start-rating-is-superior"]')).toBeNull();
    expect(wrapper.get('[data-test="address"]').text()).toMatch(hotel.country);
    expect(wrapper.get('[data-test="address"]').text()).toMatch(hotel.city);
    expect(wrapper.get('[data-test="address"]').text()).toMatch(hotel.region);
    expect(wrapper.get('[data-test="price"]').text()).toMatch(
      hotel.price_per_person
    );
  });
});
