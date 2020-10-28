<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="usuario" type="text" placeholder="Usuario" />
      <input v-model="contrasena" type="password" placeholder="Contraseña" />
      <input type="submit" value="Acceder" />
    </form>

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
