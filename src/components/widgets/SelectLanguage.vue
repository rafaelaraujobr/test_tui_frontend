<template>
  <q-select
    dropdown-icon="sym_o_expand_more"
    dense
    v-model="languageSelect"
    :options="languageList"
    borderless
  >
    <template v-slot:selected>
      <q-item dense class="q-px-none">
        <q-item-section>
          <q-img
            img-class="rounded-borders"
            :src="require('@/assets/images/flags/' + languageSelect.flag)"
            spinner-color="white"
            width="24px"
          />
        </q-item-section>
      </q-item>
    </template>
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section side>
          <q-img
            img-class="rounded-borders"
            :src="require('@/assets/images/flags/' + scope.opt.flag)"
            spinner-color="white"
            width="24px"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ scope.opt.label }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { globalMixin } from "@/mixins/globalMixin";
interface Language {
  label: string;
  value: string;
  flag: string;
}
export default defineComponent({
  name: "SelectLanguage",
  mixins: [globalMixin],
  watch: {
    async language() {
      this.$i18n.locale = this.language.value;
      // const { default: language } = await import(
      //   `quasar/lang/${this.language.quasar}`
      // );
      // this.$q.lang.set(language);
    },
  },
  computed: {
    languageSelect: {
      get(): Language {
        return this.language;
      },
      set(value: Language) {
        this.ActionSetLanguage(value);
      },
    },
  },
});
</script>

<style></style>
