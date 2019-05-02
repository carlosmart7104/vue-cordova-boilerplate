<template>
  <div class="home">
    <Camera config="camera config"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Camera from '@/components/Camera.vue'

export default {
  name: 'home',
  components: {
    Camera
  }
};
</script>

<style lang="stylus" scoped>
.home
  display: block
  margin: 0
  padding: 0
</style>
