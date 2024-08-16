<template>
  <div class="browse-view">

    <div class="">
      <ProfilesComp :profiles="[...profiles]" v-if="emptyProfile"/>
      <div v-else>
        <h1>Perfil Selecionado</h1>
        <p>{{ profile.name }}</p>
        <img :src="profile.img" alt="avatar">
      </div>
    </div>
    
  </div>
</template>

<script>
import ProfilesComp from '@/components/ProfilesComp.vue'
import axios from 'axios'

export default {
  name: 'BrowseView',
  data() {
    return {
      profiles: [],
    }
  },
  computed: {
    profile() {
      return this.$store.state.profile
    },
    emptyProfile() {
      return this.$store.state.emptyProfile
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
    //if(this.profile.length === 0) {
   //   this.perfilVazio = true
   // } else {
   //   this.perfilVazio = false
   // }
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