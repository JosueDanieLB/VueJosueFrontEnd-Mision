<template>
  <!-- Enlace directo a formulario de pedidos -->
  <section>
    <br />
    <div align="center" class="colorBlanco">
      <h2>¿Ya sabes qué quieres?, ¡Haz tu pedido!</h2>
    </div>
    <br />
    <router-link to="/hacerPedido">
      <div align="center">
        <input type="button" value="¡Hacer pedido ya!" class="fondoBlanco" />
      </div>
    </router-link>
    <br />
  </section>
</template>

<script>
export default {
  name: "botonPedidoComponent",
};
</script>

<style scoped>
input {
  font-weight: bold;
  font-size: large;
  line-height: 50px;
  width: 300px;
}
.colorBlanco {
  color: white;
}
.fondoBlanco {
  background-color: white;
}
</style>
