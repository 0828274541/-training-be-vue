<template>
  <v-container id="book-list" fluid tag="section">
    <h1 class="text-center">Book List</h1>

    <v-row>
      <v-col class="text-left">
        <v-btn id="myButton" color="primary" class="mb-5" to="/books/add"
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
              id="deleteBook"
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
        :items="books"
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
                  v-model="bookIds"
                  @change="afterChecked"
                />
              </td>
              <td>{{ item.description }}</td>
              <td>{{ item.author }}</td>
              <td><v-btn
      color="primary"
      dark
      @click.stop="showCover(item._id)"
    >
      Open Image
    </v-btn>

    </td>
              <td v-if="item.owner">{{ item.owner.username }}</td>
              <td v-else> null </td>
              <td v-if="item.category">{{ item.category.title }}</td>
              <td v-else> null </td>
              <td>
                <v-btn
                  color="success"
                  class="px-1 ml-1"
                  fab
                  x-small
                  :to="{
                    name: 'BookUpdate',
                    params: { bookId: item._id },
                  }"
                  ><v-icon>mdi-pencil</v-icon></v-btn
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog
      v-model="dialog2"
      max-width="900"
    >
      <v-card>
             <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title>
        <div >
     <img  v-for="item in urlImg"  :src="'http://localhost:3000/'+item" width="200" height="200" style="padding: 10px"/>

            </div>
          <v-btn
            color="green darken-1"
            right--text
            @click="dialog2 = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";

const { booksApi } = require("../../../apis");

export default {
  name: "BookList",

  data() {
    return {
      headers: [
        {
          text: "dsada",
          align: "start",
          sortable: false,
          value: "checkedAll",
        },
        { text: "Description", value: "description" },
        { text: "Author", value: "author" },
        { text: "Cover", value: "cover", sortable: false },
        { text: "Owner", value: "owner", sortable: false },
        { text: "Category", value: "category", sortable: false },
        { text: "Action", value: "action", sortable: false },
      ],
      dialog: false,
      dialog2: false,
      search: "",
      books: [],
      bookIds: [],
      isValid: true,
      booleanValue: false,
      checkedAll: false,
      limit: 5,
      page: 1,
      totalPassengers: 0,
      options: {},
      sortBy: "_id",
      sortDesc: "-",
      numberOfPages: 0,
      urlImg: []
    };
  },
  mounted() {
    this.getBook();
  },
  watch: {
    options: {
      handler(newValue) {
        this.page = newValue.page;
        this.limit = newValue.itemsPerPage;
        this.sortBy = newValue.sortBy[0] || "_id";
        this.sortDesc = newValue.sortDesc[0] === false ? "" : "-";
        this.getBook();
      },
    },
    deep: true,
  },
  computed: {
    selectAll: {
      get: function () {
        return this.books ? this.bookIds.length === this.books.length : false;
      },
      set: function (value) {
        const bookIds = [];
        if (value) {
          this.books.forEach((item) => {
            bookIds.push(item._id);
          });
        }
        this.bookIds = bookIds;
        this.afterChecked();
      },
    },
  },
  methods: {
    ...mapMutations({
      setBookList: "SET_BOOK_LIST",
    }),
    getBook: async function () {
      const result = await booksApi.paging({
        search: this.search.trim(),
        page: this.page,
        limit: this.limit,
        sort_column: this.sortBy,
        sort_direction: this.sortDesc,
      });
      if (result.data.code === 200) {
        const {
 docs: books, limit, page, totalDocs
} = result.data.books;
        if (books.length) {
          this.page = page;
          this.numberOfPages = limit;
          this.totalPassengers = totalDocs;
          this.books = books;
          console.log(this.books.category)
          this.setBookList(this.books); // set data vao store de update
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
      const result = await booksApi.deleteBook({
        bookIds: this.bookIds,
      });
      if (result.data.code === 200) {
        this.$notificate.showMessage({
          content: result.data.message,
          color: "info",
        });
        this.getBook()
      }
    },
    afterChecked() {
      if (this.bookIds.length) {
        this.isValid = false;
      } else {
        this.isValid = true;
      }
    },
    seachItem() {
      this.page = 1;
      this.getBook();
    },
    showCover(val) {
      this.urlImg = []
      this.dialog2 = true;
      this.books.forEach((item) => {
         if (item._id === val) {
           this.urlImg = item.cover
           }
           })
      console.log(this.urlImg)
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
.v-data-footer {
  font-size: xx-large !important;
}
</style>
<style scoped>
.v-text-field {
  width: 60px;
}
</style>
