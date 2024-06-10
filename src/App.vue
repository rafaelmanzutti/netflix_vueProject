<template>
  <div id="app">
    <nav>
      <router-link to="/">Opening</router-link> |
      <router-link to="/browse">Browse</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/manageProfiles">Gerenciar Perfis</router-link>
    </nav>
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

<style lang="scss">
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
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
