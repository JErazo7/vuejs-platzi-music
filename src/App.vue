<template lang="pug">
  #app
    h1 Componentes
    child
      h1(slot="title") Titulo Slot
      div(slot="body")
        p Loren insuo
    
          
</template>

<script>
import Child from "./components/child.vue";
export default {
  name: "app",
  components: {
    Child
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
