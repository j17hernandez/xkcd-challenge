<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="(comic, index) in getComicRatings"
        :key="index"
        cols="12"
        lg="4"
        md="4"
        sm="12"
      >
        <CardComponent :item="comic"></CardComponent>
      </v-col>
      <v-col v-if="itemsRating.length === 0" cols="12" sm="12" md="12" lg="12">
        <v-row no-gutters>
          <v-spacer></v-spacer>
          <v-col>
            <v-img
              :src="require('~/assets/img/emptyList.png')"
              alt="Empty List"
              width="700px"
              contain
            />
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import CardComponent from '~/components/cardComponent.vue'
export default {
  name: 'RatingComics',
  components: {
    CardComponent,
  },
  computed: {
    ...mapState(['itemsRating']),
    getComicRatings() {
      return this.itemsRating
    },
  },
}
</script>
