<template lang="pug">
  #app
    img(alt="Vue logo" src="./assets/logo.png")
    h1 {{ msg }} 
    h2 papito ric 
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Hello Josue"
    };
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
