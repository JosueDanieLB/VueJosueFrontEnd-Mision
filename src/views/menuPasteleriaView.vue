<script>
// @ is an alias to /src

import logoMidgardComponent from "@/components/logoMidgardComponent.vue";
import menuPasteleriaComponent from "@/components/menuPasteleriaComponent.vue";
import botonPedidoComponent from "@/components/botonPedidoComponent.vue";
import masInfoComponent from "@/components/masInfoComponent.vue";
import cerrarSesionComponent from "@/components/cerrarSesionComponent.vue";

export default {
  components: {
    logoMidgardComponent,
    menuPasteleriaComponent,
    botonPedidoComponent,
    masInfoComponent,
    cerrarSesionComponent,
  },
};
</script>

<template>
  <logo-midgard-component></logo-midgard-component>
  <menu-pasteleria-component></menu-pasteleria-component>
  <boton-pedido-component></boton-pedido-component>
  <mas-info-component></mas-info-component>
  <cerrar-sesion-component></cerrar-sesion-component>
</template>
