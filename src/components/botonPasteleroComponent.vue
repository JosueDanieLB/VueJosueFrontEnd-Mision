<template>
  <div class="botonPastelero">
    <router-link to="/loginPastelero">
      <div align="center">
        <input type="button" value="Soy pastelero" class="fondoAmarillo" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "botonPasteleroComponent",
};
</script>

<style scoped>
input {
  font-weight: bold;
  font-size: large;
  line-height: 50px;
  width: 300px;
}
.fondoAmarillo {
  background-color: #edff9b;
}
.botonPastelero {
  padding: 1vh 0;
}
</style>
