<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {

  data() {
    return {
      log: false
    }
  },
  methods: {
    verifyLog() {
      if(this.log === true) {
        this.$router.push('browse')
      }
    }

  },
  mounted(){
    this.verifyLog()
  }
}

</script>

<style >
body, html {
  max-width: 100%;
  max-height: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(22, 22, 22);
}

</style>
