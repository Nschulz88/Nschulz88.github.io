<template>
  <div id="app">
    <img id="profile-pic" alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hi, my name is Natalie"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#profile-pic {
  max-height: 200px;
  border-radius: 50%;
}
</style>
