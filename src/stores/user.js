import { defineStore } from 'pinia'
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider('https://rpc.chainbifrost.com');

export const useUserStore = defineStore({
  id: 'user',

  state: () => ({

    isLoggedIn: false,    
    userAuthKey: null,
    balance: null,

    walletAddress: null,
    walletTs: null,
    walletSig: null,
    walletSigner: null,

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
    },

    updateWallet(address, ts, sig, signer) {
      this.walletAddress = address;
      this.walletTs = ts;
      this.walletSig = sig;
      this.walletSigner = signer;
      this.isLoggedIn = true;
      
      console.log('Store Updated. Address: ', this.walletAddress);
    }

  }
})
