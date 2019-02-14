import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RegisterView from "./views/RegisterView";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add',
      name: 'add',
      component: RegisterView
    }
  ]
})
