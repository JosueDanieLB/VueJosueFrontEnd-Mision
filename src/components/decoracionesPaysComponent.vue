<template>
  <!-- Menú de decoraciones de pays -->

  <section class="marco">
    <div align="center" class="colorBlanco">
      <h2 class="titulo">Decoraciones</h2>
    </div>

    <div align="center" class="colorBlanco">
      <table border="5" class="fondoRosa">
        <tr align="center">
          <th>Decoración</th>
          <th>Cómo se ve</th>
          <th width="700px">Descripción</th>
          <th width="300px" class="fondoAzul">Precios</th>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Jarl</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenDecoracion1"
                alt="Jarl"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              Pay decorado para que el gobernador de las tierras tenga un
              festejo digno de un gran conquistador.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: + $ {{ $store.getters.decoracion1Individual }} <br />
              6 personas: + $ {{ $store.getters.decoracion1Personas6 }} <br />
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Barco de Frey</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenDecoracion2"
                alt="Barco de Frey"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              Decoración que recuerda al mismísimo barco volador de Frey. Decora
              tu pay y prepárate para conquistar a todos tus invitados con un
              recuerdo de un pay único.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: + $ {{ $store.getters.decoracion2Individual }} <br />
              6 personas: + $ {{ $store.getters.decoracion2Personas6 }} <br />
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Batalla</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenDecoracion3"
                alt="Batalla"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              Gánale la batalla tus invitados con esta decoración que recuerda a
              las fántasticas luchas de los antiguos vikingos, en busca de
              conquistar las nuevas tierras de Inglaterra. Aduéñate del evento
              con esta decoración tan original.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: + $ {{ $store.getters.decoracion3Individual }} <br />
              6 personas: + $ {{ $store.getters.decoracion3Personas6 }} <br />
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Mimír</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenDecoracion4"
                alt="Mimír"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              Sencilla decoración recordando al hombre más sabio de Asgard. No
              te quedes con las ganas de conocer tu futuro y pide esta
              decoración hoy mismo.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: + $ {{ $store.getters.decoracion4Individual }} <br />
              6 personas: + $ {{ $store.getters.decoracion4Personas6 }} <br />
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Odín</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenDecoracion5"
                alt="Odín"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              El padre de todo estaría orgulloso de que elijas esta decoración.
              Perfecto para festejar al lider de su tribu con un pay digno de un
              gran gobernante.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: + $ {{ $store.getters.decoracion5Individual }} <br />
              6 personas: + $ {{ $store.getters.decoracion5Personas6 }} <br />
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Thor</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenDecoracion6"
                alt="Thor"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              Decoración para el guerrero más fuerte de Asgard y salvador de
              Midgard. Conciente al hijo favorito de Odín con esta decoración, y
              deja facinados a todos en Midgard con tu pay.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: + $ {{ $store.getters.decoracion6Individual }} <br />
              6 personas: + $ {{ $store.getters.decoracion6Personas6 }} <br />
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Yggdrasil</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenDecoracion7"
                alt="Yggdrasil"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              Decora tu pay para recordar el árbol del mundo, el que todo
              sostiene. Deja impactados a todos con un pay digno de su evento.
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: + $ {{ $store.getters.decoracion7Individual }} <br />
              6 personas: + $ {{ $store.getters.decoracion7Personas6 }} <br />
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Conquistador</dt></td>
          <td>
            <div align="center">
              <img
                :src="$store.getters.imagenDecoracion8"
                alt="Conquistador"
                width="400px"
                height="400px"
              />
            </div>
          </td>
          <td>
            <dd>
              ¡Conquístalos a todos!, adueñate de todas los festejos con la
              mejor decoración que tenemos disponible, para intimidar al
              ejercito de invitados que tenga su festejo. Todos quedarán
              perplejos al presenciar un pay digno solamente para el dios Odín
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: + $ {{ $store.getters.decoracion8Individual }} <br />
              6 personas: + $ {{ $store.getters.decoracion8Personas6 }} <br />
            </dt>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "decoracionesPaysComponent",
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

img {
  width: 400px;
  height: 400px;
}
</style>
