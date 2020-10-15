<template>
  <img
    class="spinning"
    alt="logo"
    src="/logos/logo_blu.png"
    :style="logoStyle"
  />
</template>

<script>
export default {
  name: 'RotatingLogo',
  computed: {
    logoStyle() {
      return this.$vuetify.breakpoint.mobile
        ? 'max-width: 90%'
        : 'max-width: 40%'
    },
  },
}
</script>

<style>
.spinning {
  animation-name: spin;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
