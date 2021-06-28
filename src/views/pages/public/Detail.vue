<template>
  <v-app>
    <pages-home-content />
  </v-app>
</template>
<script>
export default {
  name: "Detail",
  components: {
    PagesHomeContent: () => import("./Content"),
  },
};
</script>
