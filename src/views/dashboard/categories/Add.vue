<template>
  <v-container id="user-add" fluid tag="section">
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
          title="CATEGORY ADD FORM"
          class="px-5 py-3"
        >
          <form ref="categoryForm" class="mt-5" id="app" data-vv-scope="form-1">
            <v-text-field
              v-model="title"
              v-validate="'required'"
              :error-messages="errors.collect('form-1.required')"
              color="secondary"
              data-vv-name="required"
              label="title"
              name="title"
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
const { categoriesApi } = require("../../../apis");

export default {
  name: "DashboardUserAddForms",

  $_veeValidate: {
    validator: "new",
  },
  methods: {
    validateForm(scope) {
      this.$validator.validateAll(scope).then(async (result) => {
        if (result) {
        const result2 = await categoriesApi.addCategory({
        title: this.$refs.categoryForm.title.value,
        });
        if (result2.data.code === 200) {
          this.$notificate.showMessage({ content: result2.data.message, color: 'info' });
        }
        }
      })
    }
  }
};
</script>
