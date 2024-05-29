<template>
  <div class="profiles-comp">

    <div class="full-page">
      <div class="centralizer">
        <h1>{{ msg }}</h1>
        <div>

        </div>
        <button @click="$router.push('manageProfiles')">Gerenciar perfis</button>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'ProfilesComp',
  props: {
    msg: String
  }
}
</script>


<style scoped>
.profiles-comp {
  padding: 40px;
}
.full-page {
  background-color: rgb(248, 211, 156);
  height: calc(100vh - 80px);
}

</style>
