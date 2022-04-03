<template>
  <!-- Ingresos por ventas en el mes en curso (marzo) -->
  <section>
    <div align="center" class="colorBlanco">
      <h2 class="titulo">Ingresos del mes de Marzo de 2022</h2>
    </div>

    <div align="center" class="colorBlanco">
      <table border="5" class="fondoAzul">
        <tr align="center">
          <th width="500px">Productos vendidos</th>
          <th width="500px">Ingresos</th>
        </tr>

        <tr align="center">
          <td><dt class="letraGrande">Pastel individual</dt></td>
          <td>
            <dt class="letraGrande">
              Chocolate: 0<br />Vainilla: 0<br />3 Leches: 0<br />Chocolate:
              0<br />Chocobanana: 0<br />Cajeta: 0<br />Cookie Brownie: 0<br />Mazapán:
              0<br />Fresas c/Crema: 0<br />Ingresos por pasteles: $0.00<br />Ingresos
              por decoraciones: $0.00
            </dt>
          </td>
        </tr>

        <tr align="center">
          <td><dt class="letraGrande">Pastel 6 personas</dt></td>
          <td>
            <dt class="letraGrande">
              Chocolate: 0<br />Vainilla: 0<br />3 Leches: 0<br />Chocolate:
              0<br />Chocobanana: 0<br />Cajeta: 2<br />Cookie Brownie: 0<br />Mazapán:
              0<br />Fresas c/Crema: 0<br />Ingresos por pasteles: $380.00<br />Ingresos
              por decoraciones: $240.00
            </dt>
          </td>
        </tr>

        <tr align="center">
          <td><dt class="letraGrande">Pastel 15 personas</dt></td>
          <td>
            <dt class="letraGrande">
              Chocolate: 0<br />Vainilla: 0<br />3 Leches: 0<br />Chocolate:
              0<br />Chocobanana: 0<br />Cajeta: 0<br />Cookie Brownie: 0<br />Mazapán:
              0<br />Fresas c/Crema: 0<br />Ingresos por pasteles: $0.00<br />Ingresos
              por decoraciones: $0.00
            </dt>
          </td>
        </tr>

        <tr align="center">
          <td><dt class="letraGrande">Pastel 25 personas</dt></td>
          <td>
            <dt class="letraGrande">
              Chocolate: 1<br />Vainilla: 0<br />3 Leches: 0<br />Chocolate:
              0<br />Chocobanana: 0<br />Cajeta: 1<br />Cookie Brownie: 0<br />Mazapán:
              0<br />Fresas c/Crema: 0<br />Ingresos por pasteles: $1100.00<br />Ingresos
              por decoraciones: $400.00
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Pay individual</dt></td>
          <td>
            <dt class="letraGrande">
              Brownie: 0<br />Coco: 0<br />Plátano: 0<br />Fresas: 0<br />Frutas:
              0<br />Ingresos por pays: $0.00<br />Ingresos por decoraciones:
              $0.00
            </dt>
          </td>
        </tr>

        <tr align="center">
          <td><dt class="letraGrande">Pay 6 personas</dt></td>
          <td>
            <dt class="letraGrande">
              Brownie: 4<br />Coco: 0<br />Plátano: 0<br />Fresas: 0<br />Frutas:
              0<br />Ingresos por pays: $800.00<br />Ingresos por decoraciones:
              $400.00
            </dt>
          </td>
        </tr>

        <tr align="center">
          <td><dt class="letraGrande">Cheesecake individual</dt></td>
          <td>
            <dt class="letraGrande">
              Fresas: 3<br />Oreo: 0<br />Plátano: 0<br />Ingresos por
              cheesecakes: $0.00<br />Ingresos por decoraciones: $0.00
            </dt>
          </td>
        </tr>

        <tr align="center">
          <td><dt class="letraGrande">Cheesecake 15 personas</dt></td>
          <td>
            <dt class="letraGrande">
              Fresas: 3<br />Oreo: 3<br />Plátano: 0<br />Ingresos por
              cheesecakes: $2430.00<br />Ingresos por decoraciones: $1200.00
            </dt>
          </td>
        </tr>

        <tr align="center">
          <td><dt class="letraGrande">TOTAL</dt></td>
          <td><dt class="letraGrande">$6950.00</dt></td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "ingresosComponent",
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
