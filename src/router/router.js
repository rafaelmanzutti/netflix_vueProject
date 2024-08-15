import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/store'
import OpeningView from '../views/OpeningView.vue'
import BrowseView from '../views/BrowseView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'opening',
    component: OpeningView
  }, {
    path: '/browse',
    name: 'browse',
    component: BrowseView,
    beforeEnter: (to, from, next) => {
      const autenticado = store.state.log
      autenticado ? next() : next(false)
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
  routes
})

export default router
