<template>
  <div class="browse-view">

    <div >
      <ProfilesComp :profiles="[...profiles]" v-if="emptyProfile"/>
      <div v-else>
        <div class="header-browse">
          <div class="header-logos">
            <div class="header-logo-netflix">
              <img src="../../public/netflix_official_logo_icon_168085.png" alt="logo-netflix">
              <div>academic clone</div>
            </div>
            <div class="header-logo-tmdb">
              <div class="box-img-tmbd">
                <img src="../../public/tmdb.jpg" alt="logo-tmdb">
              </div>
              <div>
                <span class="text-small">"This product uses the TMDB API but is not endorsed or certified by TMDB."</span>
              </div>
            </div>
          </div>
          <div class="header-info">
            <div class="profile-name">{{ profileLocal.name }}</div>
            <img :src="profileLocal.img" alt="avatar" :style="{'width': '30px'}">
            <button @click="cleanLog()">Sair</button>
          </div>
        </div>
        
        <CarouselFilmsComp2 titleCarousel="Filmes Populares" session="filmsPop" />
        <CarouselFilmsComp2 titleCarousel="Filmes Melhores Avaliados" session="filmsBestOverage" />
        <CarouselFilmsComp2 titleCarousel="Filmes Mais Votados" session="filmsMostVote" />
      </div>
    </div>
    
  </div>
</template>

<script>
import ProfilesComp from '@/components/ProfilesComp.vue'
import CarouselFilmsComp2 from '@/components/CarouselFilmsComp2.vue'
import axios from 'axios'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
  
  components: {ProfilesComp, CarouselFilmsComp2},
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
    },
    profileLocal() {
      const profile = JSON.parse(localStorage.getItem('profile')) || []
      return profile
    }
    
  },
  methods: {
    ...mapMutations(['setLog', 'setEmptyProfile']),
    ...mapActions([ 'getGenresList']),

    obterPerfis() {
			axios.get('http://localhost:3000/profiles')
        .then(res => {
          this.profiles = (res.data)
			})
		},
    cleanLog() {
      this.setLog(false)
      localStorage.setItem('logLocal', "false")
      this.setEmptyProfile(true)
      localStorage.removeItem('profile')
      this.$router.push('/')
    },
  },
  created() {
    this.obterPerfis()
    this.getGenresList()
  }
}
</script>

<style>

h1, p {
  color: white;
}
.browse-view {
  background-color: rgb(22, 22, 22);
}
.header-browse{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0px 20px 25px;
  border-bottom: solid 1px rgb(0, 0, 0);
}
.header-logos {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 900px;
  background-color: rgb(22, 22, 22);
  color: white;
  padding: 5px 10px;
}
.header-logo-tmdb {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0px;
}
.header-logo-netflix {
  width: 200px;
}
.header-logo-netflix img {
  
  width: 100%;
}
.box-img-tmbd {
  width: 120px; 
}
.box-img-tmbd img {
  width: 90%;
}
.text-small {
  font-size: .8rem;
}
.header-info{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  color: white;
  background-color: rgb(22, 22, 22);
  border: solid 1px #000000;
  border-radius: 10px;
  padding: 10px;
  margin-right: 15px;
}
.header-info button {
  background-color: red;
  padding: 5px 10px;
  border-radius: 15%;
}
.profile-name {
  justify-content: center;
  align-items: center;
}


</style>