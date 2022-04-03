<template>
  <div class="botonCliente">
    <router-link to="/loginCliente">
      <div align="center">
        <input type="button" value="Soy cliente" class="fondoRosa" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "botonClienteComponent",
};
</script>

<style scoped>
.fondoRosa {
  background-color: #ed2762;
}
input {
  font-weight: bold;
  font-size: large;
  line-height: 50px;
  width: 300px;
}
input.fondoRosa {
  color: white;
}
.botonCliente {
  padding: 1vh 0;
}
</style>
