<template>

  <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">



    <div class="max-w-4xl mx-auto">            


        <div class="md:flex md:items-center md:justify-between py-4">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Latest SIMPs</h2>
            </div>
        </div>


        <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-6">
            <li v-for="mint in mintMetadata" :key="mint.name" class="relative">
                <router-link :to="'/collections/' + mint.collectionId + '/tokens/' + mint.tokenId">
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
import { useFactoryStore } from '@/stores/factory'
import { useMarketStore } from '@/stores/market'
import { useUserStore } from '@/stores/user'
import { useBasicNftStore } from '@/stores/basicNft'
import { ethers } from "ethers";
import axios from 'axios';



export default {
  setup() {

    const basicNft = useBasicNftStore()
    const factory = useFactoryStore()
    const market = useMarketStore()
    const user = useUserStore()

    return {
      basicNft,
      factory,
      market,
      user,
    }
  },

  data() {

      return {
          allMints: [],
          mintMetadata: [],
      }
      
  },

  mounted() {
    
    this.factory.getAllMints().then(()=> {
      this.allMints = this.factory.allMints;
      this.mintMetadata = []


          for (var i=0;i < this.allMints.length; i++) {

              let outputData = {
                  collectionId: this.allMints[i].collectionId,
                  tokenId: ethers.utils.formatUnits(this.allMints[i].tokenId, 0),
              }
              this.loadMetadata(this.allMints[i].tokenUri).then((data)=> {
                  outputData['name'] = data.name;
                  outputData['description'] = data.description;
                  outputData['imageUrl'] = data.imageUrl;
                  this.mintMetadata.push(outputData)    
              })
                              
          }
          

    })

    this.market.getAllForSales().then(()=> {
        console.log(this.market.allForSales)
    })


  },

  methods: {

      async loadMetadata(tokenUri) {
            const response = await axios.get('https://cloudflare-ipfs.com/ipfs/' + tokenUri + '/metadata.json')     
            const maxLength = response.data['image'].length;
            let imageUrl = response.data['image'].substring(7, maxLength)
            let data = response.data;
            //data['id'] = tokenId;
            data['imageUrl'] = imageUrl;      
            return data;     
      }    


  }
}

</script>