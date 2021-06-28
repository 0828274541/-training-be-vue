<template>
  <v-app>
    <pages-home-slide />
    <pages-home-content />
  </v-app>
</template>
<script>
export default {
  name: "Home",
  components: {
    PagesHomeSlide: () => import("./Slide"),
    PagesHomeContent: () => import("./Content"),
  },
};
</script>
