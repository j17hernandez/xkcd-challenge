<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <ComicDetail></ComicDetail>
    </v-col>
  </v-row>
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
