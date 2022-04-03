<template>
  <div class="masInfo">
    <div align="center" class="colorBlanco">
      <h3>¿Necesitas más información?</h3>
    </div>
    <br />

    <router-link to="/sucursales">
      <div align="center">
        <input type="button" value="Nuestras sucursales" class="fondoAzul" />
      </div>
    </router-link>

    <br />

    <router-link to="/contacto">
      <div align="center">
        <input type="button" value="Contáctanos" class="fondoAzul" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "masInfoComponent",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fondoAzul {
  background-color: #1c323d;
}
.colorBlanco {
  color: white;
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

.masInfo {
  padding: 2% 0;
}
</style>
