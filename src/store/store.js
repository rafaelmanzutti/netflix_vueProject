import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    emptyProfile: true,
    filmSelected: {},
    filmsMostVote: {},
    filmsPop: {},
    filmsBestOverage: {},
    directorSelected: [],
    castSelected: [],
    genresList: []
  },

  mutations: {
    setEmptyProfile(state, trueOrFalse) {
      state.emptyProfile = trueOrFalse
    },
    setGenresList(state, genresList) {
      state.genresList = genresList
    },
    setFilmSelected(state, film) {
      state.filmSelected = film
    },
    setFilmsMostVote(state, filmsVote) {
      state.filmsMostVote = filmsVote
    },
    setFilmsPop(state, filmsPop) {
      state.filmsPop = filmsPop
    },
    setFilmsBestOverage(state, filmsOverage) {
      state.filmsBestOverage = filmsOverage
    },
    setDirectorSelected(state, directorSelected) {
      state.directorSelected = directorSelected
    },
    setCastSelected(state, castSelected) {
      state.castSelected = castSelected
    },
  },

  actions: {
    getFilmsMostVote(context) {
      const filmsMostVote = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          include_adult: 'false',
          include_video: 'true',
          language: 'en-US',
          page: '1',
          sort_by: 'vote_count.desc'
        },
        headers: {
          accept: 'application/json',
          Authorization: `${process.env.VUE_APP_API_KEY}eyJhdWQiOiIwMjAzY2Y1NjdlZmJjMzJhNzA0N2I1ZTRhYjUxNWFkZCIsIm5iZiI6MTczMDQ2NjczOS4wMjA1OTQsInN1YiI6IjY2NDI2Y2I1YmViODljMDg5YTkyZGQzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WbnVt8e9BBh8llwJmNCU-wyPtZKukppGcZPqV7MKoJ8`
        }
      };
      axios
      .request(filmsMostVote)
        .then(res => {
          context.commit('setFilmsMostVote', res.data.results)
			})
    },
    getFilmsPop(context) {
      const filmsPop = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          include_adult: 'false',
          include_video: 'true',
          language: 'en-US',
          page: '1',
          sort_by: 'popularity.desc'
       },
       headers: {
         accept: 'application/json',
         Authorization: `${process.env.VUE_APP_API_KEY}eyJhdWQiOiIwMjAzY2Y1NjdlZmJjMzJhNzA0N2I1ZTRhYjUxNWFkZCIsIm5iZiI6MTcyNDkzMTU2OS41MzU3Miwic3ViIjoiNjY0MjZjYjViZWI4OWMwODlhOTJkZDMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.9kg_FN8d71qIhoZs0kBb5D5PzBGzGFsT3O5Jp-Se3MM`
        }
      };
      axios
      .request(filmsPop)
        .then(res => {
          context.commit('setFilmsPop', res.data.results)
			})
    },
    getFilmsBestOverage(context) {
      const filmsBestOverage = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          include_adult: 'false',
          include_video: 'true',
          language: 'en-US',
          page: '1',
          sort_by: 'vote_average.desc'
       },
       headers: {
         accept: 'application/json',
         Authorization: `${process.env.VUE_APP_API_KEY}eyJhdWQiOiIwMjAzY2Y1NjdlZmJjMzJhNzA0N2I1ZTRhYjUxNWFkZCIsIm5iZiI6MTcyNDkzMTU2OS41MzU3Miwic3ViIjoiNjY0MjZjYjViZWI4OWMwODlhOTJkZDMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.9kg_FN8d71qIhoZs0kBb5D5PzBGzGFsT3O5Jp-Se3MM`
        }
      };
      axios
      .request(filmsBestOverage)
      .then(res => {
        context.commit('setFilmsBestOverage', res.data.results)
			})
    },

    getCastDirector(context, filmId) {
      const filmCredits = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/' + filmId + '/credits',
        headers: {
         accept: 'application/json',
         Authorization: `${process.env.VUE_APP_API_KEY}eyJhdWQiOiIwMjAzY2Y1NjdlZmJjMzJhNzA0N2I1ZTRhYjUxNWFkZCIsIm5iZiI6MTcyNDkzMTU2OS41MzU3Miwic3ViIjoiNjY0MjZjYjViZWI4OWMwODlhOTJkZDMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.9kg_FN8d71qIhoZs0kBb5D5PzBGzGFsT3O5Jp-Se3MM`
        }
      };
      axios
      .request(filmCredits)
      .then(res => {
        const cast = res.data.cast
        const crew = res.data.crew

        const director = crew
          .filter(worker => worker.job === "Director")
        context.commit('setDirectorSelected', director)
       
        const actors = cast
          .map(actor => actor.name)
        context.commit('setCastSelected', actors)
			})
    },

    getGenresList(context) {
      const GetGenresList = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/genre/movie/list',
        params: {language: 'en'},
        headers: {
          accept: 'application/json',
          Authorization: `${process.env.VUE_APP_API_KEY}eyJhdWQiOiIwMjAzY2Y1NjdlZmJjMzJhNzA0N2I1ZTRhYjUxNWFkZCIsIm5iZiI6MTczMDMwMjAwOS41MjI3OTAyLCJzdWIiOiI2NjQyNmNiNWJlYjg5YzA4OWE5MmRkMzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.builD5sdUN_NMXKnFJoCdJLdY5tnsHRNOVvSEutnbyw`
        }
      };

      axios
        .request(GetGenresList)
        .then(res => {
          let genres = res.data
          context.commit('setGenresList', genres.genres)
        })
    }

  }
})
