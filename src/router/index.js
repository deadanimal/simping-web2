import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Explore from '../views/Explore.vue'
import Factory from '../views/Factory.vue'
import Tokenator from '../views/Tokenator.vue'

import Login from '../views/Login.vue'
import loginViaWeb3 from '../views/loginViaWeb3.vue'

import HomeView from '../views/HomeView.vue'

import { useUserStore } from '@/stores/user';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { requiresAuth: true },
      component: Dashboard
    },     
    {
      path: '/explore',
      name: 'explore',
      component: Explore
    },    
    {
      path: '/factory',
      name: 'factory',
      component: Factory
    },     
    {
      path: '/tokenator',
      name: 'tokenator',
      component: Tokenator
    },   

    {
      path: '/login-via-web3',
      name: 'loginViawWeb3',
      component: loginViaWeb3
    },    
        
    {
      path: '/login',
      name: 'login',
      component: Login
    },    
  ]
})

router.beforeEach((to) => {
  // ✅ This will work because the router starts its navigation after
  // the router is installed and pinia will be installed too
  const store = useUserStore()

  if (to.meta.requiresAuth && !store.isLoggedIn) return '/login'
})


// router.beforeEach(async (to, from, next) => {

//   const user = useUserStore();
//   console.log('from: ', from)
//   console.log('from: ', next)

//   // instead of having to check every route record with
//   // to.matched.some(record => record.meta.requiresAuth)
//   if (to.meta.requiresAuth && !user.isLoggedIn) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     return {
//       path: '/login',
//       // save the location we were at to come back later
//       query: { redirect: to.fullPath },
//     }
//   }
// })

export default router
