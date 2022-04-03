<template>
  <div align="center" class="colorBlanco">
    <h2>Nuestro Menú</h2>
  </div>
  <!-- Menú de opciones de productos para clientes -->

  <section>
    <div align="center" class="colorBlanco">
      <h3>Primero que todo, ¿qué se te antoja?</h3>
    </div>
    <br />

    <router-link to="/pasteles">
      <div align="center">
        <input type="button" value="Pasteles" class="fondoRosa" />
      </div>
    </router-link>
    <br />

    <router-link to="/pays">
      <div align="center">
        <input type="button" value="Pays" class="fondoCielo" />
      </div>
    </router-link>
    <br />
    <router-link to="/cheesecakes">
      <div align="center">
        <input type="button" value="Cheesecakes" class="fondoAmarillo" />
      </div>
    </router-link>
  </section>

  <br /><br /><br />
</template>

<script>
export default {
  name: "menuPasteleriaComponent",
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

.fondoNaranja {
  background-color: #ffc662;
}

.fondoCielo {
  background-color: #86c6f2;
}

.fondoBlanco {
  background-color: white;
}
</style>
