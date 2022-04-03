<script>
// @ is an alias to /src

import logoMidgardComponent from "@/components/logoMidgardComponent.vue";
import hacerPedidoComponent from "@/components/hacerPedidoComponent.vue";
import masInfoComponent from "@/components/masInfoComponent.vue";
import volverMenuComponent from "@/components/volverMenuComponent.vue";

export default {
  components: {
    logoMidgardComponent,
    hacerPedidoComponent,
    masInfoComponent,
    volverMenuComponent,
  },
};
</script>

<template>
  <body>
    <logo-midgard-component></logo-midgard-component>
    <hacer-pedido-component></hacer-pedido-component>
    <mas-info-component></mas-info-component>
    <volver-menu-component></volver-menu-component>
  </body>
</template>

<style scoped>
body {
  background-image: url("../assets/Fondo2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
}
</style>
