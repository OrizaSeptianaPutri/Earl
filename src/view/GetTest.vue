<template>
    <h2>{{user}}</h2>
</template>

<script>
    import axios from 'axios'
export default {

    data(){
        return{
            user: "",
            name: ""
        }
    },
    mounted(){
        axios
            .get('https://1cd5wupiy7.execute-api.us-east-1.amazonaws.com/users/10')
            .then(res =>{
                console.log(res);
                this.user = res.data.name
            })
            .catch(error=>{
                alert(error.message)
            })
    }
}
</script>