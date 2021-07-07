<template>
  <v-container id="login" fill-height tag="section">
    <v-row justify="center">
      <v-slide-y-transition appear>
        <base-material-card
          color="success"
          light
          max-width="100%"
          width="450px"
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
            v-model="password"
            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show3 ? 'text' : 'password'"
            name="input-10-2"
            label="password"
            hint="At least 6 characters"
            class="input-group--focused"
            @click:append="show3 = !show3"
            @keyup.enter="login"
            prepend-icon="mdi-key"
          ></v-text-field>
            <pages-btn
              large
              color=""
              depressed
              class="light-blue lighten-1"
              @click="login"
            >
              Let's Go
            </pages-btn>

          </v-card-text>
          <v-row style="margin-top:20px; margin-bottom:20px;" class="justify-space-between">
      <v-btn
      depressed
      color="primary"
      @click="addValue('admin')"
    >
      ADMIN
    </v-btn>
                <v-btn
      depressed
      color="secondary"
      @click="addValue('contributor')"
    >
      CONTRIBUTOR
    </v-btn>
                <v-btn
      depressed
      class="orange"
      @click="addValue('normal')"
    >
      NORMAL
    </v-btn>
          </v-row>
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
    show3: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 6 || 'Min 6 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
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
    addValue(val) {
      this.password = '123456'
      if (val === 'admin') {
         this.username = 'admin'
      } else if (val === 'contributor') {
        this.username = 'contributor'
      } else {
        this.username = 'normal'
      }
    }
  },
};
</script>
