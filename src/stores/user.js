import { defineStore } from 'pinia'
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider('https://rpc.chainbifrost.com');
const bscProvider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/');

export const useUserStore = defineStore({
  id: 'user',

  state: () => ({

    isLoggedIn: false,    
    userAuthKey: null,
    walletBalance: 0.00,

    walletAddress: null,
    walletTs: null,
    walletSig: null,
    walletSigner: null,

    bscBft: 0.00,
    bscCoin: 0.00,

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
        let balance = await provider.getBalance(this.walletAddress)
        this.walletBalance = ethers.utils.formatEther(balance);
        console.log('Wallet Balance BFT:', this.walletBalance);

        let bscBalance = await bscProvider.getBalance(this.walletAddress)
        this.bscCoin = ethers.utils.formatEther(bscBalance);   
        this.bscBft = this.bscCoin;     
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
