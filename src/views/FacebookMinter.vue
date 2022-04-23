<template>

  
  <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">




    <div class="mt-3 max-w-4xl mx-auto">    

        Facebook minter  

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


    
    
  },

  methods: {
  
      
  }
}

</script>