import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '@/supabase'
import LoginPage from '@/views/Login.vue'
import SignupPage from '@/views/Signup.vue'
import HomePage from '@/views/Home.vue'
import Pokedex from '@/views/Pokedex.vue'
import SettingsPage from '@/views/Settings.vue'

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
      component: HomePage,
      meta: { requiresAuth: true }
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      component: Pokedex,
      meta: { requiresAuth: true }
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsPage,
      meta: { requiresAuth: true }
    },
  ]
})

async function getUser(next: any) {
	const currentUser = await supabase.auth.getSession();
	if (currentUser.data.session === null) {
		next('/')
	}
	else {
		next();
	}
}
router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth) {
		getUser(next);
	}
	else {
		next();
	}
})

export default router