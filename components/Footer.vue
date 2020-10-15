<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        icon
        rounded
        class="my-2"
      >
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Associazione FulcronGRV</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',

  data() {
    return {
      links: [
        {
          name: 'facebook',
          icon: 'fab fa-facebook-square',
          to: 'http://facebook.com/fulcrongrv',
        },
        {
          name: 'instagram',
          icon: 'fab fa-instagram',
          to: 'http://instagram.com/fulcrongrv',
        },
        {
          name: 'youtube',
          icon: 'fab fa-youtube',
          to: 'https://www.youtube.com/channel/UCcFUnolPnHeIUd8Heu-_kWA',
        },
        {
          name: 'telegram',
          icon: 'fab fa-telegram-plane',
          to: 'https://t.me/FulcronGRV',
        },
        {
          name: 'whatsapp',
          icon: 'fab fa-whatsapp',
          to: 'https://chat.whatsapp.com/8PjZxAAbWXvAHVdMGpukLn',
        },
      ],
    }
  },
}
</script>

<style></style>
