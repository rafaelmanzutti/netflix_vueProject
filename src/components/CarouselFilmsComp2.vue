<template>
  <div class="carouselComp2">
    <h3>{{ titleCarousel }}</h3>
    
    
     
      <div v-for="(film, id) in films" :key="id" >
        <div v-if="film.backdrop_path && film.poster_path" >
          <div >
            <img :src="'https://image.tmdb.org/t/p/w300' + film.backdrop_path" alt="filmImage" >
            <h6>{{ film.original_title }}</h6>
          </div>
          
          <div class="carouselCardExtend" >
            <div>
              {{ film.release_date }}
            </div>
            <div>more info</div>
            <div class="overview"><p>{{ film.overview }}</p></div>
            <div><span>{{ film.genre_ids }}</span></div>
          </div>
          
        </div>
      </div>
     
  </div>

  
</template>

<script>


export default {
  name: 'CarouselFilmsComp2',
  data() {
    return {
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
.carouselComp2 {
  color: white;
  margin: 0px 15px 30px 15px;
}
.carouselComp2 > h3:first-of-type {
  text-align: left;
  padding-left: 60px;
}


.overview {
  width: 300px;
  max-height: 200px;
  overflow: hidden;
  text-align: left;
  margin-bottom: 10px;
}

</style>
