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
        :id="item.id"
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
          clearable
        ></v-text-field>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapMutations } from "vuex";

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
        text: "Admin",
        to: "/",
        id: "btnAdmin"
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
  created() {
    if (this.$route.path === "/public/search") {
      this.searchItem = this.$store.getters.GET_SEARCH
    }
  },
  computed: {
    menuItems: function () {
      if (this.$store.getters.GET_TOKEN) {
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
  updated() {
      this.checkRoleUser()
  },
  mounted() {
      this.checkRoleUser()
  },
  methods: {
    ...mapMutations({
      setSearchItem: "SET_SEARCH",
    }),
    goToSearch: function() {
        this.setSearchItem(this.searchItem)
        if (this.$route.path === "/public/search") {
            this.$router.go(0);
        } else {
            this.$router.push({ path: `/public/search` });
        }
    },
    checkRoleUser: function() {
      const { data } = this.$store.getters.GET_USER_INFO
      if (!data || data.user.role[0] === 'normal') {
          document.getElementById("btnAdmin").style.display = "none"; 
      } else {
        document.getElementById("btnAdmin").style.display = "" ;
      }
    }
  }
};
</script>
