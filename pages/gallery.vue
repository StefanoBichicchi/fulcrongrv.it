<template>
  <v-container fluid>
    <v-row align="start" justify-sm="center" justify-lg="start">
      <v-col cols="12">
        <h1 class="fulcron-font text-center" style="font-size: 7vh">Gallery</h1>
      </v-col>
      <v-col sm="12" md="6" lg="4" v-for="album in albums" :key="album.title">
        <v-card flat outlined rounded>
          <v-img alt="image" :src="album.copertina" height="300"></v-img>
          <v-card-title class="fulcron-font">{{ album.name }}</v-card-title>
          <v-card-subtitle>{{
            $moment(album.date).format('DD/MM/YYYY')
          }}</v-card-subtitle>
          <v-card-text>
            <p>{{ album.luogoIG }} ({{ album.luogo }})</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn text link :href="'/api/foto' + album.photos">Vedi</v-btn>
            <v-btn text link :href="album.highQuality" v-if="album.highQuality"
              >Scarica in alta qualità</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    return { albums: await $axios.$get('/api/album') }
  },

  head() {
    return {
      title: 'Gallery',
    }
  },
}
</script>

<style></style>
