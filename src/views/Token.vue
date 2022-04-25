<template>

  
  <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">


  <!-- <div class="mt-3 max-w-4xl mx-auto">    

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
          Created
        </dt>
        <dd class="mt-1 text-3xl font-semibold text-gray-900">
          {{factory.createdEventCount}}
        </dd>
      </div>
      <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
        <dt class="text-sm font-medium text-gray-500 truncate">
          Minted
        </dt>
        <dd class="mt-1 text-3xl font-semibold text-gray-900">
          {{factory.mintedEventCount}}
        </dd>
      </div>   
      <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
        <dt class="text-sm font-medium text-gray-500 truncate">
          Bought
        </dt>
        <dd class="mt-1 text-3xl font-semibold text-gray-900">
          3
        </dd>
      </div>    
      <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
        <dt class="text-sm font-medium text-gray-500 truncate">
          Sold
        </dt>
        <dd class="mt-1 text-3xl font-semibold text-gray-900">
          3
        </dd>
      </div>                      
    </dl>
  </div>     -->




    <div class="mt-3 max-w-4xl mx-auto">   



    <div class="md:flex md:items-center md:justify-between my-4">
        <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{{latestPrice}} BFT</h2>
        </div>
        <div class="mt-4 flex md:mt-0 md:ml-4">
          <!-- <router-link to="/facebook-minter">
            <button @click="create('asd', 'asd')" type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Connect</button>
          </router-link>           -->          
            <button type="button" v-if="canBuy" class="mr-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Buy</button>          
            <button type="button" v-if="canSell" class="mr-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Sell</button>          
            <button type="button" v-if="canBid" class="mr-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Bid</button>          
            <button type="button" v-if="canAuction" class="mr-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">Auction</button>          
        </div>
    </div>



  <div class="bg-white overflow-hidden shadow ring-2 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">

      
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">{{ name }}</h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500" style="word-wrap: break-word;">{{ description }}</p>
    </div>


      <!-- Product image -->
      <div class="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
        <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden my-3 mx-3">
          <img :src="imageUrl" :alt="imageUrl" class="w-full h-full object-center object-cover" />
        </div>
      </div>


    <div class="border-t border-gray-200 px-4 pb-5 sm:px-6">
      <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 flex items-center">
        <div class="sm:col-span-2 object-none object-center flex items-center">
            
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Contract</dt>
          <dd class="mt-1 text-sm text-gray-900" style="word-wrap: break-word;">{{collectionAddress}}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Token ID</dt>
          <dd class="mt-1 text-sm text-gray-900">{{tokenId}}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Minter</dt>
          <dd class="mt-1 text-sm text-gray-900" style="word-wrap: break-word;">{{creator}}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Owner</dt>
          <dd class="mt-1 text-sm text-gray-900" style="word-wrap: break-word;">{{owner}}</dd>
        </div>
        <!-- <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Bought</dt>
          <dd class="mt-1 text-sm text-gray-900">-</dd>
        </div>         -->
        <!-- <div class="sm:col-span-2">
          <dt class="text-sm font-medium text-gray-500">-</dt>
          <dd class="mt-1 text-sm text-gray-900">-</dd>
        </div> -->

      </dl>
    </div>
  </div>


    <div class="-mx-4 mt-8 overflow-hidden shadow ring-2 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
      <table class="min-w-full divide-y divide-gray-300">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Block</th>
            <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Transaction</th>
            <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Email</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
            <!-- <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span class="sr-only">Edit</span>
            </th> -->
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="person in people" :key="person.email">
            <td class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
              {{ person.name }}
              <dl class="font-normal lg:hidden">
                <dt class="sr-only">Title</dt>
                <dd class="mt-1 truncate text-gray-700">{{ person.title }}</dd>
                <dt class="sr-only sm:hidden">Email</dt>
                <dd class="mt-1 truncate text-gray-500 sm:hidden">{{ person.email }}</dd>
              </dl>
            </td>
            <td class="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{{ person.title }}</td>
            <td class="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{{ person.email }}</td>
            <td class="px-3 py-4 text-sm text-gray-500">{{ person.role }}</td>
            <!-- <td class="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
              <a href="#" class="text-indigo-600 hover:text-indigo-900"
                >Edit<span class="sr-only">, {{ person.name }}</span></a
              >
            </td> -->
          </tr>
        </tbody>
      </table>
    </div>




    </div>
  </div>
</template>

<script>

//import axios from "axios";

import { useBasicNftStore } from '@/stores/basicNft'
import { useFactoryStore } from '@/stores/factory'
import { useMarketStore } from '@/stores/market'
import { useUserStore } from '@/stores/user'
import { ethers } from "ethers";
import axios from 'axios';

