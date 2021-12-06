<template>
  <div>
    <content-component :horarios="horarios" />
    <bottom />
  </div>
</template>

<script>
import bottom from "../components/Bottom.vue";
import ContentComponent from "../components/Horarios/ContentHorarios.vue";
export default {
  components: { bottom, ContentComponent },
  data: () => ({
    drawer: false,
    group: null,
  }),
  computed: {
    horarios() {
      console.log(this.$store.getters.gethorarios);
      return this.$store.getters.gethorarios;
    },
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>