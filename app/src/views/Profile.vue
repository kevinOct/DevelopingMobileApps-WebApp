<template>
  <div class="main_container">
    <Header />
    <figure>
      <img src="../assets/adam.png" alt="">
    </figure>

    <Intro Name="Adam" Status="Active" Interests="Sports, Nature, Music" />
    <Button
        @btn-click="openProfile()"
        text="Connect"
        btnClass="primary"
    />
    
  </div>
</template>

<script>
import Header from '../components/Header.vue'
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
     justify-content: space-between;

}

.btn-container {
  align-self: flex-end;
}

img {
  width: 400px;
}
</style>
