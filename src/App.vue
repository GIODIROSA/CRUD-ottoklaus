<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  data: () => ({
    //
  }),//final de data
  created () {
    this.obtenerListadoProductos();
  },
  methods: {
    ...mapActions(['obtenerListadoProductos'])
  },
};
</script>

