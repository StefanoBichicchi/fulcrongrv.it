<template>
  <div>
    <v-tabs v-model="tabState" centered color="secondary" grow>
      <v-tabs-slider color="secondary"></v-tabs-slider>

      <v-tab
        v-for="(tab, index) in tabs"
        :key="tab"
        color="accent"
        :to="'/sinfonia/' + tabs[index]"
        nuxt
      >
        {{ tab }}
      </v-tab>
    </v-tabs>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabState: false,
      tabs: ['regolamento', 'ambientazione', 'bacheca'],
    }
  },

  mounted() {
    if (this.$nuxt.$route.path === '/sinfonia')
      this.$router.push({
        path: '/sinfonia/ambientazione',
      })
  },
}
</script>

<style></style>
