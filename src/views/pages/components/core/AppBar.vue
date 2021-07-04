<template>
  <v-app-bar app color="mistyrose">
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-10" color="red" size="32"></v-avatar>

      <v-btn
        v-for="(item, i) in menuItems"
        :key="i"
        :to="item.to"
        class="hidden-sm-and-down"
        min-height="48"
        text
      >
        <v-icon left size="20" v-text="item.icon" />
        <span v-text="item.text" />
      </v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
          label="search for title book"
          v-model="searchItem"
          @keyup.enter="goToSearch"
        ></v-text-field>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "PagesCoreAppBar",

  data: () => ({
    items: [
      {
        icon: "mdi-home",
        text: "Home",
        to: "/public/home",
      },
      {
        icon: "mdi-view-dashboard",
        text: "Dashboard",
        to: "/",
      },

      {
        icon: "mdi-account-multiple-plus",
        text: "Register",
        to: "/public/register",
      },
      {
        icon: "mdi-fingerprint",
        text: "Login",
        to: "/public/login",
      },
    ],
    searchItem: ""
  }),
  computed: {
    ...mapGetters({ token: "GET_TOKEN" }),
    menuItems: function () {
      if (this.token) {
        return this.items.map((item) => {
          if (item.text === "Login") {
            item.text = "Logout";
            item.to = "/public/logout";
          }
          return item;
        });
      } else {
        return this.items.map((item) => {
          if (item.text === "Logout") {
            item.text = "Login";
            item.to = "/public/login";
          }
          return item;
        });
      }
    },
  },
  methods: {
    ...mapMutations({
      setSearchItem: "SET_SEARCH",
    }),
    goToSearch: function() {
      if (this.searchItem.trim()) {
        this.setSearchItem(this.searchItem)
        this.searchItem = ""
        if (this.$route.path === "/public/search") {
            this.$router.go(0);
        } else {
            this.$router.push({ path: `/public/search` });
        }
      } else {
        this.$notificate.showMessage({ content: "SEARCH VALUE INVALID", color: 'info' });
      }
    }
  }
};
</script>
