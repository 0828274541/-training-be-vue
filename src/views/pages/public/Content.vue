<template>
  <v-app id="">
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <pages-category />
          <pages-list />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
  components: {
    PagesCategory: () => import("./Category"),
    PagesList: () => import("./List"),
  },
};
</script>
