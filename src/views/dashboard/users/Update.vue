<template>
  <v-container id="user-update" fluid tag="section">
    <base-v-component heading="Users" link="components/users" />
    <v-col class="text-left">
      <v-btn id="myButton" color="primary" class="mb-5" to="/users/list"
        >CLick to view user list!</v-btn
      >
    </v-col>
    <v-row>
      <v-col cols="12" md="12">
        <base-material-card
          color="success"
          icon="mdi-email"
          title="USER UPDATE FORM"
          class="px-5 py-3"
        >
<form
                    ref="userForm"
                    class="mt-5"
                    id="app"
                    data-vv-scope="form-1"
                  >
                    <v-text-field
                      color="secondary"
                      v-model="firstname"
                      v-validate="'required'"
                      :error-messages="errors.collect('form-1.required')"
                      data-vv-name="required"
                      name="firstname"
                      label="First Name..."
                      prepend-icon="mdi-face"
                    />
                    <v-text-field
                      color="secondary"
                      v-model="lastname"
                      v-validate="'required'"
                      :error-messages="errors.collect('form-1.required')"
                      data-vv-name="required"
                      name="lastname"
                      label="Last Name..."
                      prepend-icon="mdi-face-woman "
                    />

                    <v-text-field
                      color="secondary"
                      v-model="username"
                      v-validate="'required'"
                      :error-messages="errors.collect('form-1.required')"
                      data-vv-name="required"
                      name="username"
                      label="Username..."
                      prepend-icon="mdi-account"
                    />

                    <v-text-field
                      class="mb-8"
                      color="secondary"
                      v-model="password"
                      v-validate="'required'"
                      :error-messages="errors.collect('form-1.required')"
                      data-vv-name="required"
                      name="password"
                      label="Password..."
                      prepend-icon="mdi-lock-outline"
                    />

                    <v-checkbox :input-value="true" color="secondary">
                      <template v-slot:label>
                        <span class="text-no-wrap">I agree to the&nbsp;</span>
                        <a class="secondary--text ml-6 ml-sm-0" href="#">
                          terms and conditions </a
                        >.
                      </template>
                    </v-checkbox>
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
const { authApi } = require("../../../apis");

export default {
  name: "DashboardFormsRegularForms",

  $_veeValidate: {
    validator: "new",
  },
  data: () => ({
    boo: false,
    categoryUpdate: {},
  }),

  mounted: function () {
    this.getUser()
  },
  methods: {
    validateForm(scope) {
      this.$validator.validateAll(scope).then(async (result) => {
        if (result) {
          const result2 = await authApi.updateUser({
            _id: this.$route.params.userId,
            title: this.categoryUpdate.title,
          });
          if (result2.data.code === 200) {
                        this.$notificate.showMessage({
              content: "UPDATE THANH CONG",
              color: "info",
            });
            this.$router.push("/categories/list");
          }
        }
      });
    },
    getUser: async function () {
          const result = await authApi.getUserById({
            _id: this.$route.params.userId,
          });
          if (result.data.code === 200) {
              this.updateUser = result.data.users
          }
    }
  },
};
</script>
