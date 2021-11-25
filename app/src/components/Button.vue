<template>
  <button @click="onClick()" :class="btnClass" class="btn" :style="{background:color, color:font_color>
    <ion-icon v-if="showIcon==true" :name="icon" size="large" :style="{color:icon_color}"></ion-icon>
    {{ text }}
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
};
</script>

<style scoped>


button:hover {
  cursor: pointer;
}
</style>
