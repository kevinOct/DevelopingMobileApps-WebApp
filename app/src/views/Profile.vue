<template>
  <div class="container">
    <Header />
    <figure>
      <img src="../assets/adam.png" alt="">
    </figure>
  </div>
  <div class="text-container">
    <Intro Name="Adam" Status="Active" Interests="Sports, Nature, Music" />

  <div class="btn-container">
                  <Button
                      @btn-click="openProfile()"
                      text="Connect"
                      btnClass="primary"
                    />
              </div>
              </div>
</template>

<script>
import Header from '../components/header.vue'
import Button from '../components/Button.vue'
import Intro from '../components/Intro.vue'


export default {
  name: 'Profile',
  components: {
    Header,
    Button, 
    Intro,
  },

  }
</script>

<style scoped>
.text-container{
     display:flex;
     flex-direction: column;
     justify-content: space-between

}

.btn-container {
  align-self: flex-end;
}
</style>
