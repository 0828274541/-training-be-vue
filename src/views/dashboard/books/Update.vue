<template>
  <v-container id="book-update" fluid tag="section">
    <base-v-component heading="Books" link="components/books" />
    <v-col class="text-left">
      <v-btn id="myButton" color="primary" class="mb-5" to="/books/list"
        >CLick to view books list!</v-btn
      >
    </v-col>
    <v-row>
      <v-col cols="12" md="12">
        <base-material-card
          color="success"
          icon="mdi-email"
          title="BOOK UPDATE FORM"
          class="px-5 py-3"
        >
          <form ref="bookForm" class="mt-5" id="app" data-vv-scope="form-1">
            <v-text-field
              color="secondary"
              v-model="bookUpdate.title"
              v-validate="'required'"
              :error-messages="errors.collect('form-1.required')"
              data-vv-name="required"
              name="title"
              label="title..."
              prepend-icon="mdi-face"
            />
            <v-text-field
              color="secondary"
              v-model="bookUpdate.description"
              v-validate="'required'"
              :error-messages="errors.collect('form-1.required')"
              data-vv-name="required"
              name="description"
              label="description..."
              prepend-icon="mdi-face-woman "
            />

            <v-text-field
              color="secondary"
              v-model="bookUpdate.author"
              v-validate="'required'"
              :error-messages="errors.collect('form-1.required')"
              data-vv-name="required"
              name="author"
              label="author..."
              prepend-icon="mdi-account"
            />

            <v-select
              class="mb-8"
              color="secondary"
              v-model="bookUpdate.category._id"
              v-validate="'required'"
              :items="categories"
              item-text="title"
              item-value="_id"
              label="category"
              :error-messages="errors.collect('form-1.required')"
              data-vv-name="required"
            ></v-select>
            <v-row>
              <input
                style="padding-left: 12px"
                ref="files"
                type="file"
                id="cover"
                @change="onFileChange"
                name="cover"
                accept="image/*"
                multiple
              />
            </v-row>
            <v-row v-if="url.length">
              <v-col cols="2" v-for="item in url">
                <img
                  :src="item"
                  width="200px"
                  height="200px"
                  style="padding: 10px"
                />
              </v-col>
            </v-row>
            <v-row v-else-if="bookUpdate.cover.length">
              <v-col cols="2" v-for="item in bookUpdate.cover" :key="item">
                <img
                  :src="'https://nodejs2021123456.herokuapp.com/' + item"
                  width="200px"
                  height="200px"
                  style="padding: 10px"
                />
              </v-col>
            </v-row>
            <v-row v-else>
              <v-col cols="2">
                <v-img
                  src="https://nodejs2021123456.herokuapp.com/public/covers/noimg.jpg"
                  width="200px"
                  height="200px"
                  style="padding: 10px"
                >
                </v-img>
              </v-col>
            </v-row>
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
const { booksApi, categoriesApi } = require("../../../apis");

export default {
  name: "DashboardFormsRegularForms",

  $_veeValidate: {
    validator: "new",
  },
  data: () => ({
    bookUpdate: null,
    categories: [],
    url: [],
    files: [],
  }),
  created: async function () {
    this.getBookUpdate();
    this.getCategory();
  },
  methods: {
    validateForm(scope) {
      this.$validator.validateAll(scope).then(async (result) => {
        if (result) {
          this.files = this.$refs.files.files;
          const formData = new FormData();
          if (this.files) {
            for (const i of Object.keys(this.files)) {
              formData.append("cover", this.files[i]);
            }
          }
          formData.append("title", this.bookUpdate.title);
          formData.append("description", this.bookUpdate.description);
          formData.append("author", this.bookUpdate.author);
          formData.append("category", this.bookUpdate.category._id);

          const result2 = await booksApi.updateBook(
            this.bookUpdate._id,
            formData
          );
          if (result2.data.code === 200) {
            this.$notificate.showMessage({
              content: result2.data.message,
              color: "info",
            });
            this.$router.push("/books/list");
          } else {
            this.$notificate.showMessage({
              content: result2.data.message,
              color: "info",
            });
          }
        }
      });
    },
    async getCategory() {
      const result = await categoriesApi.getCategory();
      if (result.data.code === 200) {
        result.data.categories.docs.map((item) => this.categories.push({ title: item.title, _id: item._id }));
      }
      console.log(this.categories);
    },
    async getBookUpdate() {
      const result = await booksApi.findByBookId({
        bookId: this.$route.params.bookId,
      });
      if (result.data.code === 200) {
        this.bookUpdate = result.data.book[0];
      }
    },
    onFileChange(e) {
      this.url = [];
      const file = e.target.files;
      for (let i = 0; i < file.length; i++) {
        this.url.push(URL.createObjectURL(file[i]));
      }
    },
  },
};
</script>
