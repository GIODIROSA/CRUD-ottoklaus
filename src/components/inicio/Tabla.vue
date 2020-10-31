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
      <div v-if="formAgregar">
        <CrearProducto v-if="add" />
      </div>
      <!-- <EditarProducto :productos="productos" /> -->

      <!-- EDITAR PRODUCTO -->
      <div v-if="!formAgregar">
        <v-chip class="ma-2" color="success" label text-color="white">
          <v-icon left>
            mdi-label
          </v-icon>
          EDITAR PRODUCTO
        </v-chip>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="juguetes.codigo" label="Codigo"></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="juguetes.nombre" label="Nombre"></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="juguetes.stock" label="Stock"></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="juguetes.precio" label="Precio"></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-btn color="warning">
              EDITAR
            </v-btn>
          </v-col>
        </v-row>
        <!--FINAL EDITAR PRODUCTO -->
      </div>

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
// import EditarProducto from "@/components/inicio/EditarProducto.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "Tabla",
  props: ["productos"],
  components: {
    CrearProducto,
    // EditarProducto,
  },
  data() {
    return {
      snackbar: false,
      mensaje: "",
      formAgregar: true,
      productoAEditar: {
        codigo: "",
        nombre: "",
        stock: "",
        precio: "",
      },
       juguetes: {
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
    editar(id){
      this.formAgregar= false;
      console.log(id)
     
      
    }
    // editar(idProducto) {
    //   let productoJuguete = this.productos.find(
    //     (prod) => prod.id == idProducto
    //   );
    //   this.productoAEditar.codigo = producto.data.codigo;
    //   this.productoAEditar.nombre = producto.data.nombre;
    //   this.productoAEditar.stock = producto.data.stock;
    //   this.productoAeditar.id = producto.id;
    // },
  },
};
</script>

<style></style>
