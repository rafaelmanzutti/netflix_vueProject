<template>
  <div class="carouselComp">
    <h1>{{ titleCarousel }}</h1>
    <div class="carouselFilms" v-for="(film, id) in films" :key="id" >
      <div class="carouselCard" v-if="film.backdrop_path && film.poster_path">
        <img :src="'https://image.tmdb.org/t/p/w300' + film.backdrop_path" alt="filmImage"/>
        <h3>{{ film.original_title }}</h3>
        <p>{{film.backdrop_path}}</p>
        <p>{{film.poster_path}}</p>
        <div>
          <div>
            <p>{{ film.release_date }}</p>
          </div>
          <div>Mais Informações</div>
          <p>{{ film.overview }}</p>
          <div>
            <span>{{ film.genre_ids }}</span>
          </div>
        </div>
      </div>
      
    </div> 
  </div>

</template>

<script>


export default {
  name: 'CarouselFilmsComp',
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
.carouselFilms {
  display: block;
  justify-content: center;
  align-items: center;
}
.carouselCard {
  display:block;
  margin: 20px;
}

p {
  color: rgb(250, 81, 81)
}

h1 {
  color: rgb(81, 250, 132)
}

</style>
