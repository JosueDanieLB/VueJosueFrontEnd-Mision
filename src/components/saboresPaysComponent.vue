<template>
  <!-- Menú de sabores de pays -->

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
          <td><dt class="letraGrande">Pay de Brownie</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenPayBrownie"
                alt="Pay de Brownie"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              Un pay muy especial por su base horneada de delicioso brownie de
              chocolate, cubierto de nuestra riquísima natilla casera, caramelo
              y deliciosa crema.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: $ {{ $store.getters.payBrownieIndividual }} <br />
              6 personas: $ {{ $store.getters.payBrownie6 }} <br />
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Pay de Coco</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenPayCoco"
                alt="Pay de Coco"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              ¡Su sabor te sorprenderá! Crujiente concha horneada, rellena de
              deliciosa natilla casera con toque de vainilla, crema de queso y
              coco rallado. Cubierto con riquísima crema de queso y coco
              tostado.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: $ {{ $store.getters.payCocoIndividual }} <br />
              6 personas: $ {{ $store.getters.payCoco6 }} <br />
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Pay de Plátano</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenPayPlatano"
                alt="Pay de Plátano"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              Cremoso pay de Plátano, elaborado con concha horneada hecha en
              casa, rellena de natilla de vainilla, plátano en rebanadas, crema
              y nuez.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: $ {{ $store.getters.payPlatanoIndividual }} <br />
              6 personas: $ {{ $store.getters.payPlatano6 }} <br />
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Pay de Fresa</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenPayFresa"
                alt="Pay de Fresa"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              Nuestro pay Saratoga de Fresas es un delicioso pay de queso con
              malvavisco, sobre una concha de merengue y nuez, decorado con
              fresas. Disfruta también de nuestro Pay Saratoga de Frutas.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: $ {{ $store.getters.payFresaIndividual }} <br />
              6 personas: $ {{ $store.getters.payFresa6 }}<br />
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Pay de Frutas</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenPayFruta"
                alt="Pay de Frutas"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              Pay de queso con malvavisco, sobre una concha de merengue y nuez,
              decorado con frutas.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: $ {{ $store.getters.payFrutaIndividual }} <br />
              6 personas: $ {{ $store.getters.payFruta6 }} <br />
            </dt>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "saboresPaysComponent",
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
