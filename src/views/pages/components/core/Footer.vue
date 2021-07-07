<template>
  <v-footer id="fixed-footer">
    <div
      id="pages-core-footer"
      color="grey lighten-3"
      dark
      class="white--text footer d-flex justify-center"
    >
      <div class="d-flex align-center justify-center my-6 flex-column">
        <h1 class="mb-4 text-center">
          Subscribe to our Newsletter
        </h1>
        <div  class="d-flex align-center justify-center my-3">
          <div
            class="v-input v-input--hide-details v-input--dense theme--light v-text-field v-text-field--single-line v-text-field--solo v-text-field--is-booted v-text-field--enclosed v-text-field--placeholder v-text-field--rounded"
            style="max-width: 400px;"
          >
            <div class="v-input__control">
              <div class="v-input__slot">
                <div class="v-text-field__slot">
                  <input id="input-176" placeholder="Email Address" type="text" v-model="message" />
                </div>
              </div>
            </div>
          </div>
          <v-btn
            v-on:click="subscribe"
            class="ml-2 primary"
            rounded
          >
              Sign up
          </v-btn>
        </div>
      </div>
    </div>
    <div class="d-flex align-center justify-center"  style="height: 100px; background-color: rgb(41, 41, 41); width: 100%" >
      <div class="title font-weight-light grey--text text--lighten-1 text-center" style="width: 100%">
       Contact: manhcuong.vn.1805@gmail.com
      </div>
      <div class="title font-weight-light grey--text text--lighten-1 text-center" style="width: 100%">
        © 2021 — Training Project Node & VueJS — Made with 💜 by CuongNM48
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "PagesCoreFooter",

  data: () => ({
    links: [
      {
        href: "#",
        text: "Creative Tim"
      },
      {
        href: "#",
        text: "About Us"
      },
      {
        href: "#",
        text: "Blog"
      },
      {
        href: "#",
        text: "Licenses"
      }
    ],
    message: null
  }),
  methods: {
    subscribe: function () {
      this.message = null;
      this.$notificate.showMessage({ content: `Thanks you for subscribe !!!`, color: 'success' });
    }
  }
};
</script>

<style lang="sass">
#pages-core-footer
  a
    color: #000000
    font-size: .825rem
    font-weight: 500
    text-decoration: none
    text-transform: uppercase
</style>
<style>
.footer {
  background-image: url(https://d33wubrfki0l68.cloudfront.net/_nuxt/img/3ef2a22e51c5af548c36c6fb2f760dc2b0ac0a6b/sub.96e1214.jpg);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  width: 100%;
  height: 300px;
}

</style>
