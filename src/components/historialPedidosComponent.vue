<template>
  <!-- Historial de pedidos del mes en curso (marzo) -->

  <section class="marco">
    <div align="center" class="colorBlanco">
      <h2 class="titulo">Historial de pedidos del mes de Marzo de 2022</h2>
    </div>

    <div align="center" class="colorBlanco">
      <table border="5" class="fondoRosa">
        <tr align="center">
          <th>Tipo</th>
          <th>Referencia</th>
          <th width="700px">Datos del pedido</th>
          <th class="fondoAzul">Cantidad</th>
          <th class="fondoAzul">Entregado</th>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Pastel</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/Chocolate.jpg"
                alt="Chocolate"
                width="150px"
                height="150px"
              /><img
                src="@/assets/Decoracion1.jpg"
                alt="Jarl"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td>
            <dd>
              Nombre: Josué Barreras<br />
              Sabor: Chocolate<br />
              Decoración: Jarl<br />
              Punto de recogida: Sucursal del Valle<br />
              Especificaciones: Ninguna<br />
              Teléfono: 123456789<br />
              Correo: JosueBarreras@correo.com<br />
              Fecha de enntrega: 01 - Mar - 2022
            </dd>
          </td>
          <td class="fondoAzul"><dt class="letraGrande">25 personas: 1</dt></td>
          <td class="fondoAzul"><dt class="letraGrande">SI</dt></td>
        </tr>

        <tr align="center">
          <td><dt class="letraGrande">Pastel</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/Cajeta.jpg"
                alt="Cajeta"
                width="150px"
                height="150px"
              /><img
                src="@/assets/Decoracion3.jpg"
                alt="Batalla"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td>
            <dd>
              Nombre: Daniel López<br />
              Sabor: Cajeta<br />
              Decoración: Batalla<br />
              Punto de recogida: Sucursal Rosario<br />
              Especificaciones: Cuadrado<br />
              Teléfono: 123456788<br />
              Correo: DanielLopez@correo.com<br />
              Fecha de enntrega: 01 - Mar - 2022
            </dd>
          </td>
          <td class="fondoAzul">
            <dt class="letraGrande">
              6 personas: 2 <br />
              25 personas: 1
            </dt>
          </td>
          <td class="fondoAzul"><dt class="letraGrande">SI</dt></td>
        </tr>

        <tr align="center">
          <td><dt class="letraGrande">Pay</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/browniePay.jpg"
                alt="Pay de Brownie"
                width="150px"
                height="150px"
              /><img
                src="@/assets/Decoracion4.jpg"
                alt="Mimír"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td>
            <dd>
              Nombre: María Villegas<br />
              Sabor: Brownie<br />
              Decoración: Mimír<br />
              Punto de recogida: A domiclio<br />
              Especificaciones: Tostadito de la orilla<br />
              Teléfono: 123456787<br />
              Correo: MariaVillegas@correo.com<br />
              Fecha de enntrega: 01 - Mar - 2022
            </dd>
          </td>
          <td class="fondoAzul"><dt class="letraGrande">6 personas: 4</dt></td>
          <td class="fondoAzul"><dt class="letraGrande">SI</dt></td>
        </tr>

        <tr align="center">
          <td><dt class="letraGrande">Cheesecake</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/brownieCheesecake.jpg"
                alt="Brownie Cheesecake con Fresas"
                width="150px"
                height="150px"
              /><img
                src="@/assets/Decoracion5.jpg"
                alt="Odín"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td>
            <dd>
              Nombre: Monica García<br />
              Sabor: Brownie<br />
              Decoración: Odín<br />
              Punto de recogida: A domiclio<br />
              Especificaciones: Fresas extra<br />
              Teléfono: 123456786<br />
              Correo: MonicaGarcia@correo.com<br />
              Fecha de enntrega: 02 - Mar - 2022
            </dd>
          </td>
          <td class="fondoAzul"><dt class="letraGrande">15 personas: 3</dt></td>
          <td class="fondoAzul"><dt class="letraGrande">SI</dt></td>
        </tr>
        <tr align="center">
          <td><dt class="letraGrande">Cheesecake</dt></td>
          <td>
            <div align="center">
              <img
                src="@/assets/oreoCheesecake.jpg"
                alt="Brownie Cheesecake Oreo"
                width="150px"
                height="150px"
              /><img
                src="@/assets/Decoracion6.jpg"
                alt="Thor"
                width="150px"
                height="150px"
              />
            </div>
          </td>
          <td>
            <dd>
              Nombre: Diana Márquez<br />
              Sabor: Oreo<br />
              Decoración: Thor<br />
              Punto de recogida: A domiclio<br />
              Especificaciones: Galleta entera<br />
              Teléfono: 123456785<br />
              Correo: DianaMarquez@correo.com<br />
              Fecha de enntrega: 03 - Mar - 2022
            </dd>
          </td>
          <td class="fondoAzul"><dt class="letraGrande">15 personas: 3</dt></td>
          <td class="fondoAzul"><dt class="letraGrande">EN PROCESO</dt></td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "historialPedidosComponent",
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
