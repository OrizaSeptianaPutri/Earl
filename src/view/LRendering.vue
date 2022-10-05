//LIST RENDERING
<template>
<h1>
  <ol>
    <template v-for="(item) of items" >
      {{item.message}}
    </template>
  </ol>
</h1>
</template>


<script>
export default {
  data(){
    return{
      items:
      [
        {message:'Hello'},
        {message:'World'}, 
        {message:'For Example'}
      ]
    }
  }
}
</script>



