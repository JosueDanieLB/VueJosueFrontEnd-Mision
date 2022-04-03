<script>
// @ is an alias to /src

import sucursalesComponent from "@/components/sucursalesComponent.vue";
import logoMidgardComponent from "@/components/logoMidgardComponent.vue";
import cerrarSesionComponent from "@/components/cerrarSesionComponent.vue";

export default {
  components: {
    sucursalesComponent,
    logoMidgardComponent,
    cerrarSesionComponent,
  },
};
</script>

<template>
  <body>
    <div class="sucursales">
      <logo-midgard-component></logo-midgard-component>
      <sucursales-component></sucursales-component>
      <cerrar-sesion-component></cerrar-sesion-component>
    </div>
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
