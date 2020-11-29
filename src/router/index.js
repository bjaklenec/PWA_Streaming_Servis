import Vue from 'vue'
import VueRouter from 'vue-router'
import Sidebar from '../views/Sidebar.vue'
import About from '../views/About.vue'
import Player from '../components/Player.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Sidebar',
    component: Sidebar,
    children: [
      {
        path: '/edit/:id',
        name: 'Player',
        component: Player
      },
      {
        path: '/add',
        name: 'Player',
        component: Player
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
