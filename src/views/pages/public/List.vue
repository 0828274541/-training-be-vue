<template>
  <v-row>
    <v-sheet rounded="lg">
      <!-- <div class="text-lg-h3 pt-4 pl-4">Example Heading</div> -->
      <div>
        <v-item-group>
          <v-container id="aaaaaa">
            <v-row class="row">
              <v-col
                v-for="item in books"
                :key="item"
                cols="12"
                md="4"
              >
                <v-item>
                  <v-card class="mx-auto" min-width="300" height="400">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                      <v-card-title>{{ item.title }}</v-card-title>
                    </v-img>

                    <v-card-title class="pb-0"> {{ item.title }} </v-card-title>

                    <v-card-title class="">
                      <div>{{ item.description }}</div>
                    </v-card-title>

                    <v-card-actions>
                      <v-btn color="orange" text> Share </v-btn>

                      <v-btn color="orange" text> Explore </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-item>
              </v-col>

            </v-row>
                          <v-row class="text-center" style="padding-bottom:20px" justify="center">
              <v-pagination
                v-model="currentPage"
                :length="totalPages"
                @input="getListPaging"
                circle
              ></v-pagination>
            </v-row>
          </v-container>
        </v-item-group>
      </div>
    </v-sheet>
  </v-row>
</template>


<script>
import eventBus from "../../../event-bus";

const { booksApi } = require("../../../apis");

export default {
  data() {
    return {
      books: [],
      limit: 6,
      totalPages: 0,
      currentPage: 0,
      categoryId: 0
    }
  },
  mounted() {
    eventBus.$on("click", async (data) => {
      this.categoryId = data
      this.currentPage = 1
      this.getListPaging()
    });
    this.getListPaging()
  },
  methods: {
    async getListPaging() {
      const result = await booksApi.getBook({
        categoryId: this.categoryId,
        page: this.currentPage,
        limit: this.limit,
      });
      if (result.data.code === 200) {
        this.books = result.data.books.docs
        this.totalPages = result.data.books.totalPages
        this.currentPage = result.data.books.page
      }
    }
  },
  destroyed() {
    eventBus.$off("click");
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
.aaaaaa{
  background-color: bisque;
}
</style>