<template>
  <div class="get-profile">
    <div class="get-profile-box" v-for="(profile, id) in profiles" :key="id">
      <div>
        <img style="width: 85%" :src="profile.img" alt="avatar">
        <p>{{ profile.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GetProfilesComp',
  data() {
    return {
      profiles: [],
      profileSelect: {}
    }
  },
  computed:{
    
  },
  
  methods: {
    obterPerfis() {
			axios.get('http://localhost:3000/profiles')
        .then(res => {
          this.profiles = (res.data)
			})
		},
    

  },
  mounted(){
    this.obterPerfis()
  }

}
</script>

<style scoped>
.get-profile {
  display: flex;
  justify-content: center;
  align-items: center;
}
.get-profile-box {
  display:block;
  margin-top: 30px;
}

@media screen and (min-width: 25em){
  p { font-size: calc( 12px + (24 - 12) * (100vw - 335px) / (2500 - 335) ); }
  h1 { font-size: calc( 24px + (85 - 24) * (100vw - 335px) / (2500 - 335) ); }
}
</style>