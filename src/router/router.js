import Vue from 'vue'
import VueRouter from 'vue-router'
//import store from '@/store/store'
import OpeningView from '../views/OpeningView.vue'
import BrowseView from '../views/BrowseView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'opening',
    component: OpeningView,
    beforeEnter: (to, from, next) => {
      const autenticated = localStorage.getItem('logLocal')
      if(autenticated == 'true'){
        next('/browse')
      } else {
        next()
      }
    }
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
    component: LoginView
  }, {
    path: '/register',
    name: 'register',
    component: RegisterView
  }, {
    path: '*',
    redirect: '/'
  }]


const router = new VueRouter({
  mode: 'history',
  routes,
})

/*router.beforeEach((to, from, next) => {
  
  if(autenticated || to.path !== '/browse'){
    console.log(autenticated)
    next({path: '/browse'})
  } else {
    console.log(autenticated)
    next()
  }
})*/

export default router
