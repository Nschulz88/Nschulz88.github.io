<template>
  <div id="app">
    <img id="profile-pic" alt="mouse logo" src="./assets/logo.png">
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
html, body, div, span, iframe,
h1, h2, h3, h4, h5, h6, p,
a, img, strong, ol, ul, li, form,
label, legend, table, footer, header,
menu, nav, output, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
}

body {
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

</style>
