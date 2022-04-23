<template>

  <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">




    <div class="max-w-4xl mx-auto my-4">            


        <div class="md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Latest SIMP</h2>
            </div>
            <!-- <div class="mt-4 flex md:mt-0 md:ml-4">
              <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Connect</button>
              <button type="button" @click="makan()" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Reload</button>          
            </div> -->
        </div>

  <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-6">
    <li v-for="mint in basicNft.allMinteds" :key="mint.nft" class="relative">

      <router-link :to="'/collections/0x2b0BB6d7545B1F0230b2714087DD5e0816701A7B/tokens/' + mint.id">
          <div class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">        
            <img :src="'https://cloudflare-ipfs.com/ipfs/' + mint.imageUrl" alt="" class="object-cover pointer-events-none group-hover:opacity-75" />
            <button type="button" class="absolute inset-0 focus:outline-none">
              <span class="sr-only">View details</span>
            </button>
          </div>
          <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{{mint.name}}</p>
          <p class="block text-sm font-medium text-gray-500 pointer-events-none">{{mint.description}}</p>
    </router-link>          
    </li>
  </ul>        



    </div>

  </div>


</template>

<script>
import { useUserStore } from '@/stores/user'
import { useBasicNftStore } from '@/stores/basicNft'





export default {
  setup() {
    const basicNft = useBasicNftStore()
    const user = useUserStore()

    return {
      basicNft,
      user,
    }
  },

  data() {

      return {
          allMinteds: null
      }
      
  },

  mounted() {
    
    this.basicNft.getAllMinteds();
    
  },

  methods: {


  }
}

</script>