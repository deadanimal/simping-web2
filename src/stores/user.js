import { defineStore } from 'pinia'
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider('https://rpc.chainbifrost.com');

export const useUserStore = defineStore({
  id: 'user',

  state: () => ({

    isLoggedIn: false,
    publicAddress: "0xF3F07bF98cd2D5B57ED39206F657E4eB1f477B45"g,
    userAuthKey: null,
    balance: null

  }),

  getters: {
    // doubleCount: (state) => state.counter * 2,
    // isLoggedIn: (state) => state.isLoggedIn
  },
  actions: {
    increment() {
      this.counter++
    },

    login(asd) {
        console.log(asd);
    },

    async latestBalance() {
        let balance = await provider.getBalance(this.publicAddress)
        this.balance = ethers.utils.formatEther(balance)
        console.log('akksksks', this.balance)   
    }

  }
})
