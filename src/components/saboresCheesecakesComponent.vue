<template>
  <!-- Menú de sabores de cheesecakes -->

  <section>
    <div align="center" class="colorBlanco">
      <h2 class="titulo">Sabores</h2>
    </div>

    <div align="center" class="colorBlanco">
      <table border="5" class="fondoRosa">
        <tr align="center">
          <th>Sabor</th>
          <th>Nuestros pay</th>
          <th width="700px">Descripción</th>
          <th width="300px" class="fondoAzul">Precios</th>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Brownie Cheesecake con Fresas</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenCheesecakeBrownie"
                alt="Brownie Cheesecake con Fresas"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              No hay mejor combinación que un delicioso cheesecake con base de
              brownie de chocolate, decorado con exquisitas fresas cubiertas de
              chocolate.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              <div>
                Individual: $ {{ $store.getters.cheesecakeBrownieIndividual }}
                <br />
                15 personas: $ {{ $store.getters.cheesecakeBrownie15 }} <br />
              </div>
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Brownie Cheesecake Oreo</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenCheesecakeOreo"
                alt="Brownie Cheesecake Oreo"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              Delicioso cheesecake con base de brownie de chocolate, y decorado
              con galletas Oreo.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              <div>
                Individual: $ {{ $store.getters.cheesecakeOreoIndividual }}
                <br />
                15 personas: $ {{ $store.getters.cheesecakeOreo15 }} <br />
              </div>
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Cheesecake de Plátano</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenCheesecakePlatano"
                alt="Pay de Plátano"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              Si te encanta el plátano nuestro Cheesecake de Plátano es tu
              postre ideal. Concha de galleta hecha en casa, riquísimo
              cheesecake horneado con plátano cubierto de cajeta, trocitos de
              plátano y crema. Decorado con caramelo y nuez.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              <div>
                Individual: $ {{ $store.getters.cheesecakePlatanoIndividual }}
                <br />
                15 personas: $ {{ $store.getters.cheesecakePlatano15 }} <br />
              </div>
            </dt>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "saboresCheesecakesComponent",
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

img {
  width: 400px;
  height: 400px;
}
</style>
