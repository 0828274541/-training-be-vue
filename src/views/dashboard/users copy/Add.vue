<template>
  <v-container id="user-add" fluid tag="section">
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
          title="USER ADD FORM"
          class="px-5 py-3"
        >
          <form ref="userForm" class="mt-5" id="app" data-vv-scope="form-1">
            <v-text-field
              v-model="number"
              v-validate="'required|numeric'"
              :error-messages="errors.collect('form-1.number')"
              data-vv-name="number"
              color="secondary"
              type="number"
              label="Id"
              name="id"
            />
            <v-text-field
              v-model="required"
              v-validate="'required'"
              :error-messages="errors.collect('form-1.required')"
              color="secondary"
              data-vv-name="required"
              label="Name"
              name="name"
            />
            <v-text-field
              v-model="required"
              v-validate="'required'"
              :error-messages="errors.collect('form-1.required')"
              color="secondary"
              data-vv-name="required"
              label="Job"
              name="job"
            />

            <v-checkbox label="Subscribe to newsletter" class="mt-0" />
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
  name: "DashboardUserAddForms",

  $_veeValidate: {
    validator: "new",
  },

  data: () => ({
    list: [],
    boo: false,
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
          this.boo = false;
          this.list.forEach((item) => {
            if (item.id === Number(this.$refs.userForm.id.value)) {
              alert("USER ID EXITS");
              this.boo = true;
            }
          });
          if (this.boo === false) {
            this.list.push({
              id: Number(this.$refs.userForm.id.value),
              name: this.$refs.userForm.name.value,
              job: this.$refs.userForm.job.value,
            });
            // console.log(this.$refs.userForm.id.value);
            this.$store.commit("SET_USERLIST", this.list);
            alert("USER ADD SUCCESS");
            this.$router.push("/users/list");
          }
        }
      });
    },
  },
};
</script>
