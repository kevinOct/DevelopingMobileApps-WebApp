<template>
  <button @click="onClick()" :class="btnClass" :style="{background:color, color:font_color }">
    <ion-icon v-if="showIcon" :name="icon" size="small" :style="{color:icon_color}"></ion-icon>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "smallButton",
  props: {
    text: String,
    btnClass: String,
    showIcon: Boolean,
    icon: String,
    color: String,
    font_color: String,
    icon_color: String,
  },
  methods: {
    onClick() {
      this.$emit("small-btn-click");
      //this.$router.replace('/signup')
    },
  },
};
</script>

<style>

button {
    width: 65px;
    height: 65px;
    border-radius: 25px;
    margin-bottom: 7px;
}

</style>

