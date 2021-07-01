<template>
  <v-app id="">
    <v-main class="grey lighten-3" id = "vmain">
      <v-container>
        <pages-category />
        <pages-list />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    PagesCategory: () => import("./Category"),
    PagesList: () => import("./List"),
  },
};
</script>
<style>
#vmain{
  padding: 0 !important;
}
</style>
