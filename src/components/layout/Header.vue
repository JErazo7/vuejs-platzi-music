<template lang="pug">
  section.hero.is-success.is-bold
    .hero-head
      nav.navbar
        .container
          .navbar-brand
            .navbar-item
              strong Platzi Music
          .navbar-menu.navbar-end
            router-link.navbar-item(to="/") Buscar
            router-link.navbar-item(to="about") Nosotros
    .hero-body
        .container.has-text-centered
            h1.title Platzi Music
            h2.subtitle Canciones para perrear papá!!
            pm-player
</template>
<script>
import PmPlayer from "../Player.vue";
export default {
  components: {
    PmPlayer
  }
};
</script>
