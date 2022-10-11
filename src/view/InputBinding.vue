//Form Input Binding, yaitu sebuah fitur yang terdapat pada Vue Js yang dapat menampilkan value apa yang kita inputkan pada field secara real-time
<template>
<div>
    <br><br>
    <p>Selamat Datang {{hallo}}</p>
    <input v-model= "hallo" placeholder="tulis namamu" >
    
    <br><br>
    <span>Cerita hari ini</span>
    <p style="white-space:pre-line">{{pesan}}</p>
    <br>
    <textarea v-model="pesan" placeholder="Ceritakan pengalamanmu hari ini"></textarea>

    <br> <br>
    <span>Bagaimana perasaanmu hari ini :  {{checked}}</span>
    <br> <br>
    <input type="checkbox" id="Senang" value="Senang" v-model="checked" name="senang">
    <label for="Senang">Senang</label>
    <input type="checkbox" id="Sedih" value="Sedih" v-model="unchecked" name="sedih">
    <label for="Sedih">Sedih</label>
    <br>

    <br>
    <p>Apa yang kamu butuhkan : {{picked}}</p>
    <input type="radio" id="traveling" value="Traveling" v-model="picked">
    <label for="traveling">Traveling</label>
    <br>
    <input type="radio" id="Kuliner" value="Kuliner" v-model="picked">
    <label for="Kuliner">Kuliner</label>
    <br>

    <br>
    <span>Dimana kamu akan melakukan nya:  {{selected}}</span>
    <br><br>
    <select v-model="selected">
        <option disabel value="">Please Select One</option>
        <option>Indonesia</option>
        <option>Korea</option>
        <option>Jepang</option>
        <option>Cina</option>
        <option>Amerika</option>
    </select>


</div>
</template>
<script>
export default {
    data(){
        return{
            hallo : ' ',
            pesan:' ',
            checked:false,
            unchecked:true,
            picked: ' ',
            selected: ' '
        }
    }
}
</script>