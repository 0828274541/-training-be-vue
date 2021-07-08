<template>
  <v-app id="inspire">
    <v-main>
      <v-container id="aaaaaa">
        <v-row class="justify content" style="margin-top: 30px">
          <v-col cols="4">
            <div id="slide" v-if="book.cover.length">
              <carousel :items="1" :loop="true" :autoplay="true" :nav="false">
                <img
                  v-for="item in book.cover"
                  :key="item"
                  :src="'https://training-be-node.herokuapp.com/' + item"
                />
              </carousel>
            </div>
            <div v-else>
              <v-img
                src="https://training-be-node.herokuapp.com/public/covers/noimg.jpg"
              ></v-img>
            </div>
          </v-col>
          <v-col>
            <v-card-title class="pb-0">Tiêu đề: {{ book.title }}</v-card-title>
            <v-card-title class="pb-0">Tác giả: {{ book.author }}</v-card-title>
            <v-card-title class="pb-0"
              >Mô tả: {{ book.description }}</v-card-title
            >
            <v-card-title class="pb-0" v-if="book.owner"
              >Người đăng: {{ book.owner.username }}</v-card-title
            >
            <v-card-title class="pb-0" v-else>Người đăng: null</v-card-title>
            <v-card-title class="pb-0" v-if="book.category"
              >Danh mục: {{ book.category.title }}</v-card-title
            >
            <v-card-title class="pb-0" v-else>Danh mục: null</v-card-title>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center" style="padding: 20px">
          <v-btn rounded color="primary" dark to="/public/home"> HOME PAGE </v-btn>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import carousel from "vue-owl-carousel";

const { booksApi } = require("../../../apis");

export default {
  name: "Detail",
  components: { carousel },
  $_veeValidate: {
    validator: "new",
  },
  data: () => ({
    book: null,
    model: null,
  }),
  created: async function () {
    this.getBook();
  },
  methods: {
    async getBook() {
      const result = await booksApi.findByBookId({
        bookId: this.$route.params.bookId,
      });
      if (result.data.code === 200) {
        this.book = result.data.book[0];
      }
    },
  },
};
</script>
<style scoped>
.text-lg-h3.pt-4.pl-4 {
  background-color: bisque;
}
.row {
  background-color: bisque;
}
.aaaaaa {
  background-color: bisque;
}
.card.v-card {
  margin: 0;
  background-color: bisque;
}
.v-card__title {
  padding: 0;
}
</style>