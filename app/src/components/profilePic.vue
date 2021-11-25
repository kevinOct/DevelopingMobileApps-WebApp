<template>
<form class = "inputfile">
    <label>  
    <input id= "imageInput" type = "file" @change = "onFileSelected">
    <p>Click here to upload your picture!</p>
    </label>

</form>
<div id ="displayImage"></div>
</template>

<script> 

export default{
    name: 'Profilepic', 

    data(){
        return{
        selectedFile:  null,
        }
    },
    methods:{
        onFileSelected(event){
            this.selectedFile= event.target.files[0]
            const reader = new FileReader();
            reader.addEventListener("load", ()=>{
                this.selectedFile = reader.result;
            })
        },


    }
}
</script>

<style scoped>

input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
}

.inputfile{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 80px;
height: 80px;
background: #808AFF;
border-radius: 50%;
cursor: pointer;
text-align: center;
padding: 30px 30px;
}

p {
    color: white;
    font-size: bold;
    font-size: 10px;
}
</style>
