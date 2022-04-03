<script>
// @ is an alias to /src

import logoMidgardComponent from "@/components/logoMidgardComponent.vue";
import botonPedidoComponent from "@/components/botonPedidoComponent.vue";
import saboresPastelesComponent from "@/components/saboresPastelesComponent.vue";
import decoracionesPastelesComponent from "@/components/decoracionesPastelesComponent.vue";
import masInfoComponent from "@/components/masInfoComponent.vue";
import volverMenuComponent from "@/components/volverMenuComponent.vue";

export default {
  components: {
    logoMidgardComponent,
    saboresPastelesComponent,
    masInfoComponent,
    decoracionesPastelesComponent,
    botonPedidoComponent,
    volverMenuComponent,
  },
};
</script>

<template>
  <body>
    <logo-midgard-component></logo-midgard-component>
    <div align="center" class="colorBlanco">
      <h2 class="titulo">Nuestros Pasteles</h2>
    </div>
    <boton-pedido-component></boton-pedido-component>
    <sabores-pasteles-component></sabores-pasteles-component>
    <decoraciones-pasteles-component></decoraciones-pasteles-component>
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
