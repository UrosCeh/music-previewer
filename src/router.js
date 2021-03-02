import Vue from 'vue'
import Router from 'vue-router'

import Explore from './views/Explore'
import User from './views/User'
import Contact from './views/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'explore',
      component: Explore
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
