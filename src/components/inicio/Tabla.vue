<template>
  <div>
    <h1>probando la conexion</h1>
    <v-container>
      <v-simple-table class="tabla" fixed-header>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Codigo</th>
              <th class="text-left">Nombre</th>
              <th class="text-left">Stock</th>
              <th class="text-left">Precio</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="producto in productos" :key="producto.id">
              <td>{{ producto.id }}</td>
              <td>{{ producto.data.nombre }}</td>
              <td>{{ producto.data.stock }}</td>
              <td>$ {{ producto.data.precio }} CLP</td>
              <td>
                <v-btn
                  color="primary"
                  small
                  fab
                  dark
                  @click.stop="dialog = true"
                  @click="editar(producto.id)"
                >
                  <v-icon dark> mdi-pencil </v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  small
                  color="red"
                  @click="borrar(producto.id)"
                >
                  <v-icon dark> mdi-delete </v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Tabla",
  methods: {
    borrar(id) {
      this.$store.dispatch("eliminarjuguete", id);
    },
  },

  computed: {
    ...mapState(["productos"]),
  },
};
</script>

<style></style>


