<template>
  <v-container fluid>
    <v-row align="start" justify-sm="center" justify-lg="start">
      <v-col cols="12 ">
        <h1 class="fulcron-font text-center" style="font-size: 7vh">Oneshot</h1>
      </v-col>
      <v-col
        sm="12"
        md="6"
        lg="4"
        v-for="oneshot in oneshots"
        :key="oneshot.title"
      >
        <v-card flat outlined rounded>
          <v-img alt="image" :src="oneshot.img" height="300"></v-img>
          <v-card-title class="fulcron-font">{{ oneshot.title }}</v-card-title>
          <v-card-subtitle>{{
            $moment(oneshot.date).format('DD/MM/YYYY')
          }}</v-card-subtitle>
          <v-card-text class="body-1">
            <p>
              {{ oneshot.description }}
            </p>
            <p>
              <v-chip
                class="mr-2"
                color="secondary"
                v-for="type in oneshot.type"
                :key="type"
                >{{ type }}</v-chip
              >
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn text link :href="oneshot.photo">Gallery</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    return { oneshots: await $axios.$get('/api/oneshot') }
  },
}
</script>

<style></style>
