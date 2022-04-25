import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Explore from '../views/Explore.vue'
import Factory from '../views/Factory.vue'
import InstagramLogin from '../views/InstagramLogin.vue'
import FactoryInstagram from '../views/FactoryInstagram.vue'
import Tokenator from '../views/Tokenator.vue'
import Reload from '../views/Reload.vue'
import Admin from '../views/Admin.vue'
import Swap from '../views/Swap.vue'
import Profile from '../views/Profile.vue'

import Collections from '../views/Collections.vue'
import Token from '../views/Token.vue'

import FacebookMinter from '../views/FacebookMinter.vue'

import Login from '../views/Login.vue'
import loginViaWeb3 from '../views/LoginViaWeb3.vue'

import HomeView from '../views/HomeView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import TermsView from '../views/TermsView.vue'
import GuidesView from '../views/GuidesView.vue'
import StatusView from '../views/StatusView.vue'

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
      path: '/privacy',
      name: 'privacy',
      component: PrivacyView
    },
    
    {
      path: '/terms',
      name: 'terms',
      component: TermsView
    },   

    {
      path: '/guides',
      name: 'guides',
      component: GuidesView
    },   

    {
      path: '/status',
      name: 'status',
      component: StatusView
    },     

    {
      path: '/profile/:address',
      name: 'profile',
      component: Profile
    },      

    {
      path: '/admin',
      name: 'admin',
      meta: { requiresAuth: true },
      component: Admin
    },        

    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { requiresAuth: true },
      component: Dashboard
    },     

    {
      path: '/reload',
      name: 'reload',
      meta: { requiresAuth: true },
      component: Reload
    },      

    {
      path: '/explore',
      name: 'explore',
      component: Explore
    },    

    {
      path: '/factory',
      name: 'factory',
      meta: { requiresAuth: true },
      component: Factory
    }, 

    {
      path: '/instagram-login',
      name: 'instagram-login',
      component: InstagramLogin
    },      

    {
      path: '/factory/instagram',
      name: 'factory-instagram',
      meta: { requiresAuth: true },
      component: FactoryInstagram
    },     

    {
      path: '/collections/:id',
      name: 'collections',
      meta: { requiresAuth: true },
      component: Collections
    },      
    
    {
      path: '/collections/:collectionId/tokens/:tokenId',
      name: 'token',
      meta: { requiresAuth: true },
      component: Token
    },           

    {
      path: '/tokenator',
      name: 'tokenator',
      meta: { requiresAuth: true },
      component: Tokenator
    },  
    
    {
      path: '/facebook-minter',
      name: 'facebook-minter',
      meta: { requiresAuth: true },
      component: FacebookMinter
    }, 
    
    {
      path: '/swap',
      name: 'swap',
      meta: { requiresAuth: true },
      component: Swap
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
