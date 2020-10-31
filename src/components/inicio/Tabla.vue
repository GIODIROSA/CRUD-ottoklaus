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
              <td>{{ producto.data.codigo }}</td>
              <td>{{ producto.data.nombre }}</td>
              <td>{{ producto.data.stock }}</td>
              <td>$ {{ producto.data.precio }} CLP</td>
              <td>
                <v-btn
                  color="primary"
                  small
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
      <!-- AGREGAR PRODUCTO -->
      <v-btn @click="showAdd" depressed>
        <span v-if="!add">Agregar Producto</span>
        <span v-if="add">Quitar Formulario</span>
      </v-btn>
      <CrearProducto v-if="add" :editarPrueba="editarPrueba" />
      <EditarProducto :productos="productos" />
      <!-- SNACKBAR -->
      <v-snackbar v-model="snackbar">
        {{ mensaje }}
        <v-btn color="pink" text @click="snackbar = false">
          Close
        </v-btn>
      </v-snackbar>
      <!-- FINAL DE SNACKBAR -->
    </v-container>
  </div>
</template>

<script>
import CrearProducto from "@/components/inicio/CrearProducto.vue";
import EditarProducto from "@/components/inicio/EditarProducto.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "Tabla",
  props: ["productos"],
  components: {
    CrearProducto,
    EditarProducto,
  },
  data() {
    return {
      snackbar: false,
      mensaje: "",
      productoAEditar: {
        codigo: "",
        nombre: "",
        stock: "",
        precio: "",
      },
    };
  },
  computed: {
    ...mapState(["add"]),
  },
  methods: {
    ...mapMutations(["MostrarAgregar", "MostrarEditar"]),
    borrar(id) {
      this.$store.dispatch("eliminarjuguete", id);
      (this.snackbar = true),
        (this.mensaje = "Haz borrado un item del inventario");
    },
    showAdd() {
      this.MostrarAgregar();
    },
    editarPrueba() {
      alert("hola a todos");
    },
    editar(idProducto) {
      let productoJuguete = this.productos.find(
        (prod) => prod.id == idProducto
      );
      this.productoAEditar.codigo = producto.data.codigo;
      this.productoAEditar.nombre = producto.data.nombre;
      this.productoAEditar.stock = producto.data.stock;
      this.productoAeditar.id = producto.id;
    },
  },
};
</script>

<style></style>
