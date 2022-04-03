import { createRouter, createWebHashHistory } from "vue-router";
import introView from "../views/introView.vue";
import sucursalesView from "../views/sucursalesView.vue";
import contactoView from "../views/contactoView.vue";
import loginClienteView from "../views/loginClienteView.vue";
import loginPasteleroView from "../views/loginPasteleroView.vue";
import menuPasteleriaView from "../views/menuPasteleriaView.vue";
import pastelesView from "../views/pastelesView.vue";
import paysView from "../views/paysView.vue";
import cheesecakesView from "../views/cheesecakesView.vue";
import hacerPedidoView from "../views/hacerPedidoView.vue";
import inventarioView from "../views/inventarioView.vue";
import historialView from "../views/historialView.vue";

const routes = [
  {
    path: "/",
    name: "intro",
    component: introView,
  },
  {
    path: "/sucursales",
    name: "sucursales",
    component: sucursalesView,
  },
  {
    path: "/contacto",
    name: "contacto",
    component: contactoView,
  },
  {
    path: "/loginCliente",
    name: "loginCliente",
    component: loginClienteView,
  },
  {
    path: "/loginPastelero",
    name: "loginPastelero",
    component: loginPasteleroView,
  },
  {
    path: "/menuPasteleria",
    name: "menuPasteleria",
    component: menuPasteleriaView,
  },
  {
    path: "/pasteles",
    name: "pasteles",
    component: pastelesView,
  },
  {
    path: "/pays",
    name: "pays",
    component: paysView,
  },
  {
    path: "/cheesecakes",
    name: "cheesecakes",
    component: cheesecakesView,
  },
  {
    path: "/hacerPedido",
    name: "hacerPedido",
    component: hacerPedidoView,
  },
  {
    path: "/inventario",
    name: "inventario",
    component: inventarioView,
  },
  {
    path: "/historial",
    name: "historial",
    component: historialView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
