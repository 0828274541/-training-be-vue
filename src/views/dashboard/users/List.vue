<template>
  <v-container id="user-list" fluid tag="section">
    <h1 class="text-center">User List</h1>

    <v-row>
      <v-col class="text-left">
        <v-btn id="myButton" color="primary" class="mb-5" to="/users/add"
          >Add!<v-icon>mdi-plus-box-multiple</v-icon></v-btn
        >
      </v-col>
      <v-col class="text-right">
        <v-dialog
          v-model="dialog"
          persistent
          max-width="290"
          :disabled="isValid"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              id="deleteUser"
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Delete! <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5">
              Use Google's location service?
            </v-card-title>
            <v-card-text
              >Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are
              running.</v-card-text
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">
                Disagree
              </v-btn>
              <v-btn color="green darken-1" text @click="deleteItem">
                Agree
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
    <v-card>
      <v-card-title>
        Nutrition
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          filled
          rounded
          dense
          single-line
          @keyup.enter="seachItem"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="users"
        :search="search"
        :page="page"
        :items-per-page="limit"
        :options.sync="options"
        class="elevation-1"
        :pageCount="numberOfPages"
        :server-items-length="totalPassengers"
        :loading="loading"
      >
        <template v-slot:header.checkedAll="{ header }">
          <input type="checkbox" v-model="selectAll" />
        </template>
        <template v-slot:body="{ items }">
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td>
                <input
                  :value="item._id"
                  type="checkbox"
                  v-model="userIds"
                  @change="afterChecked"
                />
              </td>
              <td>{{ item._id }}</td>
              <td>{{ item.username }}</td>
              <td>{{ item.firstName }}</td>
              <td>{{ item.lastName }}</td>
              <td>
                <v-btn
                  color="success"
                  class="px-1 ml-1"
                  fab
                  x-small
                  :to="{
                    name: 'UserUpdate',
                    params: { userId: item._id },
                  }"
                  ><v-icon>mdi-pencil</v-icon></v-btn
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>

const { usersApi } = require("../../../apis");

export default {
  name: "UserList",

  data() {
    return {
      headers: [
        {
          text: "dsada",
          align: "start",
          sortable: false,
          value: "checkedAll",
        },
        { text: "Id", value: "_id", sortable: false },
        { text: "Username", value: "username" },
        { text: "Firstname", value: "firstName" },
        { text: "Lastname", value: "lastName" },
        { text: "Action", value: "action", sortable: false },
      ],
      search: "",
      users: [],
      userIds: [],
      isValid: true,
      booleanValue: false,
      checkedAll: false,
      dialog: false,
      limit: 5,
      page: 1,
      totalPassengers: 0,
      options: {},
      sortBy: "",
      sortDesc: "",
      numberOfPages: 0,
    };
  },
  mounted() {
    this.getUser();
  },
  watch: {
    options: {
      handler(newValue) {
        this.page = newValue.page;
        this.limit = newValue.itemsPerPage;
        this.sortBy = newValue.sortBy[0];
        this.sortDesc = newValue.sortDesc[0] === true ? "-" : "";
        this.getUser();
      },
    },
    deep: true,
  },
  computed: {
    selectAll: {
      get: function () {
        return this.users ? this.userIds.length === this.users.length : false;
      },
      set: function (value) {
        const userIds = [];
        if (value) {
          this.users.forEach((item) => {
            userIds.push(item._id);
          });
        }
        this.userIds = userIds;
        this.afterChecked();
      },
    },
  },
  methods: {
    getUser: async function () {
      const result = await usersApi.paging({
        search: this.search.trim(),
        page: this.page,
        limit: this.limit,
        sort_column: this.sortBy,
        sort_direction: this.sortDesc
      });
      if (result.data.code === 200) {
        const {
 docs: users, limit, page, totalDocs
} = result.data.users;
        if (users.length) {
        this.page = page;
        this.numberOfPages = limit;
        this.totalPassengers = totalDocs;
        this.users = users
        } else {
                  this.$notificate.showMessage({
          content: "DATA NOT FOUND",
          color: "info",
        });
        }
      }
    },
    deleteItem: async function () {
      this.dialog = false;
      const result = await usersApi.deleteUser({
        userIds: this.userIds,
      });
      if (result.data.code === 200) {
        this.$notificate.showMessage({
          content: result.data.message,
          color: "info",
        });
        this.$router.go(0);
      }
    },
    afterChecked() {
      if (this.userIds.length) {
        this.isValid = false;
      } else {
        this.isValid = true;
      }
    },
    seachItem() {
        this.page = 1;
        this.getUser()
    },
  },
};
</script>
<style>
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  font-size: 20px !important;
  font-weight: bold;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td {
  font-size: 20px !important;
  font-weight: bold;
}
.v-data-footer {
  font-size: xx-large !important;
}
</style>
<style scoped>
.v-text-field {
  width: 60px;
}
</style>
