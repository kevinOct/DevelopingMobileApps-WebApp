<template>
    <div class="main_container">
    <div>
      <img class="startpage_image" src="../assets/stockimage1.png" alt="">
    </div>
    <Title color="#3F414E" :showButton="false"/>
    <WelcomeText title="Meet people next to you"/>
    

    <Button @btn-click="goToSignUp" text="SIGN UP" color="#8E97FD"/>
    <LinkToLogInPage/>
    </div>
</template>

<script>
import Title from '../components/Title'
import WelcomeText from '../components/welcomeText.vue'
import Button from '../components/Button.vue'
import LinkToLogInPage from '../components/Signuppage.vue'

export default {
  name: 'App',
  components: {
    Title,
    WelcomeText,
    Button,
    LinkToLogInPage,
  },

  methods: {
    goToSignUp() {
      this.$router.replace('/signup')
    }
  }

}
</script>
