<template>
  <div style="margin-bottom:2%;">
    <v-row>
      <v-col
        v-for="card in cards"
        :key="card.nome"
        cols="12"
        md="4"
        sm="6"
      >
        <Cards :servico="card"></Cards>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Cards from "../components/Cards/Cards";

export default {
  name: "Serviços",
  computed: {
    cards() {
      return this.$store.state.Cards;
    },
  },
  components: {
    Cards,
  },
  methods:{
    fetch(){
      console.log ("as")
    }
  }
};
</script>