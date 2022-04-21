<template>

  <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">

    <div class="md:flex md:items-center md:justify-between">
        <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Explore</h2>
        </div>
        <div class="mt-4 flex md:mt-0 md:ml-4">
          <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Connect</button>
          <button type="button" @click="makan()" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Reload</button>          
        </div>
    </div>

    {{aass}}   

    <div class="max-w-3xl mx-auto">     
      {{aass}}   
        <!-- <h1 class="text-4xl font-extrabold tracking-tight lg:text-6xl">Dashboard</h1> -->
    </div>

  </div>


</template>

<script>
import { useUserStore } from '@/stores/user'
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider('https://rpc.chainbifrost.com');

export default {
  setup() {
    const store = useUserStore()

    return {
      store,
    }
  },

  data() {

      return {
          aass: 0.00
      }
      
  },

  methods: {

      async makan() {
          const isLoggedIn = this.store.isLoggedIn;
          //const as = await provider.getBlockNumber();
          let balance = await provider.getBalance("0xF3F07bF98cd2D5B57ED39206F657E4eB1f477B45")
          balance = ethers.utils.formatEther(balance)
          this.aass = balance;
          this.store.latestBalance();
          console.log('as: ', balance)
          console.log("makan..", isLoggedIn)
      }
  }
}

</script>