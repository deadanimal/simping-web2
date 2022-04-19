<template>
Explore

{{ store.isLoggedIn }}

{{aass}}

<button @click="makan()">makan</button>

</template>

<script>
import { useUserStore } from '@/stores/user'
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider('https://rpc.chainbifrost.com');

export default {
  setup() {
    const store = useUserStore()

    return {
      store,
    }
  },

  data() {

      return {
          aass: 0.00
      }
      
  },

  methods: {

      async makan() {
          const isLoggedIn = this.store.isLoggedIn;
          //const as = await provider.getBlockNumber();
          let balance = await provider.getBalance("0xF3F07bF98cd2D5B57ED39206F657E4eB1f477B45")
          balance = ethers.utils.formatEther(balance)
          this.aass = balance;
          this.store.latestBalance();
          console.log('as: ', balance)
          console.log("makan..", isLoggedIn)
      }
  }
}

</script>