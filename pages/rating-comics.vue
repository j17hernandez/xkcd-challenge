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
        <CardComic :item="comic"></CardComic>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import CardComic from '@/components/cardComic.vue'
export default {
  name: 'RatingComics',
  components: {
    CardComic,
  },
  computed: {
    ...mapState(['itemsRating']),
    getComicRatings() {
      return this.itemsRating
    },
  },
}
</script>
