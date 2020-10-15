<template>
  <v-app>
    <NavBar />
    <v-main :class="customStyle">
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from '~/components/NavBar'
import Footer from '~/components/Footer'
export default {
  data() {
    return {}
  },

  computed: {
    customStyle() {
      if (this.$nuxt.$route.path === '/') {
        return 'index-bg'
      } else {
        return 'bluette'
      }
    },
  },

  components: {
    NavBar,
    Footer,
  },

  head() {
    return {
      title: 'Home',
    }
  },
}
</script>

<style>
.index-bg {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background: url('/backgrounds/forest_op_comp.jpg') no-repeat fixed center
    center;
}

.bluette {
  background-color: #f0f6ff;
}
</style>
