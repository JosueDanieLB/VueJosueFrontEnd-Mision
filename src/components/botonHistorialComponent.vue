<template>
  <!-- Ir directamente al panel de historial de compras -->
  <section>
    <router-link to="/historial">
      <div align="center">
        <input type="button" value="Historial de pedidos" class="fondoBlanco" />
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "botonHistorialComponent",
};
</script>

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

.letraGrande {
  font-weight: bold;
  font-size: large;
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

dd {
  font-size: large;
  font-weight: bold;
}

td,
th {
  font-size: x-large;
  font-weight: bold;
}

.colorBlanco {
  color: white;
}

.fondoAmarillo {
  background-color: #edff9b;
}

.fondoNaranja {
  background-color: #ffc662;
}

.fondoCielo {
  background-color: #86c6f2;
}

.fondoBlanco {
  background-color: white;
}

.titulo {
  font-size: xx-large;
}
</style>
