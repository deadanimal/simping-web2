import { defineStore } from 'pinia'
import { ethers } from "ethers";


const provider = new ethers.providers.JsonRpcProvider('https://rpc.chainbifrost.com');
const address = "0x584E279549B35425E4CAd1d5DD9007049Aff7542";
const abi = [
  "event AuctionCompleted(uint256 indexed,address indexed,address indexed,uint256)",
  "event AuctionCreated(uint256 indexed,address indexed,uint256)",
  "event BidCreated(uint256 indexed,uint256 indexed,address indexed,uint256)",
  "event ForSale(uint256 indexed,address indexed,uint256)",
  "event NotForSale(uint256 indexed,address indexed)",
  "event OwnershipTransferred(address indexed,address indexed)",
  "event SaleCompleted(uint256 indexed,address indexed,address indexed,uint256)",
  "event SendAmount(address indexed,address indexed,uint256,uint256 indexed)",
  "function acceptBid(uint256)",
  "function auctionToken(uint256,address,uint256,uint256)",
  "function bidToken(uint256) payable",
  "function buy(uint256) payable",
  "function cancelFee() view returns (uint256)",
  "function commissionFee() view returns (uint256)",
  "function factory() view returns (address)",
  "function getAuction(uint256) view returns (uint256, address, uint256, uint256, address, uint256, bool)",
  "function getBalance() view returns (uint256)",
  "function getBid(uint256) view returns (uint256, address, uint256)",
  "function getHighestBid(uint256) view returns (uint256, address)",
  "function getSale(uint256) view returns (address, address, uint256, address, uint256)",
  "function initialise(uint256,uint256)",
  "function minimumPrice() view returns (uint256)",
  "function owner() view returns (address)",
  "function registrar() view returns (address)",
  "function renounceOwnership()",
  "function retract(uint256) payable",
  "function sell(uint256,address,uint256,uint256)",
  "function setFees(uint256,uint256,uint256)",
  "function transferOwnership(address)",
  "function withdraw(address,uint256)"
]
  
const contract = new ethers.Contract(address, abi, provider);


export const useMarketStore = defineStore({
  id: 'market',
  state: () => ({
    // counter: 0
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    },

    getAuctionCompleted() {

    },

    async acceptBid(saleId) {
        const txData = await contract.populateTransaction.acceptBid(saleId);
        return txData;
    }

  }
})
