<template>
  <div class="carou-film-comp">
    
    <div class="click-info" v-if="clickInfo">
      <div class="img-poster">
        <img :src="'https://image.tmdb.org/t/p/w500' + filmSelected.poster_path" alt="filmPoster500px" >
        <button class="close-info" @click="closeInfo">X</button>
      </div>
      <div class="info-poster">
        <div class="poster-film-title"><h5>{{ filmSelected.original_title }}</h5></div>
        <div class="poster-director-date">
          <div><span>director: {{ director }}</span></div>
          <div><span>{{ filmSelected.release_date.slice(0, 4) }}</span></div>
        </div>
        <div class="poster-genres"><p>genres: {{ genresSelected }}</p></div>
        <div class="poster-overview"><p>" {{ filmSelected.overview }} "</p></div>
        <div class="poster-cast"><p>cast: {{ castSelected }}</p></div>
      </div>
    </div>

    <div class="header-carousel">
      <h4 class="title">{{titleCarousel}}</h4>
    </div>
    
    <div class="container">
      <button class="handle left-handle" @click="onHandleClickLeft(session)">
        <div class="text">&#8249;</div>
      </button>
      <div :id="session" class="slider">
        
          <div  v-for="(film, id) in films" :key="id" class="sli2">
            <div v-if="film.backdrop_path && film.poster_path" class="sli3">
              <div>
                <div class="div-image">
                  <img :src="'https://image.tmdb.org/t/p/w500' + film.backdrop_path" alt="filmImage300px" >
                </div>
                <h6>{{ film.original_title }}</h6>
                <div class="date-button-info">
                  <h6>{{ film.release_date.slice(0, 4) }}</h6>
                  <button class="open-info" @click="openInfo(film)">Info</button>
                </div>
                <div class="overview">
                  <div><p>"{{ film.overview }}"</p></div>
                </div>
              </div>
            </div>
          </div>
        
      </div>
      <button class="handle right-handle" @click="onHandleClickRight(session)">
        <div class="text">&#8250;</div>
      </button>
    </div>
    

  </div>
  
</template>

<script>
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
export default {
  
  data() {
    return{
      clickInfo: false,
      director: ""
    }
  },

  props: {
    titleCarousel: String,
    session: String
  },

  computed: {
    
    films() {
      if(this.session === "filmsBestOverage") {
        return this.$store.state.filmsBestOverage
      }
      else if(this.session === "filmsPop") {
        return this.$store.state.filmsPop
      }
      else if(this.session === "filmsMostVote") {
        return this.$store.state.filmsMostVote
      } else {
        return false
      }
    },
    filmSelected() {
      return this.$store.state.filmSelected
    },
    genresList() {
      return this.$store.state.genresList
    },

    genresSelected() {
      const genres = this.genresList
      const idsGenresFilmSelected = this.filmSelected.genre_ids
      let genresSelected = ""
      for(let i = 0; i < idsGenresFilmSelected.length; i++){
        for(let j = 0; j < genres.length; j++){
          if(genres[j].id == idsGenresFilmSelected[i]){
            if(idsGenresFilmSelected.length > (i+1)) {
              genresSelected += genres[j].name + ", "
            }
            else if(idsGenresFilmSelected.length == (i+1)) {
              genresSelected += genres[j].name + "."
            }
          }
        }
      }
      return genresSelected
    },

    directorSelected() {
      return this.$store.state.directorSelected
    },
    
    castSelected() {
      let castName = ""
      const castSelectedArray = this.$store.state.castSelected
      castSelectedArray.forEach(function (actors, i) {
        if(i == (castSelectedArray.length) -1){
          castName += actors +"."
        } else { castName += actors +", " }
      });

      return castName
    },
   
  },

  methods: {
    ...mapMutations(['setFilmSelected']),
    ...mapActions(['getCastDirector']),

    setProfileSelected(profile) {
      this.setProfile(profile)
    },

    closeInfo() {
      this.clickInfo = false
    },
    openInfo(film) {
      this.clickInfo = true
      this.setFilmSelected(film)
      this.getCastDirector(film.id)
    },

    onHandleClickLeft(elementId){
      const slider = document.getElementById(elementId)
      const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
      slider.style.setProperty("--slider-index", sliderIndex - 1)  
    },

    onHandleClickRight(elementId) {
      const slider = document.getElementById(elementId)
      const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
      slider.style.setProperty("--slider-index", sliderIndex + 1)
    },

    startGetFilms() {
      if(this.session === "filmsBestOverage") {
        this.$store.dispatch('getFilmsBestOverage')
      }
      else if(this.session === "filmsPop") {
        this.$store.dispatch('getFilmsPop')
      }
      else if(this.session === "filmsMostVote") {
        this.$store.dispatch('getFilmsMostVote')
      } else {
        return false
      }
    },

  },

  created() {
    this.startGetFilms()
  },

  watch: {
    directorSelected() {
      this.director = this.$store.state.directorSelected[0].name
    }
  }

}

</script>

<style scoped>
*, *::after, *::before {
  box-sizing: border-box;
  position: relative;
}

h1, h2, h3, h4, h5, h6, p {
  color: white;
  padding: 5px 0 0 0;
  margin: 0;
}
span {
  color: white;
}

.carou-film-comp {
  background-color: rgb(22, 22, 22);
}

.click-info {
  position: absolute;
  z-index: 10;
  width: 600px;
  height: auto;
  background-color: rgba(80, 80, 80, 0.815);
  top: 0%;
  left: 50%;
  transform: translate(-50%, -2%);
  box-shadow: 1px 3px 10px 5px rgba(194, 193, 193, 0.781);
  justify-content: center;
  align-items: center;
  padding: 30px;
}
.close-info {
  background-color: rgba(56, 56, 56, 0.164);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: solid 2px #ffffff;
  color: white;
  font-size: 2rem;
  position: absolute;
  right: 20px;
  z-index: 11;
}
.img-poster {
  position: relative;
  width: 540px;
  height: auto;
  background-color: rgb(22, 22, 22);
  padding: 20px 0;
}
.info-poster {
  width: 540px;
  background-color: rgb(22, 22, 22);
  padding: 5px 40px;
}
.poster-film-title {
  padding: 20px 0 20px 0;
}
.poster-director-date {
  padding: 10px 0 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.poster-genres {
  padding: 5px 0 10px 0;
  text-align: start;
}
.poster-overview {
  padding: 10px 0 10px 0;
  text-align: start;
}
.poster-cast {
  padding: 10px 0 10px 0;
  text-align: start;
}

.header-carousel {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.title {
  margin: 15px 50px 0 50px;
  color: white;
}

.open-info {
  background-color: rgb(0, 0, 199);
  width: 50px;
  border-radius: 25px;
  border: solid 2px #ffffff;
  color: white;
}

.container {
  margin: 10px 0px;
  padding: 0px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background-color: rgb(22, 22, 22);
}

.slider {
  display: flex;
  max-width: 90vw;
  --slider-index: 0;
  flex-grow: 1;
  margin: 0 .3rem;
  padding: 0 .1rem;
  transform: translateX(calc(var(--slider-index) * -100%));
  transition: transform 250ms ease-in-out;
}

.slider img {
  aspect-ratio: 16 / 9;
  padding: .25rem;
  border-radius: 1rem;
}

.sli2 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto
}

.sli3:not(:hover) {
  height: 8.8lh;
  width: 300px;
  overflow: hidden;
  transition: all .2s ease-in-out;
}
.sli3:hover {
  width: 500px;
  height: 95%;
  background-color: rgb(17, 17, 17);
  border-radius: 1rem;
  box-shadow: 1px 3px 5px 3px rgba(112, 112, 112, 0.781);
}

.div-image:hover {
  width: 500px;
}
.div-image img {
  width: 100%;
}
.date-button-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px 10px 30px;
}
.overview {
  padding: 10px 30px 20px 20px;
  text-align: start;
  margin-bottom: 20px;
}

.handle {
  border: none;
  border-radius: .8rem;
  flex-grow: 0;
  background-color: rgba(126, 126, 126, 0.5);
  z-index: 3;
  height: 10.5rem;
  width: 5rem;
  margin: .25rem 0;
  padding: 0 .5rem;
  cursor: pointer;
  color: white;
  font-size: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 150ms ease-in-out;
  
}

.left-handle {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.right-handle {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.handle:hover
 {
  background-color: rgba(83, 83, 83, 0.603);
}

.text {
  transition: transform 150ms ease-in-out;
}

.handle:hover .text, 
.handle:focus .text {
  transform: scale(1.2);
}

</style>
