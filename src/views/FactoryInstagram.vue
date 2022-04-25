<template>

  <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">   


    <div class="md:flex md:items-center md:justify-between py-4">
        <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Instagram</h2>
        </div>
        <div class="mt-4 flex md:mt-0 md:ml-4">
          <a href="https://api.instagram.com/oauth/authorize?client_id=298290545660406&redirect_uri=https://simping-api.onrender.com/instagram-redirect&scope=user_profile,user_media&response_type=code">
            <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Connect</button>
          </a>                              
        </div>
    </div>        
      
        

          <div class="mt-4">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">Create SIMP collection</h3>
                  <p class="mt-1 text-sm text-gray-600">Generate a collection contract for NFT on Bifrost blockchain.</p>
                </div>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">


                  <div class="shadow ring-2 ring-black ring-opacity-5 sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div class="grid grid-cols-3 gap-6">
                        <div class="col-span-3 sm:col-span-3">
                          <label for="company-website" class="block text-sm font-medium text-gray-700"> Name </label>
                          <div class="mt-1 flex rounded-md shadow-sm">
                            <input type="text" v-model="collectionName" class="focus:ring-green-500 focus:border-green-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" />
                          </div>
                        </div>
                        
                        <div class="col-span-3 sm:col-span-3">
                          <label for="company-website" class="block text-sm font-medium text-gray-700"> Symbol </label>
                          <div class="mt-1 flex rounded-md shadow-sm">
                            <input type="text" v-model="collectionSymbol" class="focus:ring-green-500 focus:border-green-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" />
                          </div>
                        </div>                        
                      </div>



                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" @click="createCollection()">Create Collection</button>
                    </div>
                  </div>

              </div>
            </div>
          </div>


          <div class="mt-4">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">Mint SIMP</h3>
                  <p class="mt-1 text-sm text-gray-600">Put your image or video on Bifrost blockchain.</p>
                </div>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">


                  <div class="shadow ring-2 ring-black ring-opacity-5 sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">

                      <div>
                        <label for="about" class="block text-sm font-medium text-gray-700"> Collection </label>
                        <div class="mt-1">
                          <select v-model="collectionIdToBeMinted" class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                            <option v-for="collection in collections" :key="collection.collectionAddress" :value="collection.collectionId">{{collection.collectionName}} ({{collection.collectionSymbol}})</option>
                          </select> 
                        </div>
                      </div>
                                            
                      <div class="grid grid-cols-3 gap-6">
                        <div class="col-span-3 sm:col-span-3">
                          <label for="company-website" class="block text-sm font-medium text-gray-700"> Name </label>
                          <div class="mt-1 flex rounded-md shadow-sm">
                            <input type="text" v-model="name" class="focus:ring-green-500 focus:border-green-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" />
                          </div>
                        </div>
                      </div>



                     

                      <div>
                        <label for="about" class="block text-sm font-medium text-gray-700"> Description </label>
                        <div class="mt-1">
                          <textarea v-model="description" rows="3" class="shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" />
                        </div>
                        <p class="mt-2 text-sm text-gray-500">Brief description of your newly minted SIMP.</p>
                      </div>

                      <div>
                        <!-- <label class="block text-sm font-medium text-gray-700"> Photo </label> -->
                        <div class="mt-1 flex items-center">                        


  <div v-if="metadataJsonUrl == null">
    <input id="file-upload" name="file-upload" @change="uploadFile()" ref="file" type="file" class="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" />
  </div>
  <div v-else>
    <!-- <img :src="image" /> -->
    <button @click="removeImage" class="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Remove media</button>
  </div>


                        </div>
                      </div>

                      <!-- <div>
                        <label class="block text-sm font-medium text-gray-700"> Cover photo </label>
                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div class="space-y-1 text-center">
                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div class="flex text-sm text-gray-600">
                              <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
                                <span>Upload a file up to 10MB</span>
                                <input id="file-upload" name="file-upload" @change="uploadFile()" ref="file" type="file" class="sr-only" />
                              </label>
                            </div>
                            
                          </div>
                        </div>
                      </div> -->
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6" v-if="metadataJsonUrl">
                      <button type="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" @click="mintCollection()">Mint SIMP</button>
                    </div>
                  </div>

              </div>
            </div>
          </div>


          <div class="mt-4">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">Initialise SIMP</h3>
                  <p class="mt-1 text-sm text-gray-600">Enable your SIMP collection to be traded on the marketplace</p>
                </div>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">


                  <div class="shadow ring-2 ring-black ring-opacity-5 sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">


                        <div>
                          <label for="about" class="block text-sm font-medium text-gray-700"> Collection </label>
                          <div class="mt-1">
                            <select v-model="collectionIdToBeInitialised" class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                              <option v-for="collection in collections" :key="collection.collectionAddress" :value="collection.collectionId">{{collection.collectionName}} ({{collection.collectionSymbol}})</option>
                            </select> 
                          </div>
                        </div>


                      <div class="grid grid-cols-3 gap-6">
                        
                        <div class="col-span-3 sm:col-span-3">
                          <label for="company-website" class="block text-sm font-medium text-gray-700"> Royalty </label>
                          <div class="mt-1 flex rounded-md shadow-sm">
                            <input type="number" min="0.01" max="15.00" step="0.01" v-model="royalty" class="focus:ring-green-500 focus:border-green-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" />
                          </div>
                        </div>                        
                      </div>



                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" @click="initialiseCollection()">Initialise Collection</button>
                    </div>
                  </div>

              </div>
            </div>
          </div>          


          <!-- <div class="mt-4">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">Sell SIMP</h3>
                  <p class="mt-1 text-sm text-gray-600">Sell your SIMP on the marketplace and make profit!</p>
                </div>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">


                  <div class="shadow ring-2 ring-black ring-opacity-5 sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">


                        <div>
                          <label for="about" class="block text-sm font-medium text-gray-700"> Collection </label>
                          <div class="mt-1">
                            <select v-model="collectionIdToBeSold" @change="onCollectionChange($event)" class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                              <option v-for="collection in collections" :key="collection.collectionAddress" :value="collection.collectionAddress">{{collection.collectionName}} ({{collection.collectionSymbol}})</option>
                            </select> 
                          </div>
                        </div>

                       <div>
                          <label for="about" class="block text-sm font-medium text-gray-700"> Token </label>
                          <div class="mt-1">
                            <select v-model="tokenIdToBeSold" class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                              <option v-for="token in tokens" :key="token.collectionAddress" :value="token.collectionId">{{token.collectionName}}</option>
                            </select> 
                          </div>
                        </div>                        


                      <div class="grid grid-cols-3 gap-6">
                        
                        <div class="col-span-3 sm:col-span-3">
                          <label for="company-website" class="block text-sm font-medium text-gray-700"> Price </label>
                          <div class="mt-1 flex rounded-md shadow-sm">
                            <input type="number" min="1" v-model="sellingPrice" class="focus:ring-green-500 focus:border-green-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" />
                          </div>
                        </div>                        
                      </div>



                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" @click="initialiseCollection()">Initialise Collection</button>
                    </div>
                  </div>

              </div>
            </div>
          </div>      -->

    </div>
  </div>

