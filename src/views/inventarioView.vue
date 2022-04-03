<script>
// @ is an alias to /src

import logoMidgardComponent from "@/components/logoMidgardComponent.vue";
import botonHistorialComponent from "@/components/botonHistorialComponent.vue";
import inventarioPastelesComponent from "@/components/inventarioPastelesComponent.vue";
import inventarioPaysComponent from "@/components/inventarioPaysComponent.vue";
import inventarioCheesecakesComponent from "@/components/inventarioCheesecakesComponent.vue";
import inventarioDecoracionesComponent from "@/components/inventarioDecoracionesComponent.vue";
import cerrarSesionComponent from "@/components/cerrarSesionComponent.vue";

export default {
  components: {
    logoMidgardComponent,
    botonHistorialComponent,
    inventarioPastelesComponent,
    inventarioPaysComponent,
    inventarioCheesecakesComponent,
    inventarioDecoracionesComponent,
    cerrarSesionComponent,
  },
};
</script>

<template>
  <body>
    <logo-midgard-component></logo-midgard-component>
    <div align="center" class="colorBlanco">
      <h2 class="titulo">Panel de Pastelero</h2>
    </div>
    <boton-historial-component></boton-historial-component>
    <inventario-pasteles-component></inventario-pasteles-component>
    <inventario-pays-component></inventario-pays-component>
    <inventario-cheesecakes-component></inventario-cheesecakes-component>
    <inventario-decoraciones-component></inventario-decoraciones-component>
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
