<template>
  <div id="app">
    <Toggle v-model="isChecked" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false
    }
  }
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>