</template>

<script>

import { useBasicNftStore } from '@/stores/basicNft'
import { useFactoryStore } from '@/stores/factory'
import { useUserStore } from '@/stores/user'
import { NFTStorage } from 'nft.storage'
import { ethers } from "ethers";

const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE4MzViRTI0Y2QxNEUwZTREMjVENTY0NGRBMDM0RjczQTExNzkyZTgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0ODM5MjY0ODIyNywibmFtZSI6InNpbXBpbmcifQ.s9oheLM37vF4kHTs-lOzTCYCUODTERg2amyV8rCPtOk';
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })

const provider = new ethers.providers.JsonRpcProvider('https://rpc.chainbifrost.com');
const address = "0x4193937c113A97978B469DA3F3906B7bc080d7Db";
const abi = [
  "event AuctionCompleted(uint256 indexed,address indexed,address indexed,uint256)",
  "event AuctionCreated(uint256 indexed,address indexed,uint256)",
  "event BidCreated(uint256 indexed,uint256 indexed,address indexed,uint256)",
  "event ForSale(uint256 indexed,address indexed,uint256)",
  "event Initialised(uint256 indexed,uint256,address indexed)",
  "event NotForSale(uint256 indexed,address indexed)",
  "event OwnershipTransferred(address indexed,address indexed)",
  "event SaleCompleted(uint256 indexed,address indexed,address indexed,uint256)",
  "event SendAmount(address indexed,address indexed,uint256,uint256 indexed)",
  "event TokenForSale(address indexed,uint256 indexed,uint256,uint256)",
  "event TokenSold(address indexed,uint256 indexed,uint256,uint256,uint256)",
  "function acceptBid(uint256)",
  "function auctionToken(uint256,address,uint256,uint256)",
  "function bidToken(uint256) payable",
  "function buy(uint256) payable",
  "function cancelFee() view returns (uint256)",
  "function commissionFee() view returns (uint256)",
  "function factory() view returns (address)",
  "function getAuction(uint256) view returns (uint256, address, uint256, uint256, address, uint256, bool)",
  "function getBalance() view returns (uint256)",
  "function getBid(uint256) view returns (uint256, address, uint256)",
  "function getHighestBid(uint256) view returns (uint256, address)",
  "function getSale(uint256) view returns (address, address, uint256, address, uint256)",
  "function initialise(uint256,uint256)",
  "function isCollectionInitialised(uint256) view returns (bool, uint256)",
  "function minimumPrice() view returns (uint256)",
  "function owner() view returns (address)",
  "function registrar() view returns (address)",
  "function renounceOwnership()",
  "function retract(uint256) payable",
  "function sell(uint256,address,uint256,uint256)",
  "function setFees(uint256,uint256,uint256)",
  "function transferOwnership(address)",
  "function withdraw(address,uint256)"
]

