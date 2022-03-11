<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="6" md="6" sm="12">
        <ComicDetail></ComicDetail>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ComicDetail from '@/components/ComicDetail.vue'
export default {
  name: 'IndexPage',
  components: {
    ComicDetail,
  },
}
</script>
