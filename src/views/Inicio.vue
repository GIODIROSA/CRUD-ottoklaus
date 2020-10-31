<template>
  <div>
    <!-- tabla -->
    <Tabla :productos="productos" />

    <!-- boton de logOut -->
    <v-container>
      <v-row>
        <v-col>
          <v-btn color="light-blue lighten-1" block>
            <a href="#" @click="logOut"
              ><span class="white--text">LogOut</span></a
            >
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";
import Tabla from "@/components/inicio/Tabla.vue";
import { mapState } from "vuex";

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
  components: {
    Tabla,
  },
  computed: {
    ...mapState(["productos"]),
  },
};
</script>
