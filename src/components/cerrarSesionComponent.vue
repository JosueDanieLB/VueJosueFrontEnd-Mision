<template>
  <!-- Volver al menú inicial de  la pastelería -->
  <section class="marco">
    <div align="center">
      <router-link to="/" class="colorBlanco">Cerrar sesión</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "cerrarSesionComponent",
};
</script>

<style scoped>
.marco {
  padding: 5vh 0;
}
</style>
