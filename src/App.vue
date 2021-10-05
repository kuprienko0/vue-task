<template>
  <v-app>
    <Header/>
    <MainWrapper/>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header';
import MainWrapper from "./components/MainWrapper";
import Footer from "./components/Footer";

export default {
  name: 'App',

  components: {
    MainWrapper,
    Footer,
    Header
  },

  data: () => ({
    //
  }),
};
</script>
