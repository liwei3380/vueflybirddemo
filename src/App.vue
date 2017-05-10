<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
body{
  overflow: hidden;
}
#app {
height: 100%;
overflow: hidden;
}
</style>
