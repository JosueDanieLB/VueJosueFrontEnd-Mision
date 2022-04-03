<template>
  <!-- Inventario de decoraciones disponibles según el tamaño de los productos -->

  <section class="marco">
    <div align="center" class="colorBlanco">
      <h2 class="titulo">Decoraciones</h2>
    </div>

    <div align="center" class="colorBlanco">
      <table border="5" class="fondoRosa">
        <tr align="center">
          <th>Decoración</th>
          <th>Referencia</th>
          <th width="300px" class="fondoAzul">Equivalencia</th>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Jarl</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/Decoracion1.jpg"
                alt="Jarl"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 15 <br />
              6 personas: 10 <br />
              15 personas: 6 <br />
              25 personas: 2
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Barco de Frey</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/Decoracion2.jpg"
                alt="Barco de Frey"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 11 <br />
              6 personas: 6 <br />
              15 personas: 3 <br />
              25 personas: 0
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Batalla</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/Decoracion3.jpg"
                alt="Batalla"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 12 <br />
              6 personas: 8 <br />
              15 personas: 4 <br />
              25 personas: 1
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Mimír</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/Decoracion4.jpg"
                alt="Mimír"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 18 <br />
              6 personas: 13 <br />
              15 personas: 10 <br />
              25 personas: 7
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Odín</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/Decoracion5.jpg"
                alt="Odín"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 8 <br />
              6 personas: 6 <br />
              15 personas: 2 <br />
              25 personas: 0
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Thor</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/Decoracion6.jpg"
                alt="Thor"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 10 <br />
              6 personas: 8 <br />
              15 personas: 3 <br />
              25 personas: 1
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Yggdrasil</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/Decoracion7.jpg"
                alt="Yggdrasil"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 8 <br />
              6 personas: 6 <br />
              15 personas: 2 <br />
              25 personas: 0
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Conquistador</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/Decoracion8.jpg"
                alt="Conquistador"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 5 <br />
              6 personas: 2 <br />
              15 personas: 1 <br />
              25 personas: 0
            </dt>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "inventarioDecoracionesComponent",
};
</script>

<style scoped>
.marco {
  padding: 5vh;
}

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
