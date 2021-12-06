<template>
  <v-card class="mx-auto" max-width="1200">
    <v-container>
      <v-row>
        <h2>Horários:</h2>
      </v-row>
      <v-row>
        <p>Estes são nossos horários de funcionamento durante a semana.</p>
      </v-row>
      <v-row>
        <tabela-horarios :horarios="horarios" />
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import TabelaHorarios from "./TabelaHorarios.vue";
export default {
  name: "ContentComponent",
  props: ["horarios"],
  components: { TabelaHorarios },
  data() {
    return {};
  },
};
</script>