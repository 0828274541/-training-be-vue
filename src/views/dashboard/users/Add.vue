<template>
  <v-container id="user-add" fluid tag="section">
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
          title="USER ADD FORM"
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
  name: "DashboardUserAddForms",

  $_veeValidate: {
    validator: "new",
  },
  methods: {
    validateForm(scope) {
      this.$validator.validateAll(scope).then(async (result) => {
        if (result) {
          const result2 = await authApi.register({
            firstName: this.$refs.userForm.firstname.value,
            lastName: this.$refs.userForm.lastname.value,
            username: this.$refs.userForm.username.value,
            password: this.$refs.userForm.password.value,
          });
          if (result2.data.code === 200) {
            this.$notificate.showMessage({
              content: result2.data.message,
              color: "info",
            });
          } else {
            this.$notificate.showMessage({
              content: result2.data.message,
              color: "info",
            });
          }
        }
      });
    },
  },
};
</script>
