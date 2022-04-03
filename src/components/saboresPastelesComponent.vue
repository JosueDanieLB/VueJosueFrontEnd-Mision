<template>
  <!-- Menú de sabores de pasteles -->

  <section>
    <div align="center" class="colorBlanco">
      <h2 class="titulo">Sabores</h2>
    </div>

    <div align="center" class="colorBlanco">
      <table border="5" class="fondoRosa">
        <tr align="center">
          <th>Sabor</th>
          <th>Nuestros pasteles</th>
          <th width="700px">Descripción</th>
          <th width="300px" class="fondoAzul">Precios</th>
        </tr>

        <tr align="center">
          <td><dt class="letraGrande">Chocolate</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenPastelChocolate"
                alt="Chocolate"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              Delicioso Pastel de Chocolate con nuestro esponjoso pan de
              chocolate, relleno y forrado con cremoso chocolate elaborado en
              casa. ¡Perfecto para los que amamos el chocolate!
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: $ {{ $store.getters.pastelChocolateIndividual }}
              <br />
              6 personas: $ {{ $store.getters.pastelChocolate6 }} <br />
              15 personas: $ {{ $store.getters.pastelChocolate15 }} <br />
              25 personas: $ {{ $store.getters.pastelChocolate25 }}
            </dt>
          </td>
        </tr>

        <tr align="center">
          <td><dt class="letraGrande">Vainilla</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenPastelVainilla"
                alt="Vainilla"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              Riquísimo pan vainilla, relleno de nuestra natilla boston,
              decorado con crema cajeteada y nuez.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: $ {{ $store.getters.pastelVainillaIndividual }} <br />
              6 personas: $ {{ $store.getters.pastelVainilla6 }} <br />
              15 personas: $ {{ $store.getters.pastelVainilla15 }} <br />
              25 personas: $ {{ $store.getters.pastelVainilla25 }}
            </dt>
          </td>
        </tr>

        <tr align="center">
          <td><dt class="letraGrande">3 Leches</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenPastel3Leches"
                alt="3 Leches"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              Esponjoso pan de vainilla con delicioso bañado de tres leches,
              decorado con nuestro betún de queso crema, almendras y un toque de
              chocolate.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: {{ $store.getters.pastel3LechesIndividual }} <br />
              6 personas: $ {{ $store.getters.pastel3Leches6 }} <br />
              15 personas: $ {{ $store.getters.pastel3Leches15 }} <br />
              25 personas: $ {{ $store.getters.pastel3Leches25 }}
            </dt>
          </td>
        </tr>

        <tr align="center">
          <td><dt class="letraGrande">Chocobanana</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenPastelChocobanana"
                alt="Chocobanana"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              Nuestro pastel Chocobanana es único en su sabor por su deliciosa
              combinación de pan chocolate y pan plátano, relleno de nuestro
              riquísimo pudín de vainilla con plátano, crema, y nuez acanelada
              preparada en casa.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: $ {{ $store.getters.pastelChocobananaIndividual }}
              <br />
              6 personas: $ {{ $store.getters.pastelChocobanana6 }} <br />
              15 personas: $ {{ $store.getters.pastelChocobanana15 }} <br />
              25 personas: $ {{ $store.getters.pastelChocobanana25 }}
            </dt>
          </td>
        </tr>

        <tr align="center">
          <td><dt class="letraGrande">Cajeta</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenPastelCajeta"
                alt="Cajeta"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              Delicioso pastel Cajetoso de pan Vanilla, relleno de queso crema y
              cajeta, forrado con crema cajeteada.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: $ {{ $store.getters.pastelCajetaIndividual }} <br />
              6 personas: $ {{ $store.getters.pastelCajeta6 }} <br />
              15 personas: $ {{ $store.getters.pastelCajeta15 }} <br />
              25 personas: $ {{ $store.getters.pastelCajeta25 }}
            </dt>
          </td>
        </tr>

        <tr align="center">
          <td><dt class="letraGrande">Cookie Brownie</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenPastelCookie"
                alt="Cookie Brownie"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              Nuestro Pastel Cookie Brownie es una combinación perfecta de
              brownie de chocolate y deliciosa galleta de chispas de chocolate,
              relleno de nuestra riquísima natilla de vainilla hecha en casa y
              crema, ideal para ese antojo que no nos podemos resistir.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: $ {{ $store.getters.pastelCookieIndividual }} <br />
              6 personas: $ {{ $store.getters.pastelCookie6 }} <br />
              15 personas: $ {{ $store.getters.pastelCookie15 }} <br />
              25 personas: $ {{ $store.getters.pastelCookie25 }}
            </dt>
          </td>
        </tr>

        <tr align="center">
          <td><dt class="letraGrande">Mazapán</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenPastelMazapan"
                alt="Mazapán"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              Pastel de Mazapán para los amantes del cacahuate, delicioso pastel
              con pan sabor vainilla, relleno de crema con mazapán, pipitoria y
              caramelo, decorado con nuestro riquísimo betún de crema de
              cacahuate.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: $ {{ $store.getters.pastelMazapanIndividual }} <br />
              6 personas: $ {{ $store.getters.pastelMazapan6 }} <br />
              15 personas: $ {{ $store.getters.pastelMazapan15 }} <br />
              25 personas: $ {{ $store.getters.pastelMazapan25 }}
            </dt>
          </td>
        </tr>

        <tr align="center">
          <td><dt class="letraGrande">Fresas con crema</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenPastelFresa"
                alt="Fresas con Crema"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              Si te encantan las fresas, ¡tienes que probarlo! Esponjoso pan
              vainilla relleno de nuestra deliciosa natilla casera y crema de
              queso, decorado con deliciosas fresas naturales.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: $ {{ $store.getters.pastelFresaIndividual }} <br />
              6 personas: $ {{ $store.getters.pastelFresa6 }} <br />
              15 personas: $ {{ $store.getters.pastelFresa15 }} <br />
              25 personas: $ {{ $store.getters.pastelFresa25 }}
            </dt>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "saboresPastelesComponent",
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
