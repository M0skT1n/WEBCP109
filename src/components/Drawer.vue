<template>
  <div id="inspire">
    <v-navigation-drawer v-model="drawer" bottom absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item :to="{ path: '/Horarios' }">
            <v-list-item-title>Horários</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/Servicos' }">
            <v-list-item-title>Serviços</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/Contatos' }">
            <v-list-item-title>Contatos</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/Dono' }">
            <v-list-item-title>Dono</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/Cidades' }">
            <v-list-item-title>Cidades</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
