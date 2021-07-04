<template>
  <v-container id="user-update" fluid tag="section">
    <base-v-component heading="Users" link="components/users" />
    <v-col class="text-left">
      <v-btn id="myButton" color="primary" class="mb-5" to="/categories/list"
        >CLick to view category list!</v-btn
      >
    </v-col>
    <v-row>
      <v-col cols="12" md="12">
        <base-material-card
          color="success"
          icon="mdi-email"
          title="CATEOGORY UPDATE FORM"
          class="px-5 py-3"
        >
          <form ref="userForm" class="mt-5" id="app" data-vv-scope="form-1">
            <v-text-field
              v-validate="'required'"
              :error-messages="errors.collect('form-1.required')"
              color="secondary"
              data-vv-name="required"
              label="title"
              name="title"
              v-model="categoryUpdate.title"
            />
            <v-card-actions class="pl-0">
              <v-btn
                color="success"
                min-width="100"
                @click.prevent="validateForm('form-1')"
              >
                Submit
              </v-btn>
            </v-card-actions>
          </form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

const { categoriesApi } = require("../../../apis");

export default {
  name: "DashboardFormsRegularForms",

  $_veeValidate: {
    validator: "new",
  },
  data: () => ({
    boo: false,
    categoryUpdate: {},
  }),
  computed: {
    ...mapGetters({
      categoryList: "GET_CATEGORY_LIST",
    }),
  },
  mounted: function () {
    this.categoryUpdate = this.categoryList.find(
      (item) => item._id === this.$route.params.categoryId
    );
  },
  methods: {
    ...mapMutations({
      setCategoryList: "SET_CATEGORY_LIST",
    }),
    validateForm(scope) {
      this.$validator.validateAll(scope).then(async (result) => {
        if (result) {
          const result2 = await categoriesApi.updateCategory({
            _id: this.$route.params.categoryId,
            title: this.categoryUpdate.title,
          });
          if (result2.data.code === 200) {
            this.$router.push("/categories/list");
          }
        }
      });
    },
  },
};
</script>
