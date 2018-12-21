<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  position: relative;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
}
</style>
