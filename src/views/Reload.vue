<template>

  
  <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">

    <div class="md:flex md:items-center md:justify-between">
        <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Reload</h2>
        </div>
        <div class="mt-4 flex md:mt-0 md:ml-4">
          <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Connect</button>
          <router-link to="/reload">
            <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Reload</button>
          </router-link>            
        </div>
    </div>

  <div class="mt-3">    
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
        <dt class="text-sm font-medium text-gray-500 truncate">
          BFT Balance
        </dt>
        <dd class="mt-1 text-3xl font-semibold text-gray-900">
          {{walletBalance}}
        </dd>
      </div>
      <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
        <dt class="text-sm font-medium text-gray-500 truncate">
          wBFT Balance
        </dt>
        <dd class="mt-1 text-3xl font-semibold text-gray-900">
          {{bscBft}}
        </dd>
      </div>
      <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
        <dt class="text-sm font-medium text-gray-500 truncate">
          BNB Balance
        </dt>
        <dd class="mt-1 text-3xl font-semibold text-gray-900">
          {{bscCoin}}
        </dd>
      </div>            
    </dl>
  </div>    


    <div class="max-w-3xl mx-auto">        
        <!-- <h1 class="text-4xl font-extrabold tracking-tight lg:text-6xl">Dashboard</h1> -->
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user'

export default {
  setup() {
    const store = useUserStore()

    return {
      store,
    }
  },

  data() {

      return {
          bscCoin: null,
          bscBft: null,
          walletBalance: null

      }
      
  },

  mounted() {

    this.store.latestBalance().then(()=> {
      this.walletBalance = this.store.walletBalance;
      this.bscCoin = this.store.bscCoin;
      this.bscBft = this.store.bscBft;
    })
    
  },

  methods: {

      // async makan() {
      //     this.store.latestBalance();
      // }
  }
}

</script>