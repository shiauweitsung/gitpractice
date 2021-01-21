<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import HelloWorld from './components/HelloWorld.vue'

// @Component({
//   components: {
//     HelloWorld
//   }
// })
export default class App extends Vue { }
</script>

<style lang="scss">
@import './assets/all';
</style>

<script>
import $ from 'jquery'
export default {
  name: 'app',
  created () {
    const url = `${process.env.VUE_APP_API}/api/shiauanimal/products/all`;
    this.$http.get(url).then((response) => {
    })
  }
}
</script>
