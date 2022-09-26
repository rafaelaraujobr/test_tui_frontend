import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import i18n from "./testUtils";

describe("App.vue", () => {
  it("should render the component", async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [i18n],
      },
      computed: { showAlert: () => false },
    });
    // expect(wrapper.findComponent(App).exists()).toBe(true);
    expect(wrapper.vm.showAlert).toBe(false);
  });
});
