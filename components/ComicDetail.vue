<template>
  <v-container v-if="isVisible" class="text-center justify-center contenedor">
    <v-card-title>
      <v-row no-gutters class="text-center">
        <v-col cols="12" md="8" sm="12">
          <v-tooltip bottom>
            <template #activator="{ attrs, on }">
              <h3 class="float-left" v-bind="attrs" v-on="on">
                {{ nameComic }}
              </h3>
            </template>
            {{ itemComic.title }}
          </v-tooltip>
        </v-col>
        <v-col cols="12" md="4" sm="12">
          <v-tooltip bottom>
            <template #activator="{ attrs, on }">
              <v-btn
                :class="floatRight"
                color="primary"
                outlined
                v-bind="attrs"
                v-on="on"
                @click="getRandomComic"
              >
                Random
              </v-btn>
            </template>
            <span>Comic Random</span>
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
import GlobalMixin from '~/mixins/GlobalMixin'
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
    // Función para acortar el título en caso de tener más de 22 carácteres
    nameComic() {
      return this.itemComic.title.length > 22
        ? this.itemComic.title.substr(0, 22).concat('...')
        : this.itemComic.title
    },
    // Computada para determinar si la data del comic existe
    isVisible() {
      let status = false
      if (this.itemComic !== undefined && this.itemComic !== null) {
        status = true
      }
      return status
    },
    /* Computada que retorna una clase para el botón
       de mostrar un comic aleatorio 
    */
    floatRight() {
      let nameClass
      switch (this.$vuetify.breakpoint.name) {
        case 'sm':
        case 'xs':
          nameClass = 'float-left'
          break
        default:
          nameClass = 'float-right'
          break
      }
      return nameClass
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
    // Función para generar el número aleatorio y traer el comic
    async getRandomComic() {
      const numberRandom = this.$getNumberRandom()
      const numberRandomValided = await this.$validateNumberRandom(numberRandom)
      await this.getList(numberRandomValided)
    },
    // Función para traer el comic aleatorio
    async getList(numberPath) {
      try {
        const resp = await this.$list(`/${numberPath}/info.0.json`)
        this.itemComic = { rating: 0, ...resp.data }
      } catch (err) {
        this.$error(err)
      }
    },
    // Función para calificar el comic
    addComicRating() {
      this.addItem(this.itemComic)
    },
  },
}
</script>
<style scoped>
.contenedor {
  border: 1px solid !important;
  border-radius: 20px !important;
}
</style>
