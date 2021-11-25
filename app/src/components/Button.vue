<template>
  <button @click="onClick()" :class="btnClass" class="btn, button" :style="{background:color, color:font_color}">
    <ion-icon v-if="showIcon==true" :name="icon" size="large"> </ion-icon>
    {{text}}
  </button>
  
</template>

<script>
export default {
  name: "Button",
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
      this.$emit("btn-click");
    },
  },
}
</script>

<style>

button:hover {
  cursor: pointer;
}

</style>