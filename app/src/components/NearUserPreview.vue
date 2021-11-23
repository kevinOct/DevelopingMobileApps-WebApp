<template>
  <div class="container" :class="highlight ? 'highlight' : 'basic'">
    <div class="inner-container">
      <div class="img-container">
        <Image
          :path="nearUser.image"
        />
       </div>
       <div class="text-container">
            <div class="title-container">
                <h1>{{ nearUser.name }}</h1>
                <h3>{{ nearUser.profiletext }}</h3>
            </div>
            <div class="btn-container">
                <Button
                    @btn-click="openProfile()"
                    text="Connect"
                    btnClass="primary"
                  />
            </div>
        </div>
    </div>

    <div class="buttons-container">

    </div>
  </div>
</template>

<script>
import Image from "../components/UserImage";
import Button from "../components/Button";

export default {
  name: "NearUserPreview",
  props: {
    highlight: Boolean,
    nearUser: Object,
  },
  components: {
    Image,
    Button,
  },
  methods: {
    openProfile(){
         this.$router.push('/Profile');
            }
  },
};
</script>

<style scoped>
.container {
  border: 1px solid var(--lightgrey);
  border-radius: 4px;
  display: inline-block;
  width: 100%;
}

.inner-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between
}

.img-container {
  width: 250px;
}

.text-container{
     display:flex;
     flex-direction: column;
     justify-content: space-between

}

.title-container {
  align-self: flex-start;
}

.btn-container {
  align-self: flex-end;
}
table {
  width: 100%;
}
</style>