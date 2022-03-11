<template>
  <v-container v-if="isVisible" class="text-center justify-center">
    <v-card-title>
      <v-row no-gutters class="text-center">
        <v-col cols="12" md="12">
          <v-tooltip bottom>
            <template #activator="{ attrs, on }">
              <h1 v-bind="attrs" v-on="on">
                {{ nameComic }}
              </h1>
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
                @click="getRandomComic"
              >
                <v-icon>mdi-reload</v-icon>
              </v-btn>
            </template>
            <span>Reload Comic</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <InnerImageZoom
        :src="itemComic.img"
        :zoom-src="itemComic.img"
        style="background-size: contain !important"
        move-type="drag"
        :zoom-scale="1"
        has-spacer
        zoom-preload
      ></InnerImageZoom>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-rating
        v-model="itemComic.rating"
        background-color="grey"
        color="warning"
        empty-icon="mdi-star-outline"
        full-icon="mdi-star"
        half-icon="mdi-star-half-full"
        half-increments
        hover
        length="5"
        size="45"
        @input="addComicRating"
      ></v-rating>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import InnerImageZoom from 'vue-inner-image-zoom'
import GlobalMixin from '@/mixins/global'
export default {
  name: 'ComicDetail',
  components: {
    InnerImageZoom,
  },
  mixins: [GlobalMixin],
  data() {
    return {
      itemComic: null,
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
    ...mapActions(['setNumberMaxComic', 'addItem']),
    // Función para obtener el último comic
    async getDataComic() {
      await this.$list('/info.0.json')
        .then((resp) => {
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
          this.itemComic = { rating: 0, ...resp.data }
        })
        .catch((err) => {
          this.$error(err)
        })
    },
    addComicRating() {
      this.addItem(this.itemComic)
    },
  },
}
</script>
