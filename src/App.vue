<template lang="pug">
  #app
    pm-header
    pm-loader(v-show="isLoading")
    section.section(v-show="!isLoading")
      nav.nav
        .field.has-addons
          input.input.is-large(
            type="text" 
            placeholder="Buscar canciones" 
            v-model="searchQuery")
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times
      
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for= "t in canciones") 
            pm-track(
              :class="{'is-active': t.id == selectedTrack}", 
              :track="t",
              @select="setSelectedTrack"
              )
    pm-footer
</template>

<script>
import trackService from "./services/track";
import PmFooter from "./components/layout/Footer.vue";
import PmHeader from "./components/layout/Header.vue";
import PmTrack from "./components/Track.vue";
import PmLoader from "./components/shared/Loader.vue";

export default {
  name: "app",
  components: {
    PmFooter,
    PmHeader,
    PmTrack,
    PmLoader
  },
  data() {
    return {
      canciones: [],
      searchQuery: "",
      isLoading: false,
      selectedTrack: ""
    };
  },
  methods: {
    search() {
      if (!this.canciones) return;
      this.isLoading = true;
      trackService.search(this.searchQuery).then(res => {
        this.canciones = res.tracks.items;
        this.isLoading = false;
      });
    },
    setSelectedTrack(id) {
      this.selectedTrack = id;
    }
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
.columns {
  margin-top: 2em;
}

.is-active {
  border: 3px #65d261 solid;
}
</style>
