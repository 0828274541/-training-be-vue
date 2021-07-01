<template>
  <v-container id="user-list" fluid tag="section">
    <h1 class="text-center">User List</h1>

    <v-col class="text-left">
      <router-link to="/users/add">
        <v-btn id="myButton" color="primary" class="mb-5">Add!</v-btn>
      </router-link>
    </v-col>

    <v-simple-table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Job</th>
          <th class="">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in list" :key="user">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.job }}</td>
          <td>
            <!-- <v-btn color="success" class="px-1 ml-1" fab x-small>
              <v-icon >{{icon}}</v-icon>
            </v-btn>
            <v-btn color="error" class="px-1 ml-1" fab x-small>
              <v-icon small v-text="icon" />
            </v-btn> -->
            <router-link
              :to="{
                name: 'UserUpdate',
                params: { userId: user.id },
              }"
            >
              <v-btn color="success" class="px-1 ml-1" fab x-small
                ><v-icon>mdi-pencil</v-icon></v-btn
              >
            </router-link>
            <v-btn
              @click="deleteItem(user.id)"
              color="error"
              class="px-1 ml-1"
              fab
              x-small
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DashboardFormsRegularForms",

  data: () => ({
    list: [],
  }),
  computed: {
    ...mapGetters(["userList"]),
  },
  mounted: function () {
    this.list = this.userList;
  },
  methods: {
    deleteItem(id) {
      this.list = this.list.filter((user) => user.id !== Number(id));
      this.$store.commit("SET_USERLIST", this.list);
      alert(`DELETE ITEM CO ID = ${id}. SUCCESS`);
    },
    updateItem(id) {
      alert(`update ITEM CO ID = ${id}`);
    },
  },
};
</script>
