<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .field.has-addons
          input.input.is-large(
            type="text" 
            placeholder="Buscar canciones" 
            v-model="searchQuery")
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times
      .container.custom
        .colums
          .colum(v-for= "t in canciones") {{ t.nombre }} - {{ t.artista }}
          
          
</template>

<script>
const canciones = [
  { nombre: "De mes en mes", artista: "Ricardo Arjona" },
  { nombre: "Pinguinos en la cama", artista: "Ricardo Arjona" },
  { nombre: "Atrevete", artista: "Calle 13" },
  { nombre: "Nadie como tu", artista: "Calle 13" }
];
export default {
  name: "app",
  data() {
    return {
      canciones: [],
      searchQuery: ""
    };
  },
  methods: {
    search() {
      this.canciones = canciones;
    }
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
