<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="primary">
        <strong class="subheading">Seguici sui social!</strong>

        <v-spacer></v-spacer>

        <div v-for="link in links" :key="link.name">
          <v-btn class="mx-4" dark text :href="link.to">
            {{ link.name }}
          </v-btn>
        </div>
      </v-card-title>

      <v-card-text class="secondary py-2 white--text text-center">
        {{ new Date().getFullYear() }} —
        <strong>Associazione FulcronGRV</strong>
      </v-card-text>
    </v-card>
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
          icon: 'fa-facebook-square',
          to: 'http://facebook.com/fulcrongrv',
        },
        {
          name: 'instagram',
          icon: 'fa-instagram',
          to: 'http://instagram.com/fulcrongrv',
        },
        {
          name: 'youtube',
          icon: 'fa-youtube',
          to: 'https://www.youtube.com/channel/UCcFUnolPnHeIUd8Heu-_kWA',
        },
        {
          name: 'telegram',
          icon: 'fa-telegram-plane',
          to: 'https://t.me/FulcronGRV',
        },
        {
          name: 'whatsapp',
          icon: 'fa-whatsapp',
          to: 'https://chat.whatsapp.com/8PjZxAAbWXvAHVdMGpukLn',
        },
      ],
    }
  },
}
</script>

<style></style>
