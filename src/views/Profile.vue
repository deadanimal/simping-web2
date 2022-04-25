<template>

  <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">




    <div class="max-w-4xl mx-auto my-8">            

        <div class="md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">SIMP from Tiktok</h2>
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







    <div class="max-w-4xl mx-auto my-8">            

        <div class="md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">SIMP from Instagram</h2>
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




    <div class="max-w-4xl mx-auto my-8">            

        <div class="md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Minted SIMP</h2>
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


import { useUserStore } from '@/stores/user'
import { useFactoryStore } from '@/stores/factory'
import axios from 'axios';
import { ethers } from "ethers";


export default {
  setup() {
    const factory = useFactoryStore()
    const user = useUserStore()

    return {
      factory,
      user,
    }
  },

  data() {

      return {
          profile: null,
          collections: [],
          mints: [],
          mintMetadata: []
      }
      
  },

  mounted() {

      this.profile = this.$route.params['address'];      
    
    //   this.factory.getCollectionsCreatedByUser(this.profile).then((data)=> {

    //       console.log(data)
        
    //     this.collections = [];
    //     this.collections = this.factory.collectionsCreated;

    //     for (var i=0;i < this.collections.length; i++) {
    //         //console.log(this.collections[i]);
    //     }


    //   })

      this.factory.getMintsByUser(this.profile).then(()=> {
          
          this.mints = this.factory.mints;
          this.mintMetadata = []

          for (var i=0;i < this.mints.length; i++) {

              let outputData = {
                  collectionId: this.mints[i].collectionId,
                  tokenId: ethers.utils.formatUnits(this.mints[i].tokenId, 0),
              }
              this.loadMetadata(this.mints[i].tokenUri).then((data)=> {
                  outputData['name'] = data.name;
                  outputData['description'] = data.description;
                  outputData['imageUrl'] = data.imageUrl;
                  //data['tokenId'] = this.mints[i].tokenId
                  this.mintMetadata.push(outputData)                
              })
                              
          }
          
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