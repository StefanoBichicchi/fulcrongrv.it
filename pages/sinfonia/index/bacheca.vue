<template>
  <v-container fluid>
    <v-row
      align="start"
      align-content="center"
      justify-sm="center"
      justify-md="center"
      justify-lg="start"
    >
      <v-col cols="12">
        <h1 class="fulcron-font text-center" style="font-size: 7vh">Bacheca</h1>
        <h1 class="fulcron-font text-center subtitle">
          Rimani aggiornato sul mondo di Fulcron
        </h1>
      </v-col>
      <v-col v-for="post in posts" :key="post.title" sm="12" md="6" lg="4">
        <v-card outlined shaped flat>
          <v-img v-if="post.image" :src="post.image" height="200"></v-img>
          <v-card-title>{{ post.title }}</v-card-title>
          <v-card-text class="body-1">
            <p v-html="post.text"></p>
            <p class="text-right">
              Pubblicato il:
              {{ $moment(post.created_at).format('DD/MM/YYYY') }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-chip v-for="tag in post.tag" :key="tag">
              {{ tag }}
            </v-chip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    return { posts: await $axios.$get('/api/posts') }
  },

  head() {
    return {
      title: 'Bacheca',
    }
  },
}
</script>

<style></style>
