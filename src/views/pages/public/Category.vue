<template>
  <v-row style="backgound-color: aliceblue">
    <v-col>
      <v-btn
        v-for="(item, i) in categories"
        :key="i"
        @click="selectCategory(item._id)"
        class="hidden-sm-and-down"
        min-height="48"
        text
        :id="item._id"
      >
        <span v-text="item.title" />
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import eventBus from "../../../event-bus";

const { categoriesApi } = require("../../../apis");

export default {
  name: "PagesCategory",

  data: () => ({
    categories: [],
  }),
  async created() {
    const result = await categoriesApi.getCategory();
    if (result.data.code === 200) {
      this.categories = result.data.categories.docs;
      this.categories.unshift({ _id: "all", title: "Tất cả" });
    }
  },
  updated: function () {
    document.getElementById("all").classList.add("v-btn--active");
    eventBus.$emit("click", "all");
  },
  methods: {
    selectCategory(id) {
      this.categories.forEach((item) => {
        document.getElementById(item._id).classList.remove("v-btn--active");
      });
      document.getElementById(id).classList.add("v-btn--active");
      eventBus.$emit("click", id);
    },
  },
};
</script>