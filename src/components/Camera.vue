<template>
  <div class="camera">
    <canvas id="preview" ref="preview"></canvas>
    <div id="container">
      <p>{{ config }}</p>
      <router-link to="/about">
        <a>about</a>
      </router-link>
    </div>
  </div>
</template>

<script>
import Camera from '@/libs/camera.js'
let camera;

export default {
  name: 'Camera',
  props: ['config'],
  data() {
    return {
    };
  },
  mounted() {
    camera = new Camera(this.$refs.preview)
    camera.init()
    camera.start()
  },
  beforeDestroy() {
    camera.stop()
  }
};
</script>

<style lang="stylus" scoped>
.camera
  position: relative
  display: inline-block
  margin: 0
  padding: 0
  width: 100vw
  height: 100vh
  #preview
    position: absolute
    top: 0
    left: 0
    width: 100vw
    height: 100vh
  #container
    z-index: 1
    position: relative
    display: inline-block
    width: 100vw
    height: 100vh
</style>
