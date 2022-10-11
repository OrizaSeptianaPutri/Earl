<template>
<div>
    <h2>Latihan Post</h2>
    <br><br>
        <div>
            <label>ID </label>
			<input type="text" v-model="ID" placeholder="masukkan ID">
            <br><br>
        </div>
        <div>
			<label>Nama </label>
			<input type="text" v-model="name" placeholder="masukkan nama">
		<br><br>
        </div>
        <div>
			<button type="submit" @click="latihanpost">Submit</button>
        </div>
        <h2>{{user}}</h2>
</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
			ID: '',
            name: '',
            user: ''
			}
		},
		methods: {
			latihanpost(){
				axios.post("https://1cd5wupiy7.execute-api.us-east-1.amazonaws.com/users", 
				{name: this.name, userId: this.ID})
				.then ((res) => {
					console.log(res)
					this.user = res.data.name
				})
                .catch(error =>{
                    alert(error.message)
                })
                
			}
		}
	}
</script>