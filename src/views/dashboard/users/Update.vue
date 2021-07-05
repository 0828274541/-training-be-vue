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
                      v-model="userUpdate.firstName"
                      v-validate="'required'"
                      :error-messages="errors.collect('form-1.required')"
                      data-vv-name="required"
                      name="firstname"
                      label="First Name..."
                      prepend-icon="mdi-face"
                    />
                    <v-text-field
                      color="secondary"
                      v-model="userUpdate.lastName"
                      v-validate="'required'"
                      :error-messages="errors.collect('form-1.required')"
                      data-vv-name="required"
                      name="lastname"
                      label="Last Name..."
                      prepend-icon="mdi-face-woman "
                    />

                    <v-text-field
                      color="secondary"
                      v-model="userUpdate.username"
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
                      v-model="userUpdate.password"
                      name="password"
                      label="Password..."
                      prepend-icon="mdi-lock-outline"
                    />
                     <v-select
                      class="mb-8"
                      color="secondary"
                      v-model="userUpdate.role[0]"
                      v-validate="'required'"
                      :items="roles"
                      item-text="role_text"
                      item-value="role_value"
                      label="Roles"
                      :error-messages="errors.collect('form-1.required')"
                      data-vv-name="required"
                      prepend-icon="mdi-airplane"
                    ></v-select>
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
import { mapGetters } from "vuex";

const { usersApi } = require("../../../apis");

export default {
  name: "DashboardFormsRegularForms",

  $_veeValidate: {
    validator: "new",
  },
  data: () => ({
    boo: false,
    userUpdate: {},
    roles: [
        { role_text: "contributor", role_value: "contributor" },
        { role_text: "normal", role_value: "normal" }
        ]
  }),
  computed: {
    ...mapGetters({
      userList: "GET_USER_LIST",
    }),
  },
  mounted: function () {
    this.userUpdate = this.userList.find(
      (item) => item._id === this.$route.params.userId
    );
    this.userUpdate.password = ""
  },
  methods: {
    validateForm(scope) {
      this.$validator.validateAll(scope).then(async (result) => {
        if (result) {
          const result2 = await usersApi.updateUser({
            _id: this.$route.params.userId,
            firstName: this.userUpdate.firstName,
            lastName: this.userUpdate.lastName,
            username: this.userUpdate.username,
            password: this.userUpdate.password,
            roleUpdate: this.userUpdate.role[0]
          });
          if (result2.data.code === 200) {
            this.$notificate.showMessage({ content: result2.data.message, color: "info" });
            this.$router.push("/users/list");
          }
        }
      });
    },
  },
};
</script>
