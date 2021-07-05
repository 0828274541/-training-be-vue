<template>
  <v-container id="user-list" fluid tag="section">
    <h1 class="text-center">Category List</h1>

    <v-row>
      <v-col class="text-left">
        <v-btn id="myButton" color="primary" class="mb-5" to="/categories/add"
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
          id="deleteCategory"
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
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="deleteItem"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      </v-col>
    </v-row>
    <v-card>

      <v-data-table
        :headers="headers"
        :items="categories"
        :search="search"
        class="elevation-1"
      >
    <template v-slot:header.checkedAll="{ header }">
     <input  type="checkbox" v-model="selectAll" />
    </template>
        <template v-slot:body="{ items }">
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td>
                <input
                  :value="item._id"
                  type="checkbox"
                  v-model="categoryIds"
                  @change="afterChecked"
                />
              </td>
              <td>{{ item._id }}</td>
              <td>{{ item.title }}</td>
              <td>
                <v-btn
                  color="success"
                  class="px-1 ml-1"
                  fab
                  x-small
                  :to="{
                    name: 'CategoryUpdate',
                    params: { categoryId: item._id },
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
import { mapMutations } from "vuex";

const { categoriesApi } = require("../../../apis");

export default {
  name: "CategoryList",

  data() {
    return {
      headers: [
        {
          text: "dsada",
          align: "start",
          sortable: false,
          value: "checkedAll",
        },
        { text: "Id", value: "_id" , sortable: false },
        { text: "Title", value: "title" , sortable: false  },
        { text: "Action", value: "action", sortable: false },
      ],
      desserts: [],
      categories: [],
      categoryIds: [],
      isValid: true,
      booleanValue: false,
      checkedAll: false,
      dialog: false
    };
  },
  created() {
    this.getCategory();
  },
  computed: {
        selectAll: {
            get: function () {
                return this.categories ? this.categoryIds.length === this.categories.length : false;
            },
            set: function (value) {
                const categoryIds = [];

                if (value) {
                    this.categories.forEach((item) => {
                        categoryIds.push(item._id);
                    });
                }

                this.categoryIds = categoryIds;
                this.afterChecked()
            }
        },
    },
  methods: {
    ...mapMutations({
      setCategoryList: "SET_CATEGORY_LIST",
    }),
    getCategory: async function () {
      const result = await categoriesApi.getCategory();
      if (result.data.code === 200) {
        this.categories = result.data.categories.docs;
        this.setCategoryList(this.categories); // set data vao store de update
      }
    },
    deleteItem: async function () {
      this.dialog = false
       const result = await categoriesApi.deleteCategory({
        categoryIds: this.categoryIds
        });
      if (result.data.code === 200) {
        this.$notificate.showMessage({ content: result.data.message, color: 'info' });
        this.getCategory();
      }
    },
    afterChecked() {
            if (this.categoryIds.length) {
      this.isValid = false;
    } else {
      this.isValid = true;
    }
    },
    seachItem() {
      alert(this.search)
    }
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
.v-data-footer{
    font-size: xx-large !important
}
</style>
<style scoped>
.v-text-field{
      width: 60px;
}
</style>
