//v-if digunakan untuk merender blok jika kondisi yang ditentukan benar.
//v-else digunakan untuk merender blok jika kondisi yang sama salah
//v-else-if digunakan untuk menentukan kondisi baru yang akan dijalankan, jika kondisi pertama salah
//v-show adalah Opsi lain untuk menampilkan elemen secara bersyarat
//Event Handling adalah melakukan sesuatu pada saat sebuah event(sesuatu yang terjadi pada sebuah DOM element)
 //bisa di persingkat menggunakan @, contoh: @click
<template>
<div>
    <h1 v-if="num === 0">The Number is zero</h1>
    <h1 v-else-if="num < 0">The Number is Negative</h1>
    <h1 v-else-if="num > 0">The Number is Positive</h1>
    <h1 v-else>Not a number</h1>

    
    
    <h2>Hari ini Belajar{{subject}}</h2>
    <button v-on:click="number()">Coba Tekan</button>
   
</div>
    

</template>
<script>
export default {
    data(){

        return{
            num:0,
            subject: ' '
        }
    },
    methods:    {

        number(){
            this.subject = this.subject +'Angka :)'
        }

    }
}
</script>