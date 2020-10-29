<template>
  <div>
    <h1>CUANDO ME LOGUEO ENTRO AQUI</h1>

    <!-- tabla -->
    <Tabla />

    <!-- boton de logOut -->
    <a href="#" @click="logOut">LogOut</a>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";
import Tabla from '@/components/inicio/Tabla.vue'
export default {
  name: "Inicio",

  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    },
  }, //final de methods
  computed: {}, //final de data
  components: {
    Tabla,
  },
};
</script>
