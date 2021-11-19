<template>
<div class="circular-portrait">
  <img :src="path" alt="product-image" />
 </div>
</template>

<script>
export default {
  name: "UserImage",
  props: {
    path: String,
  },
};
</script>

<style scoped>
.circular-portrait {
   position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 100%;
  overflow: hidden;
  border-radius: 50%;
}

.circular-portrait img {
  width: 100%;
  height: auto;
  margin-top: -30px
  }
</style>