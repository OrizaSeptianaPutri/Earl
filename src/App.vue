<template>
 <div id="app">
   
  <nav>
    <router-link to="/">Home | </router-link>
    <router-link to="/About">About | </router-link>
  </nav>
  
   <router-view />
   <PostTest/>
   <InputBinding/>
  </div>
  
</template>

<script>
import PostTest from "./view/PostTest.vue"
import InputBinding from "./view/InputBinding.vue"
export default {
  components: {
    PostTest,
    InputBinding
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
