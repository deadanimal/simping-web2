import { defineStore } from 'pinia'
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider('https://rpc.chainbifrost.com');
const bscProvider = new ethers.providers.JsonRpcProvider('https://bsc-dataseed.binance.org/');



const registrarAbi = [
  "function downlineCount(address) view returns (uint256)",
  "function getUplines(address) view returns (address, address, address, address, address)",
  "function register(address)",
  "function registered(address) view returns (bool)",
  "function remove()",
  "function replace(address)",
  "function uplineForUser(address) view returns (address)"
]
const registrarAddress = "0x453240AE09c13Df8BF69E998574369F7367D43d5";
const registrarContract = new ethers.Contract(registrarAddress, registrarAbi, provider);

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

    mlmRegistered: false,
    mlmUpline: null,

    instagramAccessToken: null,
    instagramUserId: null,
    instagramLoggedIn: false,    

    bscBft: 0.00,
    bscCoin: 0.00,

  }),

  getters: {
    // doubleCount: (state) => state.counter * 2,
    // isLoggedIn: (state) => state.isLoggedIn
  },
  actions: {


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
    },

    updateInstagramLogin(access_token, user_id) {
      this.instagramAccessToken = access_token;
      this.instagramUserId = user_id;
      this.instagramLoggedIn = true;
    },

    async registrarGetDownlineCount() {
      const count = registrarContract.getDownlineCount(this.walletAddress);
      return count;
    },

    async registrarGetUplines() {
      let uplines = await registrarContract.getUplines(this.walletAddress);
      this.mlmUpline = uplines[0];
      return uplines;
    },   
    
    async registrarRegister() {
      const txData = await registrarContract.populateTransaction.register(this.walletAddress);
      return txData;
    },    
    
    async registrarRemove() {
      const txData = await registrarContract.populateTransaction.remove();
      return txData;
    },     

    async registrarReplace(newUpline) {
      const txData = await registrarContract.populateTransaction.replace(newUpline);
      return txData;
    }, 
    
    async registrarRegistered() {
      const registered = registrarContract.registered(this.walletAddress);
      this.mlmRegistered = registered;
      return registered;
    },  
    
    async registrarUplineForUser() {
      const uplineForUser = registrarContract.uplineForUser(this.walletAddress);
      return uplineForUser;
    },       

  }
})
