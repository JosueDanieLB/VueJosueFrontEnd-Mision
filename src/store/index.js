import { createStore } from "vuex";

export default createStore({
  state: {
    sabores: {
      cheesecake: {
        cheesecakeBrownieIndividual: 70,
        cheesecakeBrownie15: 450,
        cheesecakeOreoIndividual: 70,
        cheesecakeOreo15: 360,
        cheesecakePlatanoIndividual: 70,
        cheesecakePlatano15: 300,
      },
      pasteles: {
        pastelChocolateIndividual: 70,
        pastelChocolate6: 190,
        pastelChocolate15: 380,
        pastelChocolate25: 550,
        pastelVainillaIndividual: 70,
        pastelVainilla6: 250,
        pastelVainilla15: 450,
        pastelVainilla25: 600,
        pastel3LechesIndividual: 70,
        pastel3Leches6: 250,
        pastel3Leches15: 450,
        pastel3Leches25: 600,
        pastelChocobananaIndividual: 70,
        pastelChocobanana6: 190,
        pastelChocobanana15: 380,
        pastelChocobanana25: 550,
        pastelCajetaIndividual: 70,
        pastelCajeta6: 190,
        pastelCajeta15: 380,
        pastelCajeta25: 550,
        pastelCookieIndividual: 70,
        pastelCookie6: 210,
        pastelCookie15: 410,
        pastelCookie25: 630,
        pastelMazapanIndividual: 70,
        pastelMazapan6: 190,
        pastelMazapan15: 380,
        pastelMazapan25: 550,
        pastelFresaIndividual: 70,
        pastelFresa6: 210,
        pastelFresa15: 410,
        pastelFresa25: 630,
      },
      pays: {
        payBrownieIndividual: 70,
        payBrownie6: 200,
        payCocoIndividual: 70,
        payCoco6: 200,
        payPlatanoIndividual: 70,
        payPlatano6: 200,
        payFresaIndividual: 70,
        payFresa6: 250,
        payFrutaIndividual: 70,
        payFruta6: 250,
      },
    },
    imagenes: {
      cheesecake: {
        imagenCheesecakeBrownie: require("@/assets/brownieCheesecake.jpg"),
        imagenCheesecakeOreo: require("@/assets/oreoCheesecake.jpg"),
        imagenCheesecakePlatano: require("@/assets/platanoCheesecake.jpg"),
      },
      pasteles: {
        imagenPastelChocolate: require("@/assets/Chocolate.jpg"),
        imagenPastelVainilla: require("@/assets/Vainilla.jpg"),
        imagenPastel3Leches: require("@/assets/3Leches.jpg"),
        imagenPastelChocobanana: require("@/assets/Chocobanana.jpg"),
        imagenPastelCajeta: require("@/assets/Cajeta.jpg"),
        imagenPastelCookie: require("@/assets/Cookie.jpg"),
        imagenPastelMazapan: require("@/assets/Mazapan.jpg"),
        imagenPastelFresa: require("@/assets/Fresas.jpg"),
      },
      pays: {
        imagenPayBrownie: require("@/assets/browniePay.jpg"),
        imagenPayCoco: require("@/assets/cocoPay.jpg"),
        imagenPayPlatano: require("@/assets/platanoPay.jpg"),
        imagenPayFresa: require("@/assets/fresasPay.jpg"),
        imagenPayFruta: require("@/assets/frutasPay.jpg"),
      },
      decoraciones: {
        imagenDecoracion1: require("@/assets/Decoracion1.jpg"),
        imagenDecoracion2: require("@/assets/Decoracion2.jpg"),
        imagenDecoracion3: require("@/assets/Decoracion3.jpg"),
        imagenDecoracion4: require("@/assets/Decoracion4.jpg"),
        imagenDecoracion5: require("@/assets/Decoracion5.jpg"),
        imagenDecoracion6: require("@/assets/Decoracion6.jpg"),
        imagenDecoracion7: require("@/assets/Decoracion7.jpg"),
        imagenDecoracion8: require("@/assets/Decoracion8.jpg"),
      },
    },
    decoraciones: {
      decoracion1Individual: 100,
      decoracion1Personas6: 120,
      decoracion1Personas15: 180,
      decoracion1Personas25: 200,
      decoracion2Individual: 150,
      decoracion2Personas6: 180,
      decoracion2Personas15: 220,
      decoracion2Personas25: 280,
      decoracion3Individual: 100,
      decoracion3Personas6: 120,
      decoracion3Personas15: 180,
      decoracion3Personas25: 200,
      decoracion4Individual: 70,
      decoracion4Personas6: 100,
      decoracion4Personas15: 130,
      decoracion4Personas25: 170,
      decoracion5Individual: 130,
      decoracion5Personas6: 180,
      decoracion5Personas15: 200,
      decoracion5Personas25: 250,
      decoracion6Individual: 130,
      decoracion6Personas6: 180,
      decoracion6Personas15: 200,
      decoracion6Personas25: 250,
      decoracion7Individual: 130,
      decoracion7Personas6: 180,
      decoracion7Personas15: 200,
      decoracion7Personas25: 250,
      decoracion8Individual: 180,
      decoracion8Personas6: 220,
      decoracion8Personas15: 280,
      decoracion8Personas25: 350,
    },
  },
  getters: {
    cheesecakeBrownieIndividual(state) {
      return state.sabores.cheesecake.cheesecakeBrownieIndividual;
    },
    cheesecakeBrownie15(state) {
      return state.sabores.cheesecake.cheesecakeBrownie15;
    },
    cheesecakeOreoIndividual(state) {
      return state.sabores.cheesecake.cheesecakeOreoIndividual;
    },
    cheesecakeOreo15(state) {
      return state.sabores.cheesecakeOreo15;
    },
    cheesecakePlatanoIndividual(state) {
      return state.sabores.cheesecakePlatanoIndividual;
    },
    cheesecakePlatano15(state) {
      return state.sabores.cheesecakePlatano15;
    },
    imagenCheesecakeBrownie(state) {
      return state.imagenes.cheesecake.imagenCheesecakeBrownie;
    },
    imagenCheesecakeOreo(state) {
      return state.imagenes.cheesecake.imagenCheesecakeOreo;
    },
    imagenCheesecakePlatano(state) {
      return state.imagenes.cheesecake.imagenCheesecakePlatano;
    },
    decoracion1Individual(state) {
      return state.decoraciones.decoracion1Individual;
    },
    decoracion1Personas6(state) {
      return state.decoraciones.decoracion1Personas6;
    },
    decoracion1Personas15(state) {
      return state.decoraciones.decoracion1Personas15;
    },
    decoracion1Personas25(state) {
      return state.decoraciones.decoracion1Personas25;
    },
    decoracion2Individual(state) {
      return state.decoraciones.decoracion2Individual;
    },
    decoracion2Personas6(state) {
      return state.decoraciones.decoracion2Personas6;
    },
    decoracion2Personas15(state) {
      return state.decoraciones.decoracion2Personas15;
    },
    decoracion2Personas25(state) {
      return state.decoraciones.decoracion2Personas25;
    },
    decoracion3Individual(state) {
      return state.decoraciones.decoracion3Individual;
    },
    decoracion3Personas6(state) {
      return state.decoraciones.decoracion3Personas6;
    },
    decoracion3Personas15(state) {
      return state.decoraciones.decoracion3Personas15;
    },
    decoracion3Personas25(state) {
      return state.decoraciones.decoracion3Personas25;
    },
    decoracion4Individual(state) {
      return state.decoraciones.decoracion4Individual;
    },
    decoracion4Personas6(state) {
      return state.decoraciones.decoracion4Personas6;
    },
    decoracion4Personas15(state) {
      return state.decoraciones.decoracion4Personas15;
    },
    decoracion4Personas25(state) {
      return state.decoraciones.decoracion4Personas25;
    },
    decoracion5Individual(state) {
      return state.decoraciones.decoracion5Individual;
    },
    decoracion5Personas6(state) {
      return state.decoraciones.decoracion5Personas6;
    },
    decoracion5Personas15(state) {
      return state.decoraciones.decoracion5Personas15;
    },
    decoracion5Personas25(state) {
      return state.decoraciones.decoracion5Personas25;
    },
    decoracion6Individual(state) {
      return state.decoraciones.decoracion6Individual;
    },
    decoracion6Personas6(state) {
      return state.decoraciones.decoracion6Personas6;
    },
    decoracion6Personas15(state) {
      return state.decoraciones.decoracion6Personas15;
    },
    decoracion6Personas25(state) {
      return state.decoraciones.decoracion6Personas25;
    },
    decoracion7Individual(state) {
      return state.decoraciones.decoracion7Individual;
    },
    decoracion7Personas6(state) {
      return state.decoraciones.decoracion7Personas6;
    },
    decoracion7Personas15(state) {
      return state.decoraciones.decoracion7Personas15;
    },
    decoracion7Personas25(state) {
      return state.decoraciones.decoracion7Personas25;
    },
    decoracion8Individual(state) {
      return state.decoraciones.decoracion8Individual;
    },
    decoracion8Personas6(state) {
      return state.decoraciones.decoracion8Personas6;
    },
    decoracion8Personas15(state) {
      return state.decoraciones.decoracion8Personas15;
    },
    decoracion8Personas25(state) {
      return state.decoraciones.decoracion8Personas25;
    },
    imagenDecoracion1(state) {
      return state.imagenes.decoraciones.imagenDecoracion1;
    },
    imagenDecoracion2(state) {
      return state.imagenes.decoraciones.imagenDecoracion2;
    },
    imagenDecoracion3(state) {
      return state.imagenes.decoraciones.imagenDecoracion3;
    },
    imagenDecoracion4(state) {
      return state.imagenes.decoraciones.imagenDecoracion4;
    },
    imagenDecoracion5(state) {
      return state.imagenes.decoraciones.imagenDecoracion5;
    },
    imagenDecoracion6(state) {
      return state.imagenes.decoraciones.imagenDecoracion6;
    },
    imagenDecoracion7(state) {
      return state.imagenes.decoraciones.imagenDecoracion7;
    },
    imagenDecoracion8(state) {
      return state.imagenes.decoraciones.imagenDecoracion8;
    },
    pastelChocolateIndividual(state) {
      return state.sabores.pasteles.pastelChocolateIndividual;
    },
    pastelChocolate6(state) {
      return state.sabores.pasteles.pastelChocolate6;
    },
    pastelChocolate15(state) {
      return state.sabores.pasteles.pastelChocolate15;
    },
    pastelChocolate25(state) {
      return state.sabores.pasteles.pastelChocolate25;
    },
    pastelVainillaIndividual(state) {
      return state.sabores.pasteles.pastelVainillaIndividual;
    },
    pastelVainilla6(state) {
      return state.sabores.pasteles.pastelVainilla6;
    },
    pastelVainilla15(state) {
      return state.sabores.pasteles.pastelVainilla15;
    },
    pastelVainilla25(state) {
      return state.sabores.pasteles.pastelVainilla25;
    },
    pastel3LechesIndividual(state) {
      return state.sabores.pasteles.pastel3LechesIndividual;
    },
    pastel3Leches6(state) {
      return state.sabores.pasteles.pastel3Leches6;
    },
    pastel3Leches15(state) {
      return state.sabores.pasteles.pastel3Leches15;
    },
    pastel3Leches25(state) {
      return state.sabores.pasteles.pastel3Leches25;
    },
    pastelChocobananaIndividual(state) {
      return state.sabores.pasteles.pastelChocobananaIndividual;
    },
    pastelChocobanana6(state) {
      return state.sabores.pasteles.pastelChocobanana6;
    },
    pastelChocobanana15(state) {
      return state.sabores.pasteles.pastelChocobanana15;
    },
    pastelChocobanana25(state) {
      return state.sabores.pasteles.pastelChocobanana25;
    },
    pastelCajetaIndividual(state) {
      return state.sabores.pasteles.pastelCajetaIndividual;
    },
    pastelCajeta6(state) {
      return state.sabores.pasteles.pastelCajeta6;
    },
    pastelCajeta15(state) {
      return state.sabores.pasteles.pastelCajeta15;
    },
    pastelCajeta25(state) {
      return state.sabores.pasteles.pastelCajeta25;
    },
    pastelCookieIndividual(state) {
      return state.sabores.pasteles.pastelCookieIndividual;
    },
    pastelCookie6(state) {
      return state.sabores.pasteles.pastelCookie6;
    },
    pastelCookie15(state) {
      return state.sabores.pasteles.pastelCookie15;
    },
    pastelCookie25(state) {
      return state.sabores.pasteles.pastelCookie25;
    },
    pastelMazapanIndividual(state) {
      return state.sabores.pasteles.pastelMazapanIndividual;
    },
    pastelMazapan6(state) {
      return state.sabores.pasteles.pastelMazapan6;
    },
    pastelMazapan15(state) {
      return state.sabores.pasteles.pastelMazapan15;
    },
    pastelMazapan25(state) {
      return state.sabores.pasteles.pastelMazapan25;
    },
    pastelFresaIndividual(state) {
      return state.sabores.pasteles.pastelFresaIndividual;
    },
    pastelFresa6(state) {
      return state.sabores.pasteles.pastelFresa6;
    },
    pastelFresa15(state) {
      return state.sabores.pasteles.pastelFresa15;
    },
    pastelFresa25(state) {
      return state.sabores.pasteles.pastelFresa25;
    },
    imagenPastelChocolate(state) {
      return state.imagenes.pasteles.imagenPastelChocolate;
    },
    imagenPastelVainilla(state) {
      return state.imagenes.pasteles.imagenPastelVainilla;
    },
    imagenPastel3Leches(state) {
      return state.imagenes.pasteles.imagenPastel3Leches;
    },
    imagenPastelChocobanana(state) {
      return state.imagenes.pasteles.imagenPastelChocobanana;
    },
    imagenPastelCajeta(state) {
      return state.imagenes.pasteles.imagenPastelCajeta;
    },
    imagenPastelCookie(state) {
      return state.imagenes.pasteles.imagenPastelCookie;
    },
    imagenPastelMazapan(state) {
      return state.imagenes.pasteles.imagenPastelMazapan;
    },
    imagenPastelFresa(state) {
      return state.imagenes.pasteles.imagenPastelFresa;
    },
    payBrownieIndividual(state) {
      return state.sabores.pays.payBrownieIndividual;
    },
    payBrownie6(state) {
      return state.sabores.pays.payBrownie6;
    },
    payCocoIndividual(state) {
      return state.sabores.pays.payCocoIndividual;
    },
    payCoco6(state) {
      return state.sabores.pays.payCoco6;
    },
    payPlatanoIndividual(state) {
      return state.sabores.pays.payPlatanoIndividual;
    },
    payPlatano6(state) {
      return state.sabores.pays.payPlatano6;
    },
    payFresaIndividual(state) {
      return state.sabores.pays.payFresaIndividual;
    },
    payFresa6(state) {
      return state.sabores.pays.payFresa6;
    },
    payFrutaIndividual(state) {
      return state.sabores.pays.payFrutaIndividual;
    },
    payFruta6(state) {
      return state.sabores.pays.payFruta6;
    },

    imagenPayBrownie(state) {
      return state.imagenes.pays.imagenPayBrownie;
    },
    imagenPayCoco(state) {
      return state.imagenes.pays.imagenPayCoco;
    },
    imagenPayPlatano(state) {
      return state.imagenes.pays.imagenPayPlatano;
    },
    imagenPayFresa(state) {
      return state.imagenes.pays.imagenPayFresa;
    },
    imagenPayFruta(state) {
      return state.imagenes.pays.imagenPayFruta;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
