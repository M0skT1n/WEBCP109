<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-app-bar color="purple" purple>
          <div class="d-flex align-center">
            <h2>
              <router-link style="color: #ffffff; text-decoration: none" to="/"
                >PetShop Goes</router-link
              >
            </h2>
          </div>
          <div style="margin-left: 5%">
            <router-link
              style="color: #ffffff; text-decoration: none; margin-left: 6%"
              to="/Horarios"
              >Horários</router-link
            >
            <router-link
              style="color: #ffffff; text-decoration: none; margin-left: 6%"
              to="/Servicos"
              >Serviços</router-link
            >
            <router-link
              style="color: #ffffff; text-decoration: none; margin-left: 6%"
              to="/Contatos"
              >Contatos</router-link
            >
            <router-link
              style="color: #ffffff; text-decoration: none; margin-left: 6%"
              to="/Dono"
              >Dono</router-link
            >
            <router-link
              style="color: #ffffff; text-decoration: none; margin-left: 6%"
              to="/Cidades"
              >Cidades</router-link
            >
          </div>

          <v-spacer></v-spacer>
        </v-app-bar>
      </v-row>
      <v-row>
        <v-main>
          <Drawer />
          <router-view />
        </v-main>
      </v-row>
      <v-row>
        <FooterComponent />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import FooterComponent from "./components/Footer.vue";
import Drawer from "./components/Drawer.vue";
export default {
  name: "App",
  components: { FooterComponent, Drawer },

  data: () => ({
    //
  }),
};
</script>
