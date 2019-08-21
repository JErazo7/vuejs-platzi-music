<template lang="pug">
    .content(v-if="track && track.album")
        p
            figure.image.is-128x128.is-inline-block
                img.is-rounded(v-if="track && track.album" :src="track.album.images[0].url")
        p   
            strong {{ track.name }} 
            small {{ track.duration_ms}}
        p 
            audio(controls :src="track.preview_url")        
</template>

<script>
export default {
  data() {
    return {
      track: {}
    };
  },
  created() {
    this.$bus.$on("set-track", track => {
      this.track = track;
    });
  }
};
</script>
