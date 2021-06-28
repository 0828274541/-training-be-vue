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
        <!-- <tr>
          <td>1</td>
          <td>Andrew Mike</td>
          <td>Developer</td>
          <td>2013</td>
          <td class="text-right">€ 99,225</td>
          <td class="text-right">
            <v-btn
              v-for="(action, i) in actions"
              :key="i"
              class="px-2 ml-1"
              :color="action.color"
              min-width="0"
              small
            >
              <v-icon small v-text="action.icon" />
            </v-btn>
          </td>
        </tr>

        <tr>
          <td>2</td>
          <td>John Doe</td>
          <td>Designer</td>
          <td>2012</td>
          <td class="text-right">€ 89,241</td>
          <td class="text-right">
            <v-btn
              v-for="(action, i) in actions"
              :key="i"
              :color="action.color"
              class="px-1 ml-1"
              fab
              x-small
            >
              <v-icon v-text="action.icon" />
            </v-btn>
          </td>
        </tr>

        <tr>
          <td>3</td>
          <td>Alex Mike</td>
          <td>Designer</td>
          <td>2010</td>
          <td class="text-right">€ 92,144</td>
          <td class="text-right">
            <v-btn
              v-for="(action, i) in actions"
              :key="i"
              :color="action.color"
              class="ml-1"
              fab
              icon
              x-small
            >
              <v-icon small v-text="action.icon" />
            </v-btn>
          </td>
        </tr>

        <tr>
          <td>4</td>
          <td>Mike Monday</td>
          <td>Marketing</td>
          <td>2013</td>
          <td class="text-right">€ 49,990</td>
          <td class="text-right">
            <v-btn
              v-for="(action, i) in actions"
              :key="i"
              :color="action.color"
              class="px-1 ml-1"
              fab
              x-small
            >
              <v-icon v-text="action.icon" />
            </v-btn>
          </td>
        </tr>

        <tr>
          <td>5</td>
          <td>Paul Dickens</td>
          <td>Communications</td>
          <td>2015</td>
          <td class="text-right">€ 69,201</td>
          <td class="text-right">
            <v-btn
              v-for="(action, i) in actions"
              :key="i"
              class="px-2 ml-1"
              :color="action.color"
              min-width="0"
              small
            >
              <v-icon small v-text="action.icon" />
            </v-btn>
          </td>
        </tr> -->
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
