import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RegisterView from "./views/RegisterView";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'add',
      component: RegisterView
    }
  ]
})
