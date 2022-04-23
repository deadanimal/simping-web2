<template>

  
  <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">

    <div class="md:flex md:items-center md:justify-between">
        <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Reload</h2>
        </div>
        <div class="mt-4 flex md:mt-0 md:ml-4">          
          <router-link to="/dashboard">
            <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Back</button>
          </router-link>            
        </div>
    </div>

  <div class="mt-3">    

    <h3 class="text-lg leading-6 font-medium text-gray-900">Address</h3>
    <h3 class="text-sm leading-6 font-medium text-gray-900" style="word-wrap: break-word;">{{store.walletAddress}}</h3>

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

  <div class="mt-3">    


    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden flex justify-center items-center sm:p-6">
        <iframe
          src="https://widget.onramper.com?color=266677&apiKey=pk_prod_EXk4EaovzU0pZe3Nqd3nmpjTNjUrXxHEXVyJMewmS7g0&onlyCryptos=BTC&wallets=BTC:15ky2A3SvqbUUCrJzh8tRF6nyaVJ3stpPm&isAddressEditable=false"
          height="595px"
          width="440px"
          title="Buy BFT"
          frameborder="0"
          allow="accelerometer;
          autoplay; camera; gyroscope; payment">
            <a href="https://widget.onramper.com" target="_blank">Buy crypto</a>
        </iframe> 
      </div>
         
    </dl>
  </div>      




    <div class="max-w-4xl mx-auto">   

      <div class="mt-4 content-center">

      </div>
         
        <!-- <h1 class="text-4xl font-extrabold tracking-tight lg:text-6xl">Dashboard</h1> -->
    </div>
  </div>




  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <div>


        <iframe
          src="https://widget.onramper.com?color=266677&apiKey=pk_prod_EXk4EaovzU0pZe3Nqd3nmpjTNjUrXxHEXVyJMewmS7g0&onlyCryptos=BTC&wallets=BTC:15ky2A3SvqbUUCrJzh8tRF6nyaVJ3stpPm&isAddressEditable=false"

          title="Buy BFT"
          frameborder="0"
          allow="accelerometer;
          autoplay; camera; gyroscope; payment">
            <a href="https://widget.onramper.com" target="_blank">Buy crypto</a>
        </iframe>


            </div>
            <div class="mt-5 sm:mt-6">
              <button type="button" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm" @click="open = false">Go back to dashboard</button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>



</template>

<script>
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/outline'

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    CheckIcon,
  },
    
  setup() {
    const store = useUserStore()
    const open = ref(true)

    return {
      store,
      open,
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