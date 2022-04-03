<script>
// @ is an alias to /src

import logoMidgardComponent from "@/components/logoMidgardComponent.vue";
import botonPedidoComponent from "@/components/botonPedidoComponent.vue";
import saboresCheesecakesComponent from "@/components/saboresCheesecakesComponent.vue";
import decoracionesCheesecakesComponent from "@/components/decoracionesCheesecakesComponent.vue";
import masInfoComponent from "@/components/masInfoComponent.vue";
import volverMenuComponent from "@/components/volverMenuComponent.vue";

export default {
  name: "cheesecakesView",
  components: {
    logoMidgardComponent,
    botonPedidoComponent,
    saboresCheesecakesComponent,
    decoracionesCheesecakesComponent,
    masInfoComponent,
    volverMenuComponent,
  },
};
</script>

<template>
  <body>
    <logo-midgard-component></logo-midgard-component>
    <div align="center" class="colorBlanco">
      <h2 class="titulo">Nuestros Cheesecakes</h2>
    </div>
    <boton-pedido-component></boton-pedido-component>
    <sabores-cheesecakes-component></sabores-cheesecakes-component>
    <decoraciones-cheesecakes-component></decoraciones-cheesecakes-component>
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
