<template>
  <button @click="onClick()" :class="btnClass" class="btn">
    <ion-icon v-if="showIcon==true" :name="icon" size="large"></ion-icon>
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