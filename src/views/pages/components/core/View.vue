<template>
  <v-app id="pages">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "PagesCoreView",

  data: () => ({
    srcs: {
      "/pages/login": "login.jpg",
      "/pages/register": "register.jpg"
    }
  }),

  computed: {
    src() {
      return this.srcs[this.$route.path];
    }
  }
};
</script>
