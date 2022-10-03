//1. lifecycle adalah serangkaian langkah inisialisasi(nilai untuk mendeklasikan variable/objek) sampai komponen nya berhasil di jalankan.
<template>
 <h1>USER</h1>
</template>
//2. lifecycle dibagi menjadi 4 tipe, yaitu create, mount, updating, dan destruction.
<script>	
export default{
    beforeCreate(){
        console.log('before create');
        //BEFORECREATE dijalankan pertama kali ketika data belum diinisiasi oleh Vue
    },
    created(){
        console.log('created');
        //CREATED dieksekusi oleh vue ketika data selesai dijalankan.
    },
    beforeMount(){
        console.log('before mount');
        //BEFOREMOUNT dijalankan oleh Vue sebelum template pada sebuah component ditampilkan tetapi setelah template di-compile
    },
    mounted(){
        console.log('mounted');
        //MOUNTED dieksekusi oleh vue setelah template ditampilkan.
    },
    beforeUpdate(){
        console.log('before update');
        //BEFOREUPDATE di eksekusi oleh vue ketika stage data sudah di update pada sebuah component, tepat sebelum DOM menampilkan ulang template.
    },
    updated(){
        console.log('updated');
        //UPDATED dieksekusi oleh Vue ketika data berhasil di-update 
    },
    beforeDestroy(){
        console.log('before destroy');

    },
    destroyed(){
        console.log('destroy');
        //DESTROYED dijalankan setelah sebuah instance dihapus sepenuhnya
    }
}
</script>
 