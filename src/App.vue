<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <UserViews/>
    <LRendering/>
    <CRender/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import UserViews from './view/UserViews.vue'
import LRendering from './view/LRendering.vue'
import CRender from './view/CRender.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    UserViews,
    LRendering,
    CRender
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
