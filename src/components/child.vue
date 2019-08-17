<template lang="pug">
  div
    h1 Este es un componente hijo
    local
</template>

<script>
import local from "./local.vue";
export default {
  components: {
    local
  }
};
</script>
