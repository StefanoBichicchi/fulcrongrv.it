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
    <nuxt-child
      v-touch="{
        left: () => swipe('left'),
        right: () => swipe('right'),
      }"
    ></nuxt-child>
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

  methods: {
    swipe(direction) {
      let currentPath = this.$nuxt.$route.path.split('/')[2]
      let currentIndexPath = this.tabs.indexOf(currentPath)

      console.log(currentPath, currentIndexPath)

      if (direction === 'left') {
        if (currentIndexPath === 3) return
        else {
          this.$router.push({
            path: '/sinfonia/' + this.tabs[currentIndexPath + 1],
          })
        }
        return
      }

      if (direction === 'right') {
        if (currentIndexPath === 0) return
        else {
          this.$router.push({
            path: '/sinfonia/' + this.tabs[currentIndexPath - 1],
          })
        }
        return
      }
    },
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
