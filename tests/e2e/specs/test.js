//https:docs.cypress.io/api/table-of-contents

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

describe("My First Test App ", () => {
  it("Visits hotel check url", () => {
    cy.visit(`/hotel/${hotel.id}`);
    cy.contains("[data-test=name]", hotel.name);
    cy.contains("[data-test=address]", hotel.country);
    cy.contains("[data-test=address]", hotel.city);
    cy.contains("[data-test=address]", hotel.region);
  });
});
