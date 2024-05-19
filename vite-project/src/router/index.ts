import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/Login.vue'
import SignupPage from '@/views/Signup.vue'
import HomePage from '@/views/Home.vue'
import Pokedex from '@/views/Pokedex.vue'
import TradingPage from '@/views/Trading.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      component: Pokedex
    },
    {
      path: '/trading',
      name: 'trading',
      component: TradingPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
