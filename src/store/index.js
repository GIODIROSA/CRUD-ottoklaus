import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [],
  },
  mutations: {
    OBTENER_PRODUCTO(state, productos) {
      state.productos = productos;
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
  },
  getters: {
    productosData: (state) => {
      return state.productos.map((p) => {
        const data = p.data;
        data.id = p.id;
        return data;
      });
    },
  },
  modules: {},
});
