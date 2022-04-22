<template>

  
  <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">

    <div class="md:flex md:items-center md:justify-between">
        <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Dashboard</h2>
        </div>
        <div class="mt-4 flex md:mt-0 md:ml-4">
          <button @click="create('asd', 'asd')" type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Connect</button>
          <router-link to="/reload">
            <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Reload</button>
          </router-link>            
        </div>
    </div>

  <!-- <div class="mt-3 max-w-3xl mx-auto">    

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




    <div class="mt-3 max-w-3xl mx-auto">       

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
          <dd class="mt-1 text-sm text-gray-900">-</dd>
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
        <div class="sm:col-span-2">
          <dt class="text-sm font-medium text-gray-500">-</dt>
          <dd class="mt-1 text-sm text-gray-900">-</dd>
        </div>
        <div class="sm:col-span-2">
          <dt class="text-sm font-medium text-gray-500">Task</dt>
          <dd class="mt-1 text-sm text-gray-900">
            <ul role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
              <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                <div class="w-0 flex-1 flex items-center">
                  <span class="ml-2 flex-1 w-0 truncate"> 
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                  </span>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a href="#" @click="register()" class="font-medium text-indigo-600 hover:text-indigo-500"> Register </a>
                </div>
              </li>
              <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                <div class="w-0 flex-1 flex items-center">
                  <span class="ml-2 flex-1 w-0 truncate"> 
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                  </span>
                </div>
                <div class="ml-4 flex-shrink-0">
                  <a href="#" @click="replace()" class="font-medium text-indigo-600 hover:text-indigo-500"> Replace </a>
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </div>

        <!-- <h1 class="text-4xl font-extrabold tracking-tight lg:text-6xl">Dashboard</h1> -->
    </div>
  </div>
</template>

<script>

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
    }
      
  }
}

</script>