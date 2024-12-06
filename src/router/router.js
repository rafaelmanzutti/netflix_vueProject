import Vue from 'vue'
import VueRouter from 'vue-router'
import OpeningView from '../views/OpeningView.vue'
import BrowseView from '../views/BrowseView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'


Vue.use(VueRouter)

function ifNotAuthenticated(to, from, next) { 
  const autenticated = localStorage.getItem('logLocal')
      if(autenticated == 'true'){
        next('/browse')
      } else {
        next()
      }
}

const routes = [
  {
    path: '/',
    name: 'opening',
    component: OpeningView,
    beforeEnter: ifNotAuthenticated
  }, {
    path: '/browse',
    name: 'browse',
    component: BrowseView,
    beforeEnter: (to, from, next) => {
      const autenticated = localStorage.getItem('logLocal')
      if(autenticated == 'true'){
        next()
      } else {
        next(false)
      }
      
    }
  }, {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter: ifNotAuthenticated
  }, {
    path: '/register',
    name: 'register',
    component: RegisterView,
    beforeEnter: ifNotAuthenticated
  }, {
    path: '*',
    redirect: '/'
  }]

  
const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
