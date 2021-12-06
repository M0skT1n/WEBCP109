<template>
  <v-app id="inspire">
    <v-main>
      <content-component />
    </v-main>
    <bottom />
  </v-app>
</template>

<script>
import bottom from "../components/Bottom.vue";
import ContentComponent from "../components/ContentComponent.vue";
export default {
  components: { bottom, ContentComponent },
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