const provider = new ethers.providers.JsonRpcProvider('https://rpc.chainbifrost.com');
const abi = [
    "constructor()",
    "event Approval(address indexed,address indexed,uint256 indexed)",
    "event ApprovalForAll(address indexed,address indexed,bool)",
    "event DelegateChanged(address indexed,address indexed,address indexed)",
    "event DelegateVotesChanged(address indexed,uint256,uint256)",
    "event OwnershipTransferred(address indexed,address indexed)",
    "event Paused(address)",
    "event Transfer(address indexed,address indexed,uint256 indexed)",
    "event Unpaused(address)",
    "function DOMAIN_SEPARATOR() view returns (bytes32)",
    "function approve(address,uint256)",
    "function balanceOf(address) view returns (uint256)",
    "function delegate(address)",
    "function delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)",
    "function delegates(address) view returns (address)",
    "function getApproved(uint256) view returns (address)",
    "function getPastTotalSupply(uint256) view returns (uint256)",
    "function getPastVotes(address,uint256) view returns (uint256)",
    "function getVotes(address) view returns (uint256)",
    "function isApprovedForAll(address,address) view returns (bool)",
    "function name() view returns (string)",
    "function nonces(address) view returns (uint256)",
    "function owner() view returns (address)",
    "function ownerOf(uint256) view returns (address)",
    "function pause()",
    "function paused() view returns (bool)",
    "function renounceOwnership()",
    "function safeMint(address,string)",
    "function safeTransferFrom(address,address,uint256)",
    "function safeTransferFrom(address,address,uint256,bytes)",
    "function setApprovalForAll(address,bool)",
    "function supportsInterface(bytes4) view returns (bool)",
    "function symbol() view returns (string)",
    "function tokenByIndex(uint256) view returns (uint256)",
    "function tokenOfOwnerByIndex(address,uint256) view returns (uint256)",
    "function tokenURI(uint256) view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function transferFrom(address,address,uint256)",
    "function transferOwnership(address)",
    "function unpause()"
  ]
  



let people = [
  { name: 'Block', title: 'Tx', email: 'Price', role: 'Address' },
  // More people...
]

export default {

  setup() {

    const basicNft = useBasicNftStore()
    const factory = useFactoryStore()
    const market = useMarketStore()
    const user = useUserStore()

    return {
      people,
      basicNft,
      factory,
      market,
      user,
    }
  },

  data() {

      return {
          walletBalance: 0.00,
          imageUrl: 'https://cloudflare-ipfs.com/ipfs/bafybeicquurmvwmotyiaa52zphmmzuxx25rsol2wwzeaxl25qmgbsq2lnm/media.png',
          collectionId: null,
          collectionAddress: null,
          tokenId: null,
          latestPrice: 0.00,
          metadata: null,
          name: null,
          description: null,
          creator: null,
          owner: "-",
          canBuy: true,
          canSell: true,
          canAuction: true,
          canBid: true
      }
      
  },

  mounted() {

      this.collectionId = this.$route.params['collectionId'];
      this.tokenId = this.$route.params['tokenId'];

    //   if (this.collection == '0x2b0BB6d7545B1F0230b2714087DD5e0816701A7B') {
    //       this.basicNft.getTokenMetadata(this.tokenId).then((data)=> {
    //           //data = JSON.parse(data);
    //         this.metadata = data;
    //         this.name = data.name;
    //         this.description = data.description;
    //         this.imageUrl = 'https://cloudflare-ipfs.com/ipfs/' + data.imageUrl
    //       });

    //   }

    //   this.basicNft.getCreator(this.tokenId).then((data)=> {
    //       this.creator = data;
    //   })

    //   this.basicNft.getOwner(this.tokenId).then((data)=> {
    //       this.owner = data;
    //   })      

    this.getCollection();
    //this.getMetadata();



    
    
  },

  methods: {

      async getCollection() {
          this.factory.getCollection(this.collectionId).then((data)=> {
              console.log(data)

              this.creator = data['creator'];
              this.collectionAddress = data['alamat']

              const collection = new ethers.Contract(data['alamat'], abi, provider);          
              
              collection.ownerOf(this.tokenId).then((data)=> {
                  this.owner = data;
              })

              collection.tokenURI(this.tokenId).then((tokenUri)=> {
                axios.get('https://cloudflare-ipfs.com/ipfs/' + tokenUri + '/metadata.json').then((response) => {
                    const maxLength = response.data['image'].length;
                    let imageUrl = response.data['image'].substring(7, maxLength)
                    let data = response.data;
                    data['imageUrl'] = imageUrl; 
                    this.metadata = data;
                    this.imageUrl = 'https://cloudflare-ipfs.com/ipfs/' + data['imageUrl']
                })  
  
              })

          })
      },



  }
}

</script>