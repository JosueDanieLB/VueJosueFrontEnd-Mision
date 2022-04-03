<template>
  <!-- Inventario de ingredientes de acuerdo a los sabores de pasteles -->
  <section>
    <div align="center" class="colorBlanco">
      <h2 class="titulo">Inventario de sabores de pastel</h2>
    </div>

    <div align="center" class="colorBlanco">
      <table border="5" class="fondoRosa">
        <tr align="center">
          <th>Sabor</th>
          <th>Referencia</th>
          <th width="700px">Cantidad de ingredientes restantes</th>
          <th width="300px" class="fondoAzul">Equivalencia en pasteles</th>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Chocolate</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/Chocolate.jpg"
                alt="Chocolate"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td>
            <dd>
              Mantequilla: 5kg<br />
              Azúcar: 6kg<br />
              Huevo: 176<br />
              Vainilla: 5lt<br />
              Harina de trigo: 14kg<br />
              Polvo para hornear: 8kg<br />
              Cocoa Hershey: 24kg<br />
              Sal: 2kg<br />
              Leche: 43lt
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 15 <br />
              6 personas: 10 <br />
              15 personas: 7 <br />
              25 personas: 4
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Vainilla</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/Vainilla.jpg"
                alt="Vainilla"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td>
            <dd>
              Mantequilla: 5kg<br />
              Azúcar: 6kg<br />
              Huevo: 176<br />
              Vainilla: 5lt<br />
              Harina de trigo: 14kg<br />
              Polvo para hornear: 8kg<br />
              Merengue: 9lt<br />
              Sal: 2kg<br />
              Leche: 43lt
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 20 <br />
              6 personas: 16 <br />
              15 personas: 12 <br />
              25 personas: 8
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">3 Leches</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/3Leches.jpg"
                alt="3 Leches"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td>
            <dd>
              Mantequilla: 5kg<br />
              Azúcar: 6kg<br />
              Huevo: 176<br />
              Vainilla: 5lt<br />
              Harina de trigo: 14kg<br />
              Polvo para hornear: 8kg<br />
              Leche evaporada: 4lt<br />
              Leche condensada: 6lt<br />
              Crema batida: 10lt<br />
              Sal: 2kg<br />
              Leche: 43lt
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 12 <br />
              6 personas: 9 <br />
              15 personas: 5 <br />
              25 personas: 3
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Chocobanana</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/Chocobanana.jpg"
                alt="Chocobanana"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td>
            <dd>
              Mantequilla: 5kg<br />
              Azúcar: 6kg<br />
              Huevo: 176<br />
              Vainilla: 5lt<br />
              Harina de trigo: 14kg<br />
              Polvo para hornear: 8kg<br />
              Chocolate negro: 6kg<br />
              Aceite de coco: 2lt<br />
              Plátanos: 3kg<br />
              Sal: 2kg<br />
              Leche: 43lt
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 10 <br />
              6 personas: 5 <br />
              15 personas: 3 <br />
              25 personas: 0
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Cajeta</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/Cajeta.jpg"
                alt="Cajeta"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td>
            <dd>
              Mantequilla: 5kg<br />
              Azúcar: 6kg<br />
              Huevo: 176<br />
              Vainilla: 5lt<br />
              Harina de trigo: 14kg<br />
              Polvo para hornear: 8kg<br />
              Queso crema: 4kg<br />
              Cajeta: 5lt<br />
              Dulce de leche: 1kg<br />
              Sal: 2kg<br />
              Leche: 43lt
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 12 <br />
              6 personas: 7 <br />
              15 personas: 4 <br />
              25 personas: 2
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Cookie Brownie</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/Cookie.jpg"
                alt="Cookie Brownie"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td>
            <dd>
              Mantequilla: 5kg<br />
              Azúcar: 6kg<br />
              Huevo: 176<br />
              Vainilla: 5lt<br />
              Harina de trigo: 14kg<br />
              Polvo para hornear: 8kg<br />
              Chocolate negro: 6kg<br />
              Avellanas: 2kg<br />
              Nata: 3kg<br />
              Sal: 2kg<br />
              Galletas: 6kg<br />
              Leche: 43lt
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 15 <br />
              6 personas: 10 <br />
              15 personas: 7 <br />
              25 personas: 4
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Mazapán</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/Mazapan.jpg"
                alt="Mazapán"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td>
            <dd>
              Mantequilla: 5kg<br />
              Azúcar: 6kg<br />
              Huevo: 176<br />
              Vainilla: 5lt<br />
              Harina de trigo: 14kg<br />
              Polvo para hornear: 8kg<br />
              Queso crema: 4kg<br />
              Limones: 6kg<br />
              Polvo de mazapan: 7kg<br />
              Sal: 2kg<br />
              Leche: 43lt
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 20 <br />
              6 personas: 16 <br />
              15 personas: 12 <br />
              25 personas: 8
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Fresas con crema</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/Fresas.jpg"
                alt="Fresas con Crema"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td>
            <dd>
              Mantequilla: 5kg<br />
              Azúcar: 6kg<br />
              Huevo: 176<br />
              Vainilla: 5lt<br />
              Harina de trigo: 14kg<br />
              Polvo para hornear: 8kg<br />
              Fresas: 3kg<br />
              Leche condensada: 6lt<br />
              Crema batida: 10lt<br />
              Sal: 2kg<br />
              Leche: 43lt
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 12 <br />
              6 personas: 7 <br />
              15 personas: 4 <br />
              25 personas: 2
            </dt>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "inventarioPastelesComponent",
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
