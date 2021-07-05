<template>
  <v-container id="login" fill-height tag="section">
    <v-row justify="center">
      <v-slide-y-transition appear>
        <base-material-card
          color="success"
          light
          max-width="100%"
          width="400"
          class="px-5 py-3"
        >
          <template v-slot:heading>
            <div class="text-center">
              <h1 class="display-2 font-weight-bold mb-2">Login</h1>

              <v-btn
                v-for="(social, i) in socials"
                :key="i"
                class="ma-1"
                icon
                rel="noopener"
                target="_blank"
              >
                <v-icon v-text="social.icon" />
              </v-btn>
            </div>
          </template>

          <v-card-text class="text-center">
            <div class="text-center grey--text body-1 font-weight-light">
              Or Be Classical
            </div>

            <v-text-field
              color="secondary"
              label="User Name..."
              prepend-icon="mdi-face"
              class="mt-10"
              v-model="username"
              @keyup.enter="login"
            />

            <v-text-field
              class="mb-8"
              color="secondary"
              label="Password..."
              prepend-icon="mdi-lock-outline"
              v-model="password"
              @keyup.enter="login"
            />

            <pages-btn
              large
              color=""
              depressed
              class="v-btn--text success--text"
              @click="login"
            >
              Let's Go
            </pages-btn>
          </v-card-text>
        </base-material-card>
      </v-slide-y-transition>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";

const { authApi } = require("../../apis/");

export default {
  name: "PagesLogin",

  components: {
    PagesBtn: () => import("./components/Btn"),
  },
  data: () => ({
    socials: [
      {
        href: "#",
        icon: "mdi-facebook-box",
      },
      {
        href: "#",
        icon: "mdi-twitter",
      },
      {
        href: "#",
        icon: "mdi-github-box",
      },
    ],
    username: "",
    password: "",
  }),

  methods: {
    ...mapMutations({
      setUserInfo: "SET_USER_INFO",
    }),

    login: async function () {
      const result = await authApi.login({
        username: this.username,
        password: this.password,
      });
      if (result.data.code === 200) {
        this.setUserInfo(result.data);
        this.$notificate.showMessage({ content: `Hello.!! ${this.username}`, color: 'info' });
        this.$router.push("/public/home");
      } else if (result.data.code === 400) {
        this.$notificate.showMessage({ content: result.data.message, color: 'info' });
      }
    },
  },
};
</script>
