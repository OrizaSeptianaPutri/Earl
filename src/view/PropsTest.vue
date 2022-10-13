//props digunakan untuk melakukan komunikasi data antara komponen
<template>
    <div>
        <h1>Hello {{nama}}</h1>
    </div>
</template>
<script>
export default {
    nama:"test",
    props:['nama']
}
</script>