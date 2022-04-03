<script>
// @ is an alias to /src

import logoMidgardComponent from "@/components/logoMidgardComponent.vue";
import loginPasteleroComponent from "@/components/loginPasteleroComponent.vue";

export default {
  components: {
    logoMidgardComponent,
    loginPasteleroComponent,
  },
};
</script>

<template>
  <body>
    <logo-midgard-component></logo-midgard-component>
    <login-pastelero-component></login-pastelero-component>
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
