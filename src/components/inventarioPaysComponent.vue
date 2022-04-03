<template>
  <!-- Inventario de ingredientes de acuerdo a los sabores de pays -->

  <section class="marco">
    <div align="center" class="colorBlanco">
      <h2 class="titulo">Inventario de sabores de pay</h2>
    </div>

    <div align="center" class="colorBlanco">
      <table border="5" class="fondoRosa">
        <tr align="center">
          <th>Sabor</th>
          <th>Referencia</th>
          <th width="700px">Cantidad de ingredientes restantes</th>
          <th width="300px" class="fondoAzul">Equivalencia en pays</th>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Pay de Brownie</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/browniePay.jpg"
                alt="Pay de Brownie"
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
              Azúcar morena: 8kg<br />
              Cacao: 8kg<br />
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
              Individual: 20 <br />
              6 personas: 12 <br />
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Pay de Coco</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/cocoPay.jpg"
                alt="Pay de Coco"
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
              Azúcar morena: 8kg<br />
              Coco rayado: 4kg<br />
              Queso crema: 4kg<br />
              Nata: 3kg<br />
              Sal: 2kg<br />
              Pasta hojaldre: 3kg<br />
              Leche: 43lt
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 12 <br />
              6 personas: 8 <br />
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Pay de Plátano</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/platanoPay.jpg"
                alt="Pay de Plátano"
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
              Azúcar morena: 8kg<br />
              Galletas: 6kg<br />
              Queso crema: 4kg<br />
              Nata: 3kg<br />
              Sal: 2kg<br />
              Grenetina: 6kg<br />
              Cajeta: 5lt<br />
              Dulce de leche: 1kg<br />
              Nuez: 4kg<br />
              Plátanos: 3kg<br />
              Leche: 43lt
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 15 <br />
              6 personas: 10 <br />
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Pay de Fresa</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/fresasPay.jpg"
                alt="Pay de Fresa"
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
              Azúcar morena: 8kg<br />
              Galletas: 6kg<br />
              Queso crema: 4kg<br />
              Nata: 3kg<br />
              Sal: 2kg<br />
              Leche condensada: 6lt<br />
              Nuez: 4kg<br />
              Fresas: 3kg<br />
              Leche: 43lt<br />
              Malvaviscos: 4kg
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 12 <br />
              6 personas: 8 <br />
            </dt>
          </td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Pay de Frutas</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/frutasPay.jpg"
                alt="Pay de Frutas"
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
              Azúcar morena: 8kg<br />
              Galletas: 6kg<br />
              Queso crema: 4kg<br />
              Nata: 3kg<br />
              Sal: 2kg<br />
              Leche condensada: 6lt<br />
              Nuez: 4kg<br />
              Frutas: 6kg<br />
              Leche: 43lt<br />
              Malvaviscos: 4kg
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              Individual: 15 <br />
              6 personas: 10 <br />
            </dt>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "inventarioPaysComponent",
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
