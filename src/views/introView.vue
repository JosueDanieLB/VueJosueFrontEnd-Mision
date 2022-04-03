<script>
// @ is an alias to /src

import masInfoComponent from "@/components/masInfoComponent.vue";
import botonClienteComponent from "@/components/botonClienteComponent.vue";
import botonPasteleroComponent from "@/components/botonPasteleroComponent.vue";
import logoMidgardComponent from "@/components/logoMidgardComponent.vue";

export default {
  components: {
    masInfoComponent,
    botonClienteComponent,
    botonPasteleroComponent,
    logoMidgardComponent,
  },
};
</script>

<template>
  <logo-midgard-component></logo-midgard-component>
  <body>
    <!-- Menú de opciones principal para diferenciar al cliente de los pasteleros del negocio -->
    <boton-cliente-component></boton-cliente-component>
    <boton-pastelero-component></boton-pastelero-component>
    <!-- Sección de información acerca del sitio web -->
    <mas-info-component></mas-info-component>
  </body>
</template>

<style scoped>
.fondoAzul {
  background-color: #1c323d;
}

input {
  font-weight: bold;
  font-size: large;
  line-height: 50px;
  width: 300px;
}

input.fondoAzul {
  color: white;
}

.fondoRosa {
  background-color: #ed2762;
}

input.fondoRosa {
  color: white;
}

.colorBlanco {
  color: white;
}

.fondoAmarillo {
  background-color: #edff9b;
}
</style>
