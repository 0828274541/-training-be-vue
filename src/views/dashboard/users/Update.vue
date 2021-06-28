<template>
  <v-container id="user-update" fluid tag="section">
    <base-v-component heading="Users" link="components/users" />
    <v-col class="text-left">
      <router-link to="/users/list">
        <v-btn id="myButton" color="primary" class="mb-5"
          >CLick to view user list!</v-btn
        >
      </router-link>
    </v-col>
    <v-row>
      <v-col cols="12" md="12">
        <base-material-card
          color="success"
          icon="mdi-email"
          title="USER UPDATE FORM"
          class="px-5 py-3"
        >
          <form ref="userForm" class="mt-5" id="app" data-vv-scope="form-1">
            <v-text-field
              v-validate="'required|numeric'"
              :error-messages="errors.collect('form-1.number')"
              data-vv-name="number"
              color="secondary"
              type="number"
              label="Id"
              name="id"
              v-model="userUpdate[0].id"
              disabled
            />
            <v-text-field
              v-validate="'required'"
              :error-messages="errors.collect('form-1.required')"
              color="secondary"
              data-vv-name="required"
              label="Name"
              name="name"
              v-model="userUpdate[0].name"
            />
            <v-text-field
              v-validate="'required'"
              :error-messages="errors.collect('form-1.required')"
              color="secondary"
              data-vv-name="required"
              label="Job"
              name="job"
              v-model="userUpdate[0].job"
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
import { mapGetters } from "vuex";

export default {
  name: "DashboardFormsRegularForms",

  $_veeValidate: {
    validator: "new",
  },
  created() {
    this.userUpdate = this.userList.filter(
      (user) => user.id === Number(this.$route.params.userId)
    );
  },
  data: () => ({
    list: [],
    boo: false,
    userUpdate: {},
  }),
  computed: {
    ...mapGetters(["userList"]),
  },
  mounted: function () {
    this.list = this.userList;
  },
  methods: {
    validateForm(scope) {
      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          this.userList.forEach((user) => {
            if (user.id === Number(this.$refs.userForm.id.value)) {
              user.name = this.$refs.userForm.name.value;
              user.job = this.$refs.userForm.job.value;
            }
          });
          this.$store.commit("SET_USERLIST", this.list);
          alert("USER UPDATE SUCCESS");
          this.$router.push("/users/list");
        }
      });
    },
  },
};
</script>
