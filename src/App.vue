<template>
 <div id="app">
   
  <nav>
    <router-link to="/">Home | </router-link>
    <router-link to="/About">About | </router-link>
  </nav>
  
   <router-view />
   <PostTest/>
   <GetTest/>
   <DeleteTest/>
  </div>
  
</template>

<script>
import PostTest from "./view/PostTest.vue"
import GetTest from "./view/GetTest.vue"
import DeleteTest from "./view/DeleteTest.vue"

export default {
  components: {
    PostTest,
    GetTest,
    DeleteTest
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
