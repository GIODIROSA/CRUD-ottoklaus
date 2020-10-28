import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyCUpA39ftQD28ErnLRolSHeeAVVOz23Vuw",
  authDomain: "otto-klaus-27792.firebaseapp.com",
  databaseURL: "https://otto-klaus-27792.firebaseio.com",
  projectId: "otto-klaus-27792",
  storageBucket: "otto-klaus-27792.appspot.com",
  messagingSenderId: "504230746377",
  appId: "1:504230746377:web:bf5afaeffcf52ad00e5bd8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount("#app");
});
