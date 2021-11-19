<template>
  <header>
    <div class="navigation">
      <div class="logo" @click="toHome()">

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    toHome() {
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>

<style scoped>
.navigation {
  display: inline-block;
  width: 100%;
  position: relative;
  margin-bottom: 40px;
}
.logo {
  width: 100px;
  float: left;
  display: block;
  cursor: pointer;
}
.nav-item {
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;

  height: 2em;
  align-items: center; 
  justify-content: center; 

  text-decoration: none;
  color: var(--white);
  vertical-align: middle;

  padding: 2px 10px 2px 10px;
  border: 1px solid var(--blue);
  border-radius: 4px;
  background: var(--blue);
}

.nav-item:hover {
  background: var(--hoverblue);
}
</style>