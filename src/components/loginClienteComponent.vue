<template>
  <section align="center">
    <form action="pedido.js">
      <label for="cuenta" class="colorBlanco">Cuenta</label><br />
      <input
        type="text"
        id="cuenta"
        name="cuenta"
        placeholder="Nombre de la cuenta"
      />

      <br /><br />

      <label for="password" class="colorBlanco">Contraseña</label><br />
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Contraseña"
      />

      <br /><br /><br />

      <router-link to="/menuPasteleria">
        <div align="center">
          <input type="button" value="Iniciar sesión" class="fondoRosa" />
        </div>
      </router-link>

      <div align="center">
        <label
          for="password"
          class="colorBlanco letraNormal"
          onclick="alert('Enviamos a su correo los pasos para recuperar la contraseña');"
          >¿Olvidaste tu contraseña?
        </label>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "loginClienteComponent",
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

select,
td,
th,
label {
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

.letraNormal {
  font-size: medium;
}
</style>
