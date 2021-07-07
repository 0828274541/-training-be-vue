<template>
  <v-main>
    <v-row justify="center">
      <div>
        <v-item-group>
          <v-container id="aaaaaa">
            <v-row class="row">
              <v-col v-for="item in books" :key="item" cols="12" md="4">
                <v-item>
                  <v-card class="mx-auto" min-width="300" height="450">
                    <v-img
                      v-if="item.cover.length"
                      class="white--text align-end"
                      height="240px"
                      :src="'https://nodejs2021123456.herokuapp.com/' + item.cover[0]"
                      @click="toDetail(item._id)"
                    >
                    </v-img>
                    <div v-else class="d-flex" justfy="center">
                      <v-img
                        class="white--text align-end"
                        height="240px"
                        src="https://nodejs2021123456.herokuapp.com/public/covers/noimg.jpg"
                        @click="toDetail(item._id)"
                      >
                      </v-img>
                    </div>

                    <v-card-title class="pb-0" style="height: 50px"
                      >Tiêu đề: {{ item.title }}
                    </v-card-title>
                    <v-card-title class="pb-0" style="height: 50px"
                      >Tác giả: {{ item.author }}
                    </v-card-title>
                    <v-card-title style="margin-top: 20px" class="d-flex justify-center">
                      <v-btn color="orange" text-center @click="toDetail(item._id)">
                        Chi tiết
                      </v-btn>
                    </v-card-title>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
            <v-row class="text-center" style="padding-bottom: 20px" justify="center">
              <v-pagination
                id="page"
                v-model="currentPage"
                :length="totalPages"
                @input="getListPaging"
                circle
              ></v-pagination>
            </v-row>
            <v-row v-show="data" class="justify-center">
              <p
                class="text-xl-h4 text-center font-weight-black"
                style="font-size: 50px; height:100%"
              >
                Ko tìm thấy kết quả
              </p>
            </v-row>
            <v-row class="d-flex justify-center" style="padding: 20px">
              <v-btn rounded color="primary" dark to="/public/home"> HOME PAGE </v-btn>
            </v-row>
          </v-container>
        </v-item-group>
      </div>
    </v-row>
  </v-main>
</template>

<script>
import { mapGetters } from "vuex";

const { booksApi } = require("../../apis");

export default {
  data() {
    return {
      books: [],
      limit: 6,
      totalPages: 0,
      currentPage: 0,
      searchItem: "",
      data: false
    };
  },
  computed: {
    ...mapGetters({
      searchItemStore: "GET_SEARCH"
    })
  },
  mounted: function() {
    this.searchItem = this.searchItemStore;
    this.getListPaging(this.searchItem);
  },
  methods: {
    async getListPaging(val) {
      const result = await booksApi.getBook({
        page: this.currentPage,
        limit: this.limit,
        keyword: val
      });
      if (result.data.code === 200) {
        this.books = result.data.books.docs;
        if (this.books.length) {
          this.totalPages = result.data.books.totalPages;
          this.currentPage = result.data.books.page;
          document.getElementById("page").style.display = "";
        } else {
          this.data = true;
          document.getElementById("page").style.display = "none";
        }
      }
    },
    toDetail(bookId) {
      this.$router.push({ path: `/public/detail/${bookId}` });
    }
  }
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
</style>
