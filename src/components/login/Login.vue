<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="usuario" type="text" placeholder="Usuario" />
      <input v-model="contrasena" type="password" placeholder="Contraseña" />
      <v-btn type="submit" dark depressed color="indigo accent-2">
        Acceder
      </v-btn>
    </form>

    <v-btn @click="logInGoogle" dark depressed color="blue accent-1">
      Logeate con Gmail
    </v-btn>

    <pre>
      {{ $data }}
    </pre>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      usuario: "",
      contrasena: "",
    };
  }, //final data
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.contrasena)
        .then(
          (user) => {
            alert("Usuario Conectado"), this.$router.replace("inicio");
          },
          (error) => console.error(error)
        );
    }, //final login
    logInGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result);
          this.$router.replace("inicio");

          let user = {
            name: result.user.displayName,
            photoURL: result.user.providerData[0].photoURL,
            email: result.user.email,
          };
          this.createdUser(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }, //final log in google
    createdUser(user) {
      firebase
        .firestore()
        .collection("usuarios")
        .add(user);
    },
  },
};
</script>

<style scoped>
div {
  padding: 150px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

form > * {
  display: block;
}
</style>
