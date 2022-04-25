import { defineStore } from 'pinia'
import { ethers } from "ethers";


const provider = new ethers.providers.JsonRpcProvider('https://rpc.chainbifrost.com');
const address = "0x4193937c113A97978B469DA3F3906B7bc080d7Db";
const abi = [
  "event AuctionCompleted(uint256 indexed,address indexed,address indexed,uint256)",
  "event AuctionCreated(uint256 indexed,address indexed,uint256)",
  "event BidCreated(uint256 indexed,uint256 indexed,address indexed,uint256)",
  "event ForSale(uint256 indexed,address indexed,uint256)",
  "event Initialised(uint256 indexed,uint256,address indexed)",
  "event NotForSale(uint256 indexed,address indexed)",
  "event OwnershipTransferred(address indexed,address indexed)",
  "event SaleCompleted(uint256 indexed,address indexed,address indexed,uint256)",
  "event SendAmount(address indexed,address indexed,uint256,uint256 indexed)",
  "event TokenForSale(address indexed,uint256 indexed,uint256,uint256)",
  "event TokenSold(address indexed,uint256 indexed,uint256,uint256,uint256,address,address)",
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
  "function isCollectionInitialised(uint256) view returns (bool, uint256)",
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
    allForSales: [],
    allForSaleCount: 0,
    balance: null,
    owner: null

  }),
  getters: {

  },
  actions: {

    async getOwner() {
      let owner = await contract.owner();
      this.owner = owner;
      
    },

    async getBalance() {
      let balance = await contract.getBalance();
      this.balance = ethers.utils.formatUnits(balance, 18)
    },

    async withdraw(receiver, amount) {
      const amountTx = ethers.utils.parseUnits(amount.toString(), 18)
      let balance = await contract.populateTransaction.withdraw(receiver, amountTx)
      return balance;
    },    


    async acceptBid(saleId) {
        const txData = await contract.populateTransaction.acceptBid(saleId);
        return txData;
    },

    async getAllForSales() {
      const filterAll = contract.filters.TokenForSale(null, null, null, null);
      const events = await contract.queryFilter(filterAll);
      let sales = [];
      for (var i = 0; i < events.length; i++) {
          let data = {
              blockHash: events[i]['blockHash'],
              blockNumber: events[i]['blockNumber'],
              collectionAddress: events[i]['args'][0],
              tokenId: events[i]['args'][1],
              saleId: events[i]['args'][2],
              timestamp: events[i]['args'][3],
              
          }
          sales.push(data);

      }
      this.allForSales = sales;
      this.allForSaleCount = sales.length;      
    }

  }
})
