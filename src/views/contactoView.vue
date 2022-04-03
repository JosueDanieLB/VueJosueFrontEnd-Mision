<script>
// @ is an alias to /src

import logoMidgardComponent from "@/components/logoMidgardComponent.vue";
import contactoComponent from "@/components/contactoComponent.vue";
import cerrarSesionComponent from "@/components/cerrarSesionComponent.vue";

export default {
  components: {
    logoMidgardComponent,
    contactoComponent,
    cerrarSesionComponent,
  },
};
</script>

<template>
  <body>
    <logo-midgard-component></logo-midgard-component>
    <contacto-component></contacto-component>
    <cerrar-sesion-component></cerrar-sesion-component>
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
