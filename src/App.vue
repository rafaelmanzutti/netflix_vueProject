<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {

  methods: {
    ...mapMutations(['setEmptyProfile']),

  },

  mounted() {
    const log = localStorage.getItem('logLocal')
    const profileLocal = JSON.parse(localStorage.getItem('profile')) || []
    if(log == "true" && Object.keys(profileLocal).length > 0) {
      this.setEmptyProfile(false)
      this.$router.push('browse')
    }
    if(log == "true" && Object.keys(profileLocal).length === 0) {
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
