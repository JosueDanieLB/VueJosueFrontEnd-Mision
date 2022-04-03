<template>
  <!-- Inventario de ingredientes de acuerdo a los sabores de cheesecakes -->
  <section class="marco">
    <div align="center" class="colorBlanco">
      <h2 class="titulo">Inventario de sabores de cheesecake</h2>
    </div>

    <div align="center" class="colorBlanco">
      <table border="5" class="fondoRosa">
        <tr align="center">
          <th>Sabor</th>
          <th>Referencia</th>
          <th width="700px">Cantidad de ingredientes restantes</th>
          <th width="300px" class="fondoAzul">Equivalencia en cheesecakes</th>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Brownie Cheesecake con Fresas</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/brownieCheesecake.jpg"
                alt="Brownie Cheesecake con Fresas"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td>
            <dd>
              Galletas: 6kg<br />
              Mantequilla: 5kg<br />
              Queso crema: 4kg<br />
              Leche condensada: 6lt<br />
              Crema de leche: 8lt<br />
              Grenetina: 6kg<br />
              Fresas: 3kg<br />
              Azúcar: 6kg<br />
              Limones: 6kg
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 12 <br />
              15 personas: 7 <br />
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Brownie Cheesecake Oreo</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/oreoCheesecake.jpg"
                alt="Brownie Cheesecake Oreo"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td>
            <dd>
              Galletas oreo: 4kg<br />
              Mantequilla: 5kg<br />
              Queso crema: 4kg<br />
              Leche condensada: 6lt<br />
              Crema de leche: 8lt<br />
              Grenetina: 6kg<br />
              Vainilla: 5lt<br />
              Azúcar: 6kg<br />
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 10 <br />
              15 personas: 4 <br />
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Cheesecake de Plátano</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/platanoCheesecake.jpg"
                alt="Pay de Plátano"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td>
            <dd>
              Galletas: 6kg<br />
              Mantequilla: 5kg<br />
              Queso crema: 4kg<br />
              Leche condensada: 6lt<br />
              Crema de leche: 8lt<br />
              Grenetina: 6kg<br />
              Cacao: 8kg<br />
              Cajeta: 5lt<br />
              Caramelo: 2lt<br />
              Plátanos: 3kg<br />
              Azúcar: 6kg<br />
              Nuez: 4kg
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 12 <br />
              15 personas: 7 <br />
            </dt>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "inventarioCheesecakesComponent",
};
</script>

<style scoped>
.marco {
  padding-top: 5vh;
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
