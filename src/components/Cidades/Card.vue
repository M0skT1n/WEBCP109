<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="500">
    <template slot="progress">
      <v-progress-linear
        color="purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-card-title>{{Cidades.nome}}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <div class="grey--text ms-4">{{Cidades.UF.nome}} - {{Cidades.UF.sigla}}</div>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

  </v-card>
</template>
<script>
export default {
  props:['Cidades'],
  data: () => ({
    loading: false,
    selection: 1
  }),

  methods: {
    request() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>