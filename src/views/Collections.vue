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


    <div class="md:flex md:items-center md:justify-between py-4">
        <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Dashboard</h2>
        </div>
        <div class="mt-4 flex md:mt-0 md:ml-4">
          <router-link to="/facebook-minter">
            <button @click="create('asd', 'asd')" type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Connect</button>
          </router-link>          
          <router-link to="/reload">
            <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Reload</button>
          </router-link>            
        </div>
    </div>



  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">Wallet Address</h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500" style="word-wrap: break-word;">{{user.walletAddress}}</p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
      <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Upline</dt>
          <dd class="mt-1 text-sm text-gray-900" style="word-wrap: break-word;">{{user.walletAddress}}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Balance</dt>
          <dd class="mt-1 text-sm text-gray-900">{{walletBalance}}</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Created</dt>
          <dd class="mt-1 text-sm text-gray-900">-</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Minted</dt>
          <dd class="mt-1 text-sm text-gray-900">-</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Sold</dt>
          <dd class="mt-1 text-sm text-gray-900">-</dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-500">Bought</dt>
          <dd class="mt-1 text-sm text-gray-900">-</dd>
        </div>        
        <!-- <div class="sm:col-span-2">
          <dt class="text-sm font-medium text-gray-500">-</dt>
          <dd class="mt-1 text-sm text-gray-900">-</dd>
        </div> -->

      </dl>
    </div>
  </div>

  <div class="my-6">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Leader Info</h3>
          <p class="mt-1 text-sm text-gray-600">Manage and update your leader address so that leader can provide assistance to you.</p>
        </div>
      </div>

      <div class="mt-5 md:mt-0 md:col-span-2">
       <form action="#" method="POST">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">

                <div class="col-span-6 sm:col-span-6">
                  <label for="email-address" class="block text-sm font-medium text-gray-700">Address</label>
                  <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>


              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>  

        <!-- <h1 class="text-4xl font-extrabold tracking-tight lg:text-6xl">Dashboard</h1> -->
    </div>
  </div>
</template>

<script>

import axios from "axios";


import { useFactoryStore } from '@/stores/factory'
import { useMarketStore } from '@/stores/market'
import { useUserStore } from '@/stores/user'


export default {
  setup() {

    const factory = useFactoryStore()
    const market = useMarketStore()
    const user = useUserStore()

    return {
      factory,
      market,
      user,
    }
  },

  data() {

      return {
          walletBalance: 0.00
      }
      
  },

  mounted() {

    this.user.latestBalance().then(()=> {
      this.walletBalance = this.user.walletBalance;
    });

    this.factory.eventMintedByUser().then(()=> {
      
    });

    this.factory.eventCreatedByUser().then(()=> {

    });

    this.user.registrarRegistered().then((data)=> {
      console.log(data)
    })

    this.created();
    
    
  },

  methods: {

      // async makan() {
      //     this.store.latestBalance();
      // }

    acceptBid() {
      this.market.acceptBid(1).then((data)=> {
        console.log(data)
      })
    },

    create(name, symbol) {
      const aa = {
        n: name, 
        s: symbol
      }
      const aaaa = encodeURIComponent(JSON.stringify(aa))
      console.log(aaaa);


      // this.factory.create(name, symbol).then((data)=> {
      //   console.log(data)
      // })
    },

    async created() {
      try {
        const res = await axios.get(`https://simping-api.onrender.com`);
        //const items = res.data;
        console.log(res)
      } catch (error) {
        console.log(error);
      }
    },    
      
  }
}

</script>