<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      :mini-variant="miniVariant"
      width="200"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar clipped-left fixed app color="primary darken-2" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-tooltip bottom>
        <template #activator="{ attrs, on }">
          <v-btn
            icon
            href="https://github.com/j17hernandez/xkcd-challenge"
            target="_blank"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </template>
        <span>Go to repository</span>
      </v-tooltip>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span
        >By
        <a href="https://github.com/j17hernandez" target="_blank">
          j17hernandez</a
        >
        &copy; {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-history',
          title: 'Rating History',
          to: '/rating-comics',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Api Comics',
    }
  },
  methods: {
    goRepository() {
      document.window.location.href(
        'https://github.com/j17hernandez/xkcd-challenge',
        '_blank'
      )
    },
  },
}
</script>
