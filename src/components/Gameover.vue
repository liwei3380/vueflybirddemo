<template>
  <div id="gameover" class="gameover">
    gameover
    <button @click="restart">restart</button>
    <button @click="submit">submit</button>
  </div>
</template>

<script>

export default {
  name: 'gameover',
  methods:{
    restart(){
      this.$router.push('/')
    },
    submit(){
      alert('submit');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gameover{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
