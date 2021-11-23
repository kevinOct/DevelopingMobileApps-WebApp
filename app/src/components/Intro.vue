<template>
    <h2>{{Name}}</h2>
    <p>{{Status}}</p>
    <p>{{Interests}}</p>
</template>




<script>
    export default{
        
        props:{
            Name: String, 
            Status: String, 
            Interests: [], 

        }
    }
</script>





<style>
    
</style>