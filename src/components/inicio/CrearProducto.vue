<template>
  <div>
    <v-form>
      <v-container>
        <v-chip class="ma-2" color="pink" label text-color="white">
          <v-icon left>
            mdi-label
          </v-icon>
          AGREGAR PRODUCTO
        </v-chip>
        <!-- AGREGAR PRODUCTO -->
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="juguetes.codigo"
              label="Codigo"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="juguetes.nombre"
              label="Nombre"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="juguetes.stock" label="Stock"></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="juguetes.precio"
              label="Precio"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-btn
              dark
              color="cyan darken-1"
              @click="agregarProducto(), ClearData()"
            >
              AGREGAR PRODUCTO
            </v-btn>
          </v-col>
        </v-row>
        <!-- FINAL AGREGAR PRODUCTO -->
      </v-container>
    </v-form>
    <!-- SNACKBAR -->
    <v-snackbar v-model="snackbar">
      {{ mensaje }}
      <v-btn color="pink" text @click="snackbar = false">
        CERRAR
      </v-btn>
    </v-snackbar>
    <!-- FINAL DE SNACKBAR -->
    <v-btn color="warning" @click="editarPrueba">
      prueba
    </v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CrearProducto",
  props: ["editarPrueba"],
  data() {
    return {
      juguetes: {
        codigo: "",
        nombre: "",
        stock: "",
        precio: "",
      },
      snackbar: false,
      mensaje: "",
      formAgregar: true,
    };
  }, //final de data
  methods: {
    ...mapActions(["adicionarProducto"]),
    agregarProducto() {
      this.adicionarProducto(this.juguetes);

      if (
        this.juguetes.codigo === "" ||
        this.juguetes.nombre === "" ||
        this.juguetes.stock === "" ||
        this.juguetes.precio === ""
      ) {
        console.log("Vacio");
        this.snackbar = true;
        this.mensaje = "El formulario esta vacio";
      } else {
        this.ClearData();
        this.snackbar = true;
        this.mensaje = "Se agrego un Producto";
      }
    },
    ClearData() {
      (this.juguetes.codigo = ""),
        (this.juguetes.nombre = ""),
        (this.juguetes.stock = ""),
        (this.juguetes.precio = "");
    },
    
  },
};
</script>

<style></style>
