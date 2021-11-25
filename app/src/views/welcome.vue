<template>
<div class="main_container">
    <Greeting/>
    <ProfilePic/>
    <ProfileBio/>
    <p>I'm interested to talk about..</p>
    <SmallButton color="#FFCF86" name="language-outline" icon_color="white"/>
    <Button @btn-click="this.$router.replace('/Overview')" text="Connect" color="#8E97FD"/>
</div>
</template>

<script>
import Greeting from '../components/Greeting.vue'
import ProfileBio from '../components/profilebio.vue'
import ProfilePic from '../components/profilePic.vue'
import Button from '../components/Button.vue'
import SmallButton from '../components/smallButton.vue'

export default {
    name:'welcome',
    components: {
        ProfileBio,
        ProfilePic,
        Greeting,
        Button,
        SmallButton,
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
</style>