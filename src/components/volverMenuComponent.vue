<template>
  <!-- Volver al menu de la pastelería -->
  <section class="marco">
    <div align="center">
      <router-link to="/menuPasteleria" class="colorBlanco">Volver</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "volverMenuComponent",
};
</script>

<style scoped>
.marco {
  padding: 5vh 0;
}
</style>
