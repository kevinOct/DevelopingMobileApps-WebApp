<template>
    <div class="main_container">
    <router-link to="/">Go back</router-link>
    <!--<Title class="title" color="#3F414E" :showButton="true"/>-->
    <Welcome text="Welcome back!"/>
    <LoginButtons/>
    <Form @form-click="this.$router.replace('/Overview')" text="Log In"/>
    </div>
</template>

<script>
    //import Title from '../components/Title'
    import Welcome from '../components/welcomeTitle.vue'
    import LoginButtons from '../components/loginButtons.vue'
    import Form from '../components/Form.vue'

    export default {
        components: {
            //Title,
            LoginButtons,
            Welcome,
            Form,
        }
    }
</script>


<style scoped> 

.title {
    font-size: 18px;
}

@media all and (max-width: 415px){
    Title {
        width: 250px;
    }
    Welcome {
        font-size: 10px;
    }
}

</style>
