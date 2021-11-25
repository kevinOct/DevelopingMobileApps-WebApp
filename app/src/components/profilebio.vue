<template>
<p>Bio</p>

<form @submit="onSubmit" class="add-form" >
    <div class = "form-control">
        <input type = "text"  name= "bio" v-model= "bio" placeholder= "Just approach me!">
    </div>

</form>
</template>

<script>
export default {
    name: 'Profilebio',
    props:{
        justify: String,
    },
     data(){
        return{
            bio: '',
        }
    }
}

</script>

<style scoped>
p {
    /*border: 1px solid steelblue;*/
    width: 300px;
    text-align: left;
    font-size: 16px;
    color: #3F414E;
}


.add-form {
    /*border: 1px solid steelblue;*/
    display: flex;
    width: 330px;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
    margin-top: -25px;
}

.form-control {
  margin: 20px, 0;
  width: 100%;
}

.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 50px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 16px;
  color: #A1A4B2;
  background: #F2F3F7;
  border-radius: 15px;
  border: none;
}


</style>