const contract = new ethers.Contract(address, abi, provider);

export default {


    setup() {

        const basicNft = useBasicNftStore()
        const factory = useFactoryStore()
        const user = useUserStore()


        return {          
          basicNft,
          factory,
          user
       }
    },

    data() {
      return {
        image: '',
        name: null,
        description: null,
        metadataJsonUrl: null,
        collectionName: null,
        collectionSymbol: null,
        collections: [],
        collectionIdToBeMinted: null,
        collectionIdToBeInitialised: null,
        collectionIdToBeSold: null,
        tokenIdToBeSold: null,
        royalty: 10,
        sellingPrice: 1
      }
    },

    mounted() {

      this.factory.getCollectionsCreatedByUser(this.user.walletAddress).then(()=> {
        console.log(this.factory.collectionsCreatedCount)
        this.collections = [];
        this.collections = this.factory.collectionsCreated;
        for (var i=0; i < this.collections.length; i++) {
          console.log(this.collections[i])
          contract.isCollectionInitialised(parseInt(this.collections[i].collectionId)).then((data)=> {
            console.log(data);
          })
        }
      });

      this.getInstagramPosts();



    },

    methods: {

        async uploadFile() {

          const someBinaryImageData = this.$refs.file.files[0];
          let fileType = this.$refs.file.files[0].type;
          fileType = fileType.toString()
          this.image = someBinaryImageData;

          let fileName; let imageFile

          if (fileType == 'image/png') {
            fileName = 'media.png';
            imageFile = new File([ someBinaryImageData ], fileName, { type: fileType })
          } else {
            fileName = 'media.png';
            imageFile = new File([ someBinaryImageData ], fileName, { type: fileType })
          }

          //const imageFile = new File([ someBinaryImageData ], fileName, { type: fileType })
          const metadata = await client.store({
            name: this.name,
            description: this.description,
            image: imageFile
          })

          this.metadataJsonUrl = metadata.ipnft;

        },


        removeImage(e) {
          console.log(this.image);
          console.log(e)
          this.image = '';
        },     

        async createCollection() {

            let data = await this.factory.create("user-" + this.collectionName, "user-" + this.collectionSymbol);          
            var url = "https://chainbifrost.com/confirm?dapp=simping.org&to=" + data['to'] + "&data=" + data['data'] + "&value=10.00";
            window.open(url);          
        },

        async mintCollection() {

            let data = await this.factory.mint(this.collectionIdToBeMinted, this.user.walletAddress, this.metadataJsonUrl);
            var url = "https://chainbifrost.com/confirm?dapp=simping.org&to=" + data['to'] + "&data=" + data['data'] + "&value=0.10";
            window.open(url);          
        },  
        
        async getInitialisedByUser() {
          const filterAll = contract.filters.Initialised(null, null, this.user.walletAddress);
          const events = await contract.queryFilter(filterAll);
          console.log(events);
        },

        async initialiseCollection() {

            let data = await contract.populateTransaction.initialise(this.collectionIdToBeInitialised, parseInt(this.royalty * 100));
            var url = "https://chainbifrost.com/confirm?dapp=simping.org&to=" + data['to'] + "&data=" + data['data'];
            window.open(url);          
        },         
        
        onCollectionChange(event) {
            console.log(event.target.value)
        },
        
        async getInstagramPosts() {
            const data = await fetch('https://graph.instagram.com/v13.0/me/media?access_token=' + this.user.instagramAccessToken);
            console.log(data)

        }
        

    }
}

</script>

