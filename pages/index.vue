<template>
  <v-row justify="center" align="center" jus>
    <v-col cols="12"
      ><h1 class="text-center fulcron-font biggerh1">
        Benvenuto a Fulcron
      </h1></v-col
    >
    <RotatingLogo />
    <v-col cols="12">
      <h2 class="text-center fulcron-font biggerh2">
        Vivi la tua avventura, ora
      </h2>
      <h3 class="text-center fulcron-font text-fulcron-blue biggerh3">
        Scopri le magiche e vive terre di Fulcron
      </h3>
    </v-col>
  </v-row>
</template>

<script>
import RotatingLogo from '~/components/RotatingLogo'

export default {
  components: {
    RotatingLogo,
  },
}
</script>

<style scoped>
.biggerh1 {
  font-size: 6vh;
}

.biggerh2 {
  font-size: 4vh;
}

.biggerh3 {
  font-size: 3vh;
}
</style>
