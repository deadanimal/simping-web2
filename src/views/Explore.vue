<template>

  <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">


    <div class="max-w-4xl mx-auto my-4">            



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


    <div class="max-w-4xl mx-auto my-4">            


        <div class="md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Latest Collection</h2>
            </div>
            <!-- <div class="mt-4 flex md:mt-0 md:ml-4">
              <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Connect</button>
              <button type="button" @click="makan()" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Reload</button>          
            </div> -->
        </div>

    <div class="-mx-4 mt-8 overflow-hidden shadow ring-2 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Symbol</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Address</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Creator</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="collection in allCollections" :key="collection.id">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ collection.collectionName }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ collection.collectionSymbol }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" style="word-wrap: break-word;">{{ collection.collectionAddress }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500" style="word-wrap: break-word;">{{ collection.collectionCreator }}</td>
                </tr>
              </tbody>
            </table>
    </div>  



    </div>

  </div>


</template>

<script>
import { useFactoryStore } from '@/stores/factory'
import { useUserStore } from '@/stores/user'
import { useBasicNftStore } from '@/stores/basicNft'





export default {
  setup() {

    const basicNft = useBasicNftStore()
    const factory = useFactoryStore()
    const user = useUserStore()

    return {
      basicNft,
      factory,
      user,
    }
  },

  data() {

      return {
          allCollections: [],
      }
      
  },

  mounted() {
    
    this.factory.getAllCollectionsCreated().then(()=> {
      this.allCollections = this.factory.allCollectionsCreated;
    })
    
  },

  methods: {


  }
}

</script>