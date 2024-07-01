<template>
  <div class="browse-view">

    <div class="">
      <ProfilesComp :profiles="[...profiles]" v-if="!profile"/>
      <div v-else>
        <h1>Perfil Selecionado</h1>
        <p>{{ profile.name }}</p>
        <img :src="profile.img" alt="avatar">
      </div>
    </div>
    
  </div>
</template>

<script>
import barramento from '@/barramento'
import ProfilesComp from '@/components/ProfilesComp.vue'
import axios from 'axios'

export default {
  name: 'BrowseView',
  data() {
    return {
      profile: null,
      profiles: []
    }
  },
  methods: {
    obterPerfis() {
			axios.get('http://localhost:3000/profiles')
        .then(res => {
          this.profiles = (res.data)
			})
		},
  },

  created() {
    this.obterPerfis()
    barramento.onProfileSelected(profile => {
      this.profile = profile
    })
  },

  components: { ProfilesComp }
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