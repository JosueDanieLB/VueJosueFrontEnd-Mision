<script>
// @ is an alias to /src

import logoMidgardComponent from "@/components/logoMidgardComponent.vue";
import loginClienteComponent from "@/components/loginClienteComponent.vue";

export default {
  components: {
    logoMidgardComponent,
    loginClienteComponent,
  },
};
</script>

<template>
  <body>
    <logo-midgard-component></logo-midgard-component>
    <login-cliente-component></login-cliente-component>
  </body>
</template>

<style scoped>
body {
  background-image: url("../assets/Fondo2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
}
</style>
