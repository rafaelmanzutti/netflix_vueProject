<template>
  <div class="row">

    <div class="header">
      <h3 class="title">Title</h3>
      <div class="progress-bar"></div>
    </div>
    
    <div class="container">
      <button class="handle left-handle" @click="onHandleClickLeft()">
        <div class="text">&#8249;</div>
      </button>

      <div class="slider">
        <img src="https://via.placeholder.com/210/00FF00?text=1">
        <img src="https://via.placeholder.com/220/00FF00?text=2">
        <img src="https://via.placeholder.com/230/00FF00?text=3">
        <img src="https://via.placeholder.com/240/00FF00?text=4">
        <img src="https://via.placeholder.com/250/00FF00?text=5">
        <img src="https://via.placeholder.com/260/00FF00?text=6">
        <img src="https://via.placeholder.com/270/00FF00?text=7">
        <img src="https://via.placeholder.com/280/00FF00?text=8">
        <img src="https://via.placeholder.com/290/00FF00?text=9">
        <img src="https://via.placeholder.com/290/00FF00?text=10">
        <img src="https://via.placeholder.com/290/00FF00?text=11">
        <img src="https://via.placeholder.com/290/00FF00?text=12">
        <img src="https://via.placeholder.com/290/00FF00?text=13">
        <img src="https://via.placeholder.com/290/00FF00?text=14">
        <img src="https://via.placeholder.com/290/00FF00?text=15">
        <img src="https://via.placeholder.com/290/00FF00?text=16">
        <img src="https://via.placeholder.com/290/00FF00?text=17">
        <img src="https://via.placeholder.com/290/00FF00?text=18">
        <img src="https://via.placeholder.com/290/00FF00?text=19">
        <img src="https://via.placeholder.com/290/00FF00?text=20">
      </div>

      <button class="handle right-handle" @click="onHandleClickRight()">
        <div class="text">&#8250;</div>
      </button>
    </div>
  </div>
  

  
</template>

<script>
export default {
  name: 'CarouselFilmsComp3',

  data() {
    return{
      imgMedium: false,
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
    }
  },

  methods: {
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
}

body {
  
}

.container {
  margin: 10px;
  padding: 0;
  max-width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.slider {
  --slider-index: 0;
  display: flex;
  flex-grow: 1;
  margin: 0 .3rem;
  padding: 0 .1rem;
  transform: translateX(calc(var(--slider-index) * -100%));
  transition: transform 250ms ease-in-out;
  
}

.slider img {
  flex: 0 0 16.7%;
  aspect-ratio: 16 / 9;
  padding: .25rem;
  border-radius: 1rem;
  overflow: hidden;
}

.handle {
  border: none;
  border-radius: .8rem;
  flex-grow: 0;
  background-color: rgba(126, 126, 126, 0.5);
  z-index: 10;
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

.handle:hover,
.handle:focus {
  background-color: rgb(83, 83, 83);
}

.text {
  transition: transform 150ms ease-in-out;
}

.handle:hover .text, 
.handle:focus .text {
  transform: scale(1.2);
}

.row {

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
