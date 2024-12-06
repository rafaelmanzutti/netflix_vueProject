<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {

  /*mounted() {
    const log = localStorage.getItem('logLocal')
    if(log == "true") {
      this.$router.push('browse')
    }
  }*/
}

</script>

<style >
body, html {
  max-width: 100%;
  max-height: 100%;
  margin: 0;
  padding-bottom: 30px;
  background-color: rgb(22, 22, 22);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(22, 22, 22);
}

</style>
