<script>
// @ is an alias to /src

import logoMidgardComponent from "@/components/logoMidgardComponent.vue";
import botonInventarioComponent from "@/components/botonInventarioComponent.vue";
import ingresosComponent from "@/components/ingresosComponent.vue";
import historialPedidosComponent from "@/components/historialPedidosComponent.vue";
import cerrarSesionComponent from "@/components/cerrarSesionComponent.vue";

export default {
  components: {
    logoMidgardComponent,
    botonInventarioComponent,
    ingresosComponent,
    historialPedidosComponent,
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
    <boton-inventario-component></boton-inventario-component>
    <ingresos-component></ingresos-component>
    <historial-pedidos-component></historial-pedidos-component>
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
