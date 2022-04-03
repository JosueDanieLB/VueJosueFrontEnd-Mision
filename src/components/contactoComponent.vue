<template>
  <!-- Encabezado de bienvenida -->
  <div class="contacto">
    <div align="center" class="colorBlanco">
      <h2>Formulario de Contacto</h2>
    </div>
    <div align="center" class="colorBlanco">
      <h3>
        Llena el siguiente formulario y nos pondremos en contacto contigo a la
        brevedad
      </h3>
    </div>
    <br /><br />

    <!-- Formulario de contacto -->
    <form action="contactoPasteleria.js">
      <div align="center" class="colorBlanco">
        <table border="5" class="fondoRosa">
          <tr align="center">
            <th width="400px">Nombre</th>
            <th width="250px">Teléfono</th>
            <th width="250px">Correo</th>
            <th width="400px" class="fondoAzul">Comentarios</th>
          </tr>
          <tr align="center">
            <td>
              <dt class="letraGrande">
                <input
                  type="text"
                  id="Nombre"
                  name="Nombre"
                  placeholder="Nombre y apellidos"
                  height="200px"
                />
              </dt>
            </td>
            <td>
              <dt class="letraGrande"></dt>
              <input
                type="tel"
                id="Telefono"
                name="Telefono"
                maxlength="10"
                placeholder="1234567890"
              />
            </td>
            <td>
              <dt class="letraGrande"></dt>
              <input
                type="email"
                id="Correo"
                name="Correo"
                placeholder="ejemplo@correo.com"
              />
            </td>
            <td class="fondoAzul">
              <dt class="letraGrande"></dt>
              <input
                type="text"
                id="Comentarios"
                name="Comentarios"
                placeholder="Tema a tratar"
              />
            </td>
          </tr>
        </table>
      </div>
      <!-- Elegir medio de contacto -->

      <div class="colorBlanco" align="center">
        <div align="center" class="colorBlanco">
          <table border="5" class="fondoRosa">
            <tr>
              <th width="500px">Medio de contacto preferido</th>
            </tr>
            <tr>
              <th class="fondoAzul" align="left">
                <input
                  type="checkbox"
                  id="Telefono"
                  name="contacto"
                  value="Teléfono"
                />
                <label for="Teléfono">Teléfono</label><br />
                <input
                  type="checkbox"
                  id="Correo"
                  name="contacto"
                  value="Correo"
                />
                <label for="Correo">Correo</label><br />
                <input
                  type="checkbox"
                  id="Ambos"
                  name="contacto"
                  value="Ambos"
                />
                <label for="Ambos">Ambos</label>
              </th>
            </tr>
          </table>
        </div>
      </div>

      <br /><br /><br /><br />

      <!-- Respuesta al envíar el pedido -->
      <div align="center">
        <input type="reset" />
        <input
          type="submit"
          onclick="alert('¡Recibimos su información!, en un momento lo contactamos');"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "contactoComponent",
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

p,
td,
th,
label,
input {
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

.centrado {
  text-align: center;
}
</style>
