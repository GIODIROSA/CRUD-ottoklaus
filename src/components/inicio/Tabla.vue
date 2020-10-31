<template>
  <div>
    <v-container>
    <h1 class="tituloSistemaInventario display-3 font-weight-light text-center py-10">Sistema de inventario Otto Klaus</h1>
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
                  @click="
                    editar(
                      producto.id,
                      producto.data.codigo,
                      producto.data.nombre,
                      producto.data.stock,
                      producto.data.precio
                    )
                  "
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
      <v-btn dark class="my-5" color="purple lighten-3"  block @click="showAdd" depressed>
        <span v-if="!add">Agregar Producto</span>
        <span v-if="add">Quitar Formulario</span>
      </v-btn>
      <div v-if="formAgregar">
        <CrearProducto v-if="add" />
      </div>

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
            <v-text-field
              v-model="juguetes.data.codigo"
              label="Codigo"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="juguetes.data.nombre"
              label="Nombre"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="juguetes.data.stock" label="Stock"></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="juguetes.data.precio"
              label="Precio"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-btn color="warning" @click="upJuguete">
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
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "Tabla",
  props: ["productos"],
  components: {
    CrearProducto,
  },
  data() {
    return {
      snackbar: false,
      mensaje: "",
      formAgregar: true,

      juguetes: {
        data: {
          codigo: "",
          nombre: "",
          stock: "",
          precio: "",
        },
      },
    };
  },
  computed: {
    ...mapState(["add"]),
  },
  methods: {
    ...mapActions(["editarProducto"]),
    ...mapMutations(["MostrarAgregar", "MostrarEditar"]),

    upJuguete() {
      this.editarProducto(this.juguetes);
    },
    borrar(id) {
      this.$store.dispatch("eliminarjuguete", id);
      (this.snackbar = true),
        (this.mensaje = "Haz borrado un item del inventario");
    },
    showAdd() {
      this.MostrarAgregar();
    },
    editar(id, codigo, nombre, stock, precio) {
      this.formAgregar = false;
      this.juguetes.id = id;
      this.juguetes.data.codigo = codigo;
      this.juguetes.data.nombre = nombre;
      this.juguetes.data.stock = stock;
      this.juguetes.data.precio = precio;

      console.log(id);
      console.log(codigo);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
