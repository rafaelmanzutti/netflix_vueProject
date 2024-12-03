<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {

  methods: {
    ...mapMutations(['setLog', 'setEmptyProfile']),

  },

  mounted() {
    const json = localStorage.getItem('logLocal')
    const profileLocal = JSON.parse(localStorage.getItem('profile')) || []
    if(json == "true" && Object.keys(profileLocal).length > 0) {
      this.setLog(true)
      this.setEmptyProfile(false)
      this.$router.push('browse')
    }
    if(json == "true" && Object.keys(profileLocal).length === 0) {
      this.setLog(true)
      this.$router.push('browse')
    }
  }
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
