<template>
  <div class="navbar">
    <v-app-bar dense elevate-on-scroll flat color="primary" dark>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-if="$vuetify.breakpoint.mobile"
      ></v-app-bar-nav-icon>
      <v-spacer v-if="$vuetify.breakpoint.mobile" />
      <v-toolbar-title class="fulcron-font">{{ title }}</v-toolbar-title>
      <v-spacer />
      <div v-if="!$vuetify.breakpoint.mobile">
        <v-btn
          v-for="button in navButtons"
          :key="button.title"
          text
          nuxt
          :to="button.to"
        >
          <v-icon left v-if="button.icon">{{ button.icon }}</v-icon>
          {{ button.title }}
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      v-if="$vuetify.breakpoint.mobile"
      absolute
      app
      disable-resize-watcher
      disable-route-watcher
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title px-auto">
            FulcronGRV
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item
          v-for="button in navButtons"
          :key="button.title"
          link
          nuxt
          :to="button.to"
        >
          <v-list-item-icon>
            <v-icon>{{ button.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ button.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list></v-navigation-drawer
    >
  </div>
</template>

<script>
export default {
  name: 'NavBar',

  data() {
    return {
      title: 'FulcronGRV',

      drawer: false,

      navButtons: [
        {
          title: 'Home',
          to: '/',
          icon: 'fa-home',
        },
        {
          title: 'Chi siamo',
          to: '/who',
          icon: 'fa-hands-helping',
        },
        {
          title: 'La Sinfonia dei Sette',
          to: '/sinfonia',
          icon: 'fa-dice-d20',
        },
        {
          title: 'Oneshot',
          to: '/oneshot',
          icon: 'fa-calendar-day',
        },
        {
          title: 'Gallery',
          to: '/gallery',
          icon: 'fa-image',
        },
      ],
    }
  },
}
</script>

<style></style>
