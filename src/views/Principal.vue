
<template>
  <v-app id="inspire">
    <system-bar/>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Clima São Paulo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Clima Brasília</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Clima Rio de Janeiro</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Clima Florianópolis</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
      <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <content-component/>
      <!--  -->
    </v-main>
    <footer-component/>
    <bottom/>
  </v-app>
</template>

<script>
import SystemBar from '../components/SystemBar.vue'
import FooterComponent from '../components/Footer.vue'
import bottom from '../components/Bottom.vue'
import ContentComponent from '../components/ContentComponent.vue'
  export default {
    components: {FooterComponent,SystemBar,bottom,ContentComponent},
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>