<template>
  <v-data-table
    mx-auto
    :headers="headers"
    :items="horarios"
    :options="options"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td class="text-xs-right">{{ props.item.Diadasemana}}</td>
      <td class="text-xs-right">{{ props.item.Abertura }}</td>
      <td class="text-xs-right">{{ props.item.Fechamento }}</td>
    </template>
  </v-data-table>
</template>
<script>
export default {
    props:['horarios'],
  data() {
    return {
      mini: true,
      options: {
        itemsPerPage: 8,
      },
      headers: [
        {
          text: "Dia da Semana",
          align: "left",
          sortable: false,
          value: "Diadasemana"
        },
        { text: "Início", value: "Abertura"},
        { text: "Fim", value:"Fechamento"},
      ],
    };
  },
};
</script>