<template>
    <div>
        <h2>{{Name}}</h2>
    <p class="status">{{Status}}</p>
    <p class="interests">{{Interests}}</p>

    </div>
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


<style scoped>
h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    text-align: left;
}

.status {
    font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 145.1%;
color: #3F414E;
}

.interests {
    font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 32px;
color: #3F414E;
}

div {
    text-align: left;
    width: 400px;
}

</style>
