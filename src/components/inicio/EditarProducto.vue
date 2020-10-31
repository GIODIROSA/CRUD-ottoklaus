<template>
  <div>
    <v-chip class="ma-2" color="pink" label text-color="white">
      <v-icon left>
        mdi-label
      </v-icon>
      EDITAR PRODUCTO
    </v-chip>
    <v-container>
      <!-- EDITAR PRODUCTO -->
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
          <v-btn color="warning" @click="actualizarJuguete">
            EDITAR
          </v-btn>
        </v-col>
      </v-row>
      <!--FINAL EDITAR PRODUCTO -->
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "EditarProducto",
  props: ["productos", "productoAeditar"],
  data() {
    return {
      juguetes: {},
    };
  },
  created() {
    this.juguetes = this.productos;
  },
  methods: {
    ...mapActions(["editarProducto"]),
     actualizarJuguete(){
       let actualizacion = {
         id: this.juguetes.id,
         data: {
           codigo: this.juguetes.data.codigo,
           nombre: this.juguetes.data.nombre,
           stock: this.juguetes.data.stock,
           precio: this.juguetes.data.precio,
         },
       };
       this.editarProducto(actualizacion)
     }
  },

};
</script>

<style></style>
