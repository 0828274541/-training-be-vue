<template v-for="n in 4">
  <v-col>
    <v-sheet min-height="80vh" rounded="lg">
      <div class="text-lg-h3 pt-4 pl-4">Example Heading</div>
      <div>
        <v-item-group>
          <v-container>
            <v-row>
              <v-col v-for="n in 6" :key="n" cols="12" md="4">
                <v-item>
                  <v-card class="mx-auto" max-width="400">
                    <v-img
                      class="white--text align-end"
                      height="200px"
                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                      <v-card-title>Top 10 Australian beaches</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

                    <v-card-text class="text--primary">
                      <div>Whitehaven Beach</div>

                      <div>Whitsunday Island, Whitsunday Islands</div>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn color="orange" text> Share </v-btn>

                      <v-btn color="orange" text> Explore </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-container>
        </v-item-group>
      </div>
    </v-sheet>
  </v-col>
</template>


<script>
export default {};
</script>