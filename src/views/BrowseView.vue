<template>
  <div class="">
    <ProfilesComp msg="Quem está assistindo?" v-if="!user"/>
    <div v-else>
      <h1>Perfil Selecionado</h1>
    </div>

  </div>
</template>

<script>

import ProfilesComp from '@/components/ProfilesComp.vue'

export default {
  name: 'BrowseView',
  data() {
    return {
      user: '',

    }
  },
  components: {
    ProfilesComp
  }
}
</script>