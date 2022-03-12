<template>
  <v-container>
    <v-card style="border-radius: 20px; overflow: hidden" max-width="100%">
      <v-card-title class="d-flex justify-center">
        <v-row no-gutters class="text-left">
          <v-col cols="12" md="12">
            <v-tooltip bottom>
              <template #activator="{ attrs, on }">
                <h3 class="text-center" v-bind="attrs" v-on="on">
                  {{
                    item.title.length > 22
                      ? item.title.substr(0, 22).concat('...')
                      : item.title
                  }}
                </h3>
              </template>
              {{ item.title }}
            </v-tooltip>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text class="p-0" style="padding: 0px">
        <v-img
          :src="item.img"
          lazy-src="~/assets/img/jar-loading.gif"
          :alt="item.alt"
          style="border-radius: inherit"
          class="image"
          contain
          width="330px"
          height="330px"
        />
      </v-card-text>
      <v-card-actions>
        <v-rating
          :value="item.rating"
          disabled
          background-color="grey"
          color="warning"
          empty-icon="mdi-star-outline"
          full-icon="mdi-star"
          half-icon="mdi-star-half-full"
          half-increments
          length="5"
          size="45"
        ></v-rating>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'CardComic',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
