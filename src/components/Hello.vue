<template>
  <div id="hello" class="hello">
   
  </div>
</template>

<script>
import '../js/hilo-standalone.min.js'
import game from  '../js/game.js'

export default {
  name: 'hello',
  mounted(){
    var vm = this
    game.init(document.getElementById('hello'),function(data){
      console.log(data)
      vm.$router.push('/gameover')
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
