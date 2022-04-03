<template>
  <!-- Mensaje de bienvenida -->
  <div align="center" class="colorBlanco"><h2>Nuestras Sucursales</h2></div>
  <br /><br />

  <!-- Lista de sucursales -->

  <div class="sucursales">
    <div align="center" class="colorBlanco">
      <table border="5" class="fondoRosa">
        <tr align="center">
          <th>Sucursal</th>
          <th width="400px">Nuestro local</th>
          <th width="400px">Ubícanos</th>
          <th width="200px" class="fondoAzul">Dirección y teléfono</th>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Midgard: Luis Mora</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/local1.jpg"
                alt="Midgard: Luis Mora"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <div align="center">
              <img
                src="@/assets/ubicacion1.jpg"
                alt="Midgard: Luis Mora"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Dirección: Blvd Luis Mora #131313 <br />
              Teléfono: 123-456-789 <br />
              Horario: Lunes a Sábado 08:00 a 19:00 hrs
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Midgard: Rosario</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/local2.jpg"
                alt="Midgard: Rosario"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <div align="center">
              <img
                src="@/assets/ubicacion2.jpg"
                alt="Midgard: Rosario"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Dirección: Blvd del Rosario #141414 <br />
              Teléfono: 987-654-321 <br />
              Horario: Lunes a Sábado 08:00 a 19:00 hrs
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Midgard: del Valle</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/local3.jpg"
                alt="Midgard: del Valle"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <div align="center">
              <img
                src="@/assets/ubicacion3.jpg"
                alt="Midgard: del Valle"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Dirección: Blvd del Valle #151515 <br />
              Teléfono: 123-789-456 <br />
              Horario: Lunes a Sábado 08:00 a 19:00 hrs
            </dt>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "sucursalesComponent",
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

.mediaOpacidad {
  opacity: 0.1;
}

.sucursales {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
