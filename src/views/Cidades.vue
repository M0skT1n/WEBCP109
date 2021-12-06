<template>
  <div style="margin-bottom: 2%; padding-top: 3%">
    <v-row class="mx-auto">
      <h2>Cidades que atuamos:</h2>
    </v-row>
    <v-row>
      <v-col v-for="card in Cidades" :key="card.nome" cols="12" md="4" sm="6">
        <Card :Cidades="card"></Card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Card from "../components/Cidades/Card";

export default {
  name: "Cidades",
  computed: {
    Cidades() {
      return this.$store.getters.getCidades;
    },
  },
  components: {
    Card,
  },
  methods: {
    fetch() {
      console.log("as");
    },
  },
  async created() {
    await this.$store.dispatch("fetchCidades");
  },
};
</script>