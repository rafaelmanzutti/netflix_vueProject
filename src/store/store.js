import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: {},
    log: false,
    emptyProfile: true,
    filmSelected: {},
    filmsNew: {},
    filmsPop: {},
    filmsBestOverage: {},
    directorSelected: [],
    castSelected: [],
  },

  mutations: {
    setLog(state, payload) {
      state.log = payload
    },
    setProfile(state, payload) {
      state.profile = payload
    },
    setEmptyProfile(state, payload) {
      state.emptyProfile = payload
    },
    setFilmSelected(state, payload) {
      state.filmSelected = payload
    },
    setFilmsNew(state, payload) {
      state.filmsNew = payload
    },
    setFilmsPop(state, payload) {
      state.filmsPop = payload
    },
    setFilmsBestOverage(state, payload) {
      state.filmsBestOverage = payload
    },
    setDirectorSelected(state, payload) {
      state.directorSelected = payload
    },
    setCastSelected(state, payload) {
      state.castSelected = payload
    },
  },

  actions: {
    getFilmsNew(context) {
      const filmsNew = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          include_adult: 'false',
          include_video: 'true',
          language: 'en-US',
          page: '1',
          sort_by: 'primary_release_date.desc'
       },
       headers: {
         accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjAzY2Y1NjdlZmJjMzJhNzA0N2I1ZTRhYjUxNWFkZCIsIm5iZiI6MTcyNDkzMTU2OS41MzU3Miwic3ViIjoiNjY0MjZjYjViZWI4OWMwODlhOTJkZDMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.9kg_FN8d71qIhoZs0kBb5D5PzBGzGFsT3O5Jp-Se3MM'
        }
      };
      axios
      .request(filmsNew)
        .then(res => {
          context.commit('setFilmsNew', res.data.results)
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
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjAzY2Y1NjdlZmJjMzJhNzA0N2I1ZTRhYjUxNWFkZCIsIm5iZiI6MTcyNDkzMTU2OS41MzU3Miwic3ViIjoiNjY0MjZjYjViZWI4OWMwODlhOTJkZDMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.9kg_FN8d71qIhoZs0kBb5D5PzBGzGFsT3O5Jp-Se3MM'
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
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjAzY2Y1NjdlZmJjMzJhNzA0N2I1ZTRhYjUxNWFkZCIsIm5iZiI6MTcyNDkzMTU2OS41MzU3Miwic3ViIjoiNjY0MjZjYjViZWI4OWMwODlhOTJkZDMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.9kg_FN8d71qIhoZs0kBb5D5PzBGzGFsT3O5Jp-Se3MM'
        }
      };
      axios
      .request(filmsBestOverage)
        .then(res => {
          context.commit('setFilmsBestOverage', res.data.results)
			})
    },

    getCastDirector(context, payload) {
      const filmCredits = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/' + payload + '/credits',
        headers: {
         accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjAzY2Y1NjdlZmJjMzJhNzA0N2I1ZTRhYjUxNWFkZCIsIm5iZiI6MTcyNDkzMTU2OS41MzU3Miwic3ViIjoiNjY0MjZjYjViZWI4OWMwODlhOTJkZDMzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.9kg_FN8d71qIhoZs0kBb5D5PzBGzGFsT3O5Jp-Se3MM'
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

    getConfigDetails() {
      const configDetails = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/configuration',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjAzY2Y1NjdlZmJjMzJhNzA0N2I1ZTRhYjUxNWFkZCIsIm5iZiI6MTcyNTMwMDA4NS40ODMxNDksInN1YiI6IjY2NDI2Y2I1YmViODljMDg5YTkyZGQzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Td3_YY5KqSlKFnE-H5zgTg2WX_2FGiGrOwX2JsKu-UY'
       }
      };
      axios
        .request(configDetails)
        .then(function (response) {
         console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    },

    

  }

})
