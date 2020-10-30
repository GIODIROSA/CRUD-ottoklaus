import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [],
    add: true,
  },
  mutations: {
    OBTENER_PRODUCTO(state, productos) {
      state.productos = productos; //cambiarlo a push
    },
    AÑADIR_DATA(state, payload) {
      state.productos.push(payload);
      console.log(payload);
    },
    MostrarAgregar(state) {
      state.add = !state.add;
    },
  },
  actions: {
    obtenerListadoProductos({ commit }) {
      firebase
        .firestore()
        .collection("listado")
        .onSnapshot((snapshot) => {
          console.log(snapshot);
          let productos = [];
          snapshot.forEach((producto) => {
            productos.push({
              id: producto.id,
              data: producto.data(),
            });
          });
          commit("OBTENER_PRODUCTO", productos);
        });
    }, //final de obtener productos
    eliminarjuguete({ commit }, id) {
      firebase
        .firestore()
        .collection("listado")
        .doc(id)
        .delete();
    },
    async adicionarProducto({ commit }, payload) {
      //payload es el objeto juguete
      const codigo = payload.codigo.toLowerCase();
      const nombre = payload.nombre.toLowerCase();
      const stock = Number(payload.stock);
      const precio = Number(payload.precio);

      const juguete = {
        codigo,
        nombre,
        stock,
        precio,
      };
      console.log(juguete)
      //subirlo al firebase
      try {
        await firebase
          .firestore()
          .collection("listado")
          .add(juguete);
      } catch (error) {
        console.log("Hay un error en la carga del juguete:", error);
      }
      // agregar al store
      commit("AÑADIR_DATA", juguete);
    },
  },

  modules: {},
});
