<template>
  <div class="logoMidgard">
    <router-link to="/">
      <div class="imagen"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "logoMidgardComponent",
};
</script>

<style scoped>
.imagen {
  width: 20vw;
  height: 20vw;
  display: flex;
  background-size: contain;
  background-image: url(../assets/Logo1.png);
  background-repeat: no-repeat;
  margin-bottom: 10px;
  background-position: center center;
}
.logoMidgard {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: o;
}
</style>
