<template>
  <div align="center" class="colorBlanco">
    <h2 class="titulo">¡Haga su pedido!</h2>
  </div>
  <br />
  <!-- Formulario de pedido -->
  <section>
    <form action="pedidosPasteleria.js">
      <div align="center" class="colorBlanco">
        <table border="5" class="fondoRosa">
          <tr>
            <th width="500px">Nombre</th>
            <th width="500px" class="fondoAzul">
              <input
                type="text"
                name="nombreCliente"
                id="nombreCliente"
                placeholder="Nombre y apellido"
              />
            </th>
          </tr>

          <tr>
            <th width="500px">Teléfono</th>
            <th width="500px" class="fondoAzul">
              <input
                type="tel"
                name="telefonoCliente"
                id="telefonoCliente"
                placeholder="0123456789"
              />
            </th>
          </tr>

          <tr>
            <th width="500px">Correo</th>
            <th width="500px" class="fondoAzul">
              <input
                type="email"
                name="correoCliente"
                id="correoCliente"
                placeholder="ejemplo@correo.com"
              />
            </th>
          </tr>

          <tr>
            <th width="500px">Para recoger o a domicilio</th>
            <th width="500px" class="fondoAzul">
              <select name="tipoEnvio" id="tipoEnvio">
                <option value="Recoger">Recoger en tienda</option>
                <option value="Domicilio">A domicilio</option>
              </select>
            </th>
          </tr>

          <tr>
            <th width="500px">Especifique punto de entrega</th>
            <th width="500px" class="fondoAzul">
              <input
                type="text"
                name="Entrega"
                id="Entrega"
                placeholder="Dirección o sucursal de entrega"
              />
            </th>
          </tr>

          <tr>
            <th width="500px">¿Para cuando lo quiere?</th>
            <th width="500px" class="fondoAzul">
              <input type="datetime-local" name="Fecha" id="Fecha" />
            </th>
          </tr>

          <tr>
            <th width="500px">Tipo</th>
            <th width="500px" class="fondoAzul">
              <select name="tipoPastel" id="tipoPastel">
                <option value="Pastel">Pastel</option>
                <option value="Pay">Pay</option>
                <option value="Cheesecake">Cheesecake</option>
              </select>
            </th>
          </tr>

          <tr>
            <th width="500px">Cantidad</th>
            <th width="500px" class="fondoAzul">
              <input
                type="number"
                name="cantidadPasteles"
                id="cantidadPasteles"
                placeholder="0"
              />
            </th>
          </tr>

          <tr>
            <th width="500px">Tamaño pastel</th>
            <th width="500px" class="fondoAzul" align="left">
              <input
                type="checkbox"
                id="size1"
                name="size1"
                value="Individual"
              />
              <label for="size1">Individual</label><br />
              <input
                type="checkbox"
                id="size2"
                name="size2"
                value="6 personas"
              />
              <label for="size2">6 personas</label><br />
              <input
                type="checkbox"
                id="size3"
                name="size3"
                value="15 personas"
              />
              <label for="size3">15 personas</label><br />
              <input
                type="checkbox"
                id="size4"
                name="size4"
                value="25 personas"
              />
              <label for="sabor4">25 personas</label><br />
            </th>
          </tr>

          <tr>
            <th width="500px">Tamaño pay</th>
            <th width="500px" class="fondoAzul" align="left">
              <input
                type="checkbox"
                id="size5"
                name="size5"
                value="Individual"
              />
              <label for="size5">Individual</label><br />
              <input
                type="checkbox"
                id="size6"
                name="size6"
                value="6 personas"
              />
              <label for="size5">6 personas</label><br />
            </th>
          </tr>

          <tr>
            <th width="500px">Tamaño cheesecake</th>
            <th width="500px" class="fondoAzul" align="left">
              <input
                type="checkbox"
                id="size7"
                name="size7"
                value="Individual"
              />
              <label for="size7">Individual</label><br />
              <input
                type="checkbox"
                id="size8"
                name="size8"
                value="15 personas"
              />
              <label for="size8">15 personas</label><br />
            </th>
          </tr>

          <tr>
            <th width="500px">
              Sabores de Pastel <br />
              <p style="font-size: medium">
                (En caso de elegir mas de 1, se tomará el costo del de mayor
                precio)
              </p>
            </th>
            <th width="500px" class="fondoAzul" align="left">
              <input
                type="checkbox"
                id="sabor1"
                name="sabor1"
                value="Chocolate"
              />
              <label for="sabor1">Chocolate</label><br />
              <input
                type="checkbox"
                id="sabor2"
                name="sabor2"
                value="Vainilla"
              />
              <label for="sabor2">Vainilla</label><br />
              <input
                type="checkbox"
                id="sabor3"
                name="sabor3"
                value="3 Leches"
              />
              <label for="sabor3">3 Leches</label><br />
              <input
                type="checkbox"
                id="sabor4"
                name="sabor4"
                value="Chocobanana"
              />
              <label for="sabor4">Chocobanana</label><br />
              <input type="checkbox" id="sabor5" name="sabor5" value="Cajeta" />
              <label for="sabor5">Cajeta</label><br />
              <input
                type="checkbox"
                id="sabor6"
                name="sabor6"
                value="Cookie Brownie"
              />
              <label for="sabor6">Cookie Brownie</label><br />
              <input
                type="checkbox"
                id="sabor7"
                name="sabor7"
                value="Mazapan"
              />
              <label for="sabor7">Mazapán</label><br />
              <input type="checkbox" id="sabor8" name="sabor8" value="Fresas" />
              <label for="sabor8">Fresas c/Crema</label><br />
            </th>
          </tr>

          <tr>
            <th width="500px">
              Sabores de Pay <br />
              <p style="font-size: medium">
                (En caso de elegir mas de 1, se tomará el costo del de mayor
                precio)
              </p>
            </th>
            <th width="500px" class="fondoAzul" align="left">
              <input
                type="checkbox"
                id="sabor9"
                name="sabor9"
                value="Brownie"
              />
              <label for="sabor9">Brownie</label><br />
              <input type="checkbox" id="sabor10" name="sabor10" value="Coco" />
              <label for="sabor10">Coco</label><br />
              <input
                type="checkbox"
                id="sabor11"
                name="sabor11"
                value="Platano"
              />
              <label for="sabor11">Plátano</label><br />
              <input
                type="checkbox"
                id="sabor12"
                name="sabor12"
                value="Fresa"
              />
              <label for="sabor12">Fresa</label><br />
              <input
                type="checkbox"
                id="sabor13"
                name="sabor13"
                value="Fruta"
              />
              <label for="sabor13">Fruta</label><br />
            </th>
          </tr>

          <tr>
            <th width="500px">
              Sabores de Cheesecake <br />
              <p style="font-size: medium">
                (En caso de elegir mas de 1, se tomará el costo del de mayor
                precio)
              </p>
            </th>
            <th width="500px" class="fondoAzul" align="left">
              <input
                type="checkbox"
                id="sabor14"
                name="sabor14"
                value="Brownie"
              />
              <label for="sabor14">Brownie</label><br />
              <input type="checkbox" id="sabor15" name="sabor15" value="Oreo" />
              <label for="sabor15">Oreo</label><br />
              <input
                type="checkbox"
                id="sabor16"
                name="sabor16"
                value="Platano"
              />
              <label for="sabor16">Plátano</label><br />
            </th>
          </tr>

          <tr>
            <th width="500px">
              Adornos<br />
              <p style="font-size: medium">
                (En caso de elegir mas de 1, se tomará el costo del de mayor
                precio)
              </p>
            </th>
            <th width="500px" class="fondoAzul" align="left">
              <input type="checkbox" id="adorno1" name="adorno1" value="Jarl" />
              <label for="adorno1">Jarl</label><br />
              <input
                type="checkbox"
                id="adorno2"
                name="adorno2"
                value="Barco de Frey"
              />
              <label for="adorno2">Barco de Frey</label><br />
              <input
                type="checkbox"
                id="adorno3"
                name="adorno3"
                value="Batalla"
              />
              <label for="adorno3">Batalla</label><br />
              <input
                type="checkbox"
                id="adorno4"
                name="adorno4"
                value="Mimir"
              />
              <label for="adorno4">Mimír</label><br />
              <input type="checkbox" id="adorno5" name="adorno5" value="Odin" />
              <label for="adorno5">Odín</label><br />
              <input type="checkbox" id="adorno6" name="adorno6" value="Thor" />
              <label for="adorno6">Thor</label><br />
              <input
                type="checkbox"
                id="adorno7"
                name="adorno7"
                value="Yggdrasil"
              />
              <label for="adorno7">Yggdrasil</label><br />
              <input
                type="checkbox"
                id="adorno8"
                name="adorno8"
                value="Conquistador"
              />
              <label for="adorno8">Conquistador</label><br />
            </th>
          </tr>

          <tr>
            <th width="500px">Detalles adicionales</th>
            <th width="500px" class="fondoAzul">
              <input
                type="text"
                name="Detalles"
                id="Detalles"
                placeholder="Especificaciones de su pedido"
              />
            </th>
          </tr>

          <tr>
            <th width="500px">Costo total</th>
            <th width="500px" class="fondoAzul">
              <input
                type="number"
                name="Total"
                id="Total"
                placeholder="Total a pagar"
              />
            </th>
          </tr>
        </table>
      </div>

      <br /><br />

      <!-- Mensaje de respuesta cuando se envía la solicitud -->
      <div align="center">
        <input type="reset" />
        <input
          type="submit"
          onclick="alert('¡Recibimos su pedido!, ya empezamos a hornear.¡SKOL!');"
        />
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "hacerPedidoComponent",
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

select,
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

.letraNormal {
  font-size: medium;
}
</style>
