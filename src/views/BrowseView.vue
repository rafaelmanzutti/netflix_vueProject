<template>
  <div class="browse-view">

    <div class="">
      <ProfilesComp msg="Quem está assistindo?" v-if="!userProfile"/>
      <div v-else>
        <h1>Perfil Selecionado</h1>
      </div>
    </div>
    
  </div>
</template>

<script>

import ProfilesComp from '@/components/ProfilesComp.vue'

export default {
  name: 'BrowseView',
  data() {
    return {
      userProfile: '',

    }
  },
  components: {
    ProfilesComp
  }
}
</script>

<style>
.browse-view {
  background-color: black;
  height: 100vh;
}

h1, p {
  color: white;
}
</style>