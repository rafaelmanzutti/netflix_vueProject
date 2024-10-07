<template>
  <div class="carou-film-comp">
    
    <div class="click-info" v-if="popupMedio">
      <button class="close-info" @click="closeInfo">X</button>
      <img src="" alt="filmImage300px" >
      
    </div>

    <div class="header">
      <h3 class="title">{{titleCarousel}}</h3>
    </div>
    
    <div class="container">
      <button class="handle left-handle" @click="onHandleClickLeft()">
        <div class="text">&#8249;</div>
      </button>
      <div class="slider">
        <div class="sli">
          <div  v-for="(film, id) in films" :key="id" class="sli2" @mouseenter="mouseEnter(film)" >
            <div v-if="film.backdrop_path && film.poster_path" class="sli3">
              <div >
                <div class="div-image">
                  <img :src="'https://image.tmdb.org/t/p/w500' + film.backdrop_path" alt="filmImage300px" >
                </div>
                
                <h6>{{ film.original_title }}</h6>
                <h6>{{ film.release_date }}</h6>
                <button class="open-info" @click="openInfo">Info</button>
                <div class="overview"><p>{{ film.overview }}</p></div>
                <div><span>{{ film.genre_ids }}</span></div>
              </div>
          
            </div>
          </div>
        </div>
      </div>
      <button class="handle right-handle" @click="onHandleClickRight()">
        <div class="text">&#8250;</div>
      </button>
    </div>
    

  </div>
  
</template>

<script>
export default {
  name: 'CarouselFilmsComp6',

  data() {
    return{
      clickInfo: false,
      popupMedio: false,
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
      else if(this.session === "filmsNew") {
        return this.$store.state.filmsNew
      } else {
        return false
      }
    },

  },

  methods: {

    mouseEnter() {
      this.popupMedio = true
      
    },
    mouseLeave() {
      this.popupMedio = false
      
    },

    closeInfo() {
      this.clickInfo = false
    },
    openInfo() {
      this.clickInfo = true
    },

    onHandleClickLeft(){
      const slider = document.querySelector(".slider")
      const sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"))
      slider.style.setProperty("--slider-index", sliderIndex - 1)  
    },

    onHandleClickRight() {
      const slider = document.querySelector(".slider")
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
      else if(this.session === "filmsNew") {
        this.$store.dispatch('getFilmsNew')
      } else {
        return false
      }
    }
  },

  created() {
    this.startGetFilms()
    this.$store.dispatch('getConfigDetails')
  }

}

</script>

<style scoped>
*, *::after, *::before {
  box-sizing: border-box;
  position: relative;
}

body {
  interpolate-size: allow-keywords;
}

h6 {
  color: white;
  padding: 5px 0 0 0;
  margin: 0;
}

.close-info {
  background-color: blue;
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

.open-info {
  background-color: blue;
  border-radius: 25%;
  border: solid 2px #ffffff;
  color: white;
}



.click-info {
  position: absolute;
  z-index: 10;
  width: 540px;
  height: 500px;
  background-color: rgba(153, 0, 0, 0.247);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  box-shadow: 1px 3px 9px 12px rgba(218, 218, 218, 0.781);


}
.container {
  margin: 10px 0px;
  padding: 0px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.slider {
  --slider-index: 0;
  flex-grow: 1;
  margin: 0 .3rem;
  padding: 0 .1rem;
  transform: translateX(calc(var(--slider-index) * -100%));
  transition: transform 250ms ease-in-out;
  
}

.sli {
  display: flex;
  max-width: 90vw;
}


.slider img {
  aspect-ratio: 16 / 9;
  padding: .25rem;
  border-radius: 1rem;
}

.sli3:not(:hover) {
  height: 8.3lh;
  width: 300px;
}
.sli3:hover {
  width: 500px;
  background-color: rgba(126, 126, 126, 0.363);
  border-radius: 1rem;
}
.sli3 {
  max-width: 500px;
  overflow: hidden;
  transition: all .2s ease-in-out;
}


.div-image img {
  width: 100%;
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


.header {
  display: flex;
  justify-content: space-between;
}

.title {
  margin: 30px 50px 0 50px;
  color: white;
}

</style>
