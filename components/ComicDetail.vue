<template>
  <v-container fluid>
    <v-card v-if="isVisible" style="overflow: hidden" max-width="100%">
      <v-card-title class="justify-center">
        <v-row no-gutters class="text-center">
          <v-col cols="12" md="12">
            <v-tooltip bottom>
              <template #activator="{ attrs, on }">
                <span v-bind="attrs" v-on="on">
                  {{ nameComic }}
                </span>
              </template>
              {{ itemComic.title }}
            </v-tooltip>
            <v-tooltip bottom>
              <template #activator="{ attrs, on }">
                <v-btn
                  class="float-right"
                  color="primary"
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-reload</v-icon>
                </v-btn>
              </template>
              <span>Reload Comic</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text class="p-0" style="padding: 0px">
        <v-img
          :src="itemComic.img"
          :alt="itemComic.title"
          :lazy-src="require('assets/img/jar-loading.gif')"
          style="border-radius: inherit"
          contain
          width="100%"
          height="400px"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-rating
          v-model="rating"
          background-color="grey"
          color="warning"
          empty-icon="mdi-star-outline"
          full-icon="mdi-star"
          half-icon="mdi-star-half-full"
          half-increments
          hover
          length="5"
          size="50"
        ></v-rating>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import GlobalMixin from '@/mixins/global'
export default {
  name: 'ComicDetail',
  mixins: [GlobalMixin],
  data() {
    return {
      itemComic: null,
      rating: null,
    }
  },
  computed: {
    nameComic() {
      return this.itemComic.title.length > 22
        ? this.itemComic.title.substr(0, 22).concat('...')
        : this.itemComic.title
    },
    isVisible() {
      let status = false
      if (this.itemComic !== undefined && this.itemComic !== null) {
        status = true
      }
      return status
    },
  },
  created() {
    this.getDataComic()
  },
  methods: {
    ...mapActions(['setNumberMaxComic', 'addItemRating']),
    // Función para obtener el último comic
    async getDataComic() {
      await this.$list('/info.0.json')
        .then((resp) => {
          this.itemComic = resp.data
          const number = resp.data.num
          this.setNumberMaxComic(number)
          this.getRandomComic()
        })
        .catch((err) => {
          this.$error(err)
        })
    },
    async getRandomComic() {
      const numberRandom = this.$getNumberRandom()
      const numberRandomValided = await this.$validateNumberRandom(numberRandom)
      this.$list(`/${numberRandomValided}/info.0.json`)
        .then((resp) => {
          this.itemComic = resp.data
        })
        .catch((err) => {
          this.$error(err)
        })
    },
  },
}
</script>
