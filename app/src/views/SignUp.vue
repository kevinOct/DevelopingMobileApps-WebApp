<template>
<div class="main_container">
<router-link to="/">Go back</router-link>
<!--<Title class="title" color="#3F414E" :showButton="true"/>-->

<Welcome text="Create your account"/>
<LoginButtons/>
<Form @form-click="this.$router.replace('/welcome')" text="Sign Up"/>

</div>

</template>

<script>
    //import Title from '../components/Title'
    import Welcome from '../components/welcomeTitle.vue'
    import LoginButtons from '../components/loginButtons.vue'
    import Form from '../components/Form.vue'

export default {
  name: 'App',
  components: {
    //Title,
    Welcome,
    LoginButtons,
    Form,
  },
}
</script>


<style scoped> 

.title {
    font-size: 18px;
}

</style>