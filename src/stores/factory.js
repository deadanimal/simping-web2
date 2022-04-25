import { defineStore } from 'pinia'
import { ethers } from "ethers";
import { useUserStore } from '@/stores/user'

const provider = new ethers.providers.JsonRpcProvider('https://rpc.chainbifrost.com');
const address = "0xf6a1D04a99f3F9EAAc37a16F991EBF21E69c9cdD";
const abi = [
    "event Created(uint256 indexed,address indexed,address indexed,string,string)",
    "event Minted(uint256 indexed, address indexed,address indexed,address,string, uint256)",
    "event OwnershipTransferred(address indexed,address indexed)",
    "function create(string,string) payable",
    "function fee() view returns (uint256)",
    "function getBalance() view returns (uint256)",
    "function getCollection(uint256) view returns (address, address, string, string)",
    "function getCollectionCreator(uint256) view returns (address)",
    "function mint(uint256,address,string) payable",
    "function owner() view returns (address)",
    "function renounceOwnership()",
    "function selfGovern(uint256,address) payable",
    "function setFee(uint256)",
    "function transferOwnership(address)",
    "function withdraw(address,uint256)"
]

const simpAddress = "0x2b0BB6d7545B1F0230b2714087DD5e0816701A7B";
const simpAbi = [
    "constructor()",
    "event Approval(address indexed,address indexed,uint256 indexed)",
    "event ApprovalForAll(address indexed,address indexed,bool)",
    "event DelegateChanged(address indexed,address indexed,address indexed)",
    "event DelegateVotesChanged(address indexed,uint256,uint256)",
    "event OwnershipTransferred(address indexed,address indexed)",
    "event Paused(address)",
    "event Transfer(address indexed,address indexed,uint256 indexed)",
    "event Unpaused(address)",
    "function DOMAIN_SEPARATOR() view returns (bytes32)",
    "function approve(address,uint256)",
    "function balanceOf(address) view returns (uint256)",
    "function delegate(address)",
    "function delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)",
    "function delegates(address) view returns (address)",
    "function getApproved(uint256) view returns (address)",
    "function getPastTotalSupply(uint256) view returns (uint256)",
    "function getPastVotes(address,uint256) view returns (uint256)",
    "function getVotes(address) view returns (uint256)",
    "function isApprovedForAll(address,address) view returns (bool)",
    "function name() view returns (string)",
    "function nonces(address) view returns (uint256)",
    "function owner() view returns (address)",
    "function ownerOf(uint256) view returns (address)",
    "function pause()",
    "function paused() view returns (bool)",
    "function renounceOwnership()",
    "function safeMint(address,string)",
    "function safeTransferFrom(address,address,uint256)",
    "function safeTransferFrom(address,address,uint256,bytes)",
    "function setApprovalForAll(address,bool)",
    "function supportsInterface(bytes4) view returns (bool)",
    "function symbol() view returns (string)",
    "function tokenByIndex(uint256) view returns (uint256)",
    "function tokenOfOwnerByIndex(address,uint256) view returns (uint256)",
    "function tokenURI(uint256) view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function transferFrom(address,address,uint256)",
    "function transferOwnership(address)",
    "function unpause()"
  ]
  
  
  
const contract = new ethers.Contract(address, abi, provider);
const simpContract = new ethers.Contract(simpAddress, simpAbi, provider);


export const useFactoryStore = defineStore({
    
  id: 'factory',
  state: () => ({
        allMints: null,
        allMintCount: 0,      
        mints: null,
        mintCount: 0,
        allCollectionsCreateds: null,
        allCollectionsCreatedCount: 0,
        collectionsCreateds: null,
        collectionsCreatedCount: 0
  }),
  getters: {


  },
  actions: {

    async eventCreatedLastDay() {
        const filterAll = contract.filters.Created(null, null, null, null, null);
        // all created events from 86400 blocks or 1 day prior
        const events = await contract.queryFilter(filterAll, -86400);
        return events;
    },    

    async eventMintedLastDay() {
        const filterAll = contract.filters.Minted(null, null, null, null);
        // all minted events from 86400 blocks or 1 day prior
        const events = await contract.queryFilter(filterAll, -86400);
        return events;
    },   
    
    async eventMintedByUser() {
        const user = useUserStore();
        const filterAll = contract.filters.Minted(null, null, user.walletAddress, null, null, null);
        const events = await contract.queryFilter(filterAll);
        console.log(events)
        this.mintedEvents = events;
        this.mintedEventCount = events.length;
    },   
    
    async getAllCollectionsCreated() {
        const filterAll = contract.filters.Created(null, null, null, null, null);
        const events = await contract.queryFilter(filterAll);        
        let collections = [];
        for (var i = 0; i < events.length; i++) {
            let data = {
                blockHash: events[i]['blockHash'],
                blockNumber: events[i]['blockNumber'],
                collectionId: ethers.utils.formatUnits(events[i]['args'][0], 0),
                collectionAddress: events[i]['args'][1],
                collectionCreator: events[i]['args'][2],
                collectionName: events[i]['args'][3],
                collectionSymbol: events[i]['args'][4],
            }
            collections.push(data);

        }
        console.log(collections)
        this.allCollectionsCreated = collections;
        this.allCollectionsCreatedCount = collections.length;
    },   
    
    async getAllMints() {
        const filterAll = contract.filters.Minted(null, null, null, null, null, null);
        const events = await contract.queryFilter(filterAll);
        let mints = [];
        for (var i = 0; i < events.length; i++) {
            let data = {
                blockHash: events[i]['blockHash'],
                blockNumber: events[i]['blockNumber'],
                collectionId: events[i]['args'][0],
                collectionAddress: events[i]['args'][1],
                minter: events[i]['args'][2],
                receiver: events[i]['args'][3],
                tokenUri: events[i]['args'][4],
                tokenId: events[i]['args'][5],
            }
            mints.push(data);

        }
        this.allMints = mints;
        this.allMintCount = mints.length;
    },     

    async getCollectionsCreatedByUser(userAddress) {
        const filterAll = contract.filters.Created(null, null, userAddress, null, null);
        const events = await contract.queryFilter(filterAll);
        let collections = [];
        for (var i = 0; i < events.length; i++) {
            let data = {
                blockHash: events[i]['blockHash'],
                blockNumber: events[i]['blockNumber'],
                collectionId: ethers.utils.formatUnits(events[i]['args'][0], 0),
                collectionAddress: events[i]['args'][1],
                collectionCreator: events[i]['args'][2],
                collectionName: events[i]['args'][3],
                collectionSymbol: events[i]['args'][4],
            }
            collections.push(data);

        }

        this.collectionsCreated = collections;
        this.collectionsCreatedCount = collections.length;
    },


    async getMintsByUser(userAddress) {
        const filterAll = contract.filters.Minted(null, null, userAddress, null, null, null);
        const events = await contract.queryFilter(filterAll);
        let mints = [];
        for (var i = 0; i < events.length; i++) {
            let data = {
                blockHash: events[i]['blockHash'],
                blockNumber: events[i]['blockNumber'],
                collectionId: events[i]['args'][0],
                collectionAddress: events[i]['args'][1],
                minter: events[i]['args'][2],
                receiver: events[i]['args'][3],
                tokenUri: events[i]['args'][4],
                tokenId: events[i]['args'][5],
            }
            mints.push(data);

        }

        this.mints = mints;
        this.mintCount = mints.length;
    },    

    async create(name, symbol) {
        const txData = await contract.populateTransaction.create(name, symbol);
        return txData;
    },

    async mint(collectionId, to, uri) {
        console.log(collectionId)
        const txData = await contract.populateTransaction.mint(collectionId, to, uri);
        return txData;        
    },

    async mintBasic( to, uri) {
        const txData = await simpContract.populateTransaction.safeMint(to, uri);
        return txData;        
    },    

    async selfGovern(collectionId, to) {
        const txData = await contract.populateTransaction.selfGovern(collectionId, to);
        return txData;        
    },

    async withdraw(receiver, amount) {
        const txData = await contract.populateTransaction.withdraw(receiver, amount);
        return txData;        
    },   
    
    async setFee(amount) {
        const txData = await contract.populateTransaction.setFee(amount);
        return txData;        
    },    
    
    async getBalance() {
        let balance = await contract.getBalance();
        return balance;        
    },    
    
    async getCollection(collectionId) {
        let [alamat, creator, name, symbol] = await contract.getCollection(collectionId);
        let infoObject = {
            alamat: alamat,
            creator: creator,
            name: name,
            symbol: symbol
        }
        return infoObject;        
    },      
    
    async getCollectionCreator(collectionId) {
        const creator = await contract.getCollectionCreator(collectionId);
        return creator;        
    },    


  }
})


// function create(string memory name, string memory symbol) public payable 
// function mint(uint256 collectionId, address to, string memory uri) public payable 
// function selfGovern(uint256 collectionId, address _owner) public payable 
// function withdraw(address _receiver, uint256 _amount) public onlyOwner 
// function setFee(uint256 _fee) public onlyOwner 
// function getBalance() public view returns (uint256 amount) 
// function getCollection(uint256 collectionId) public view returns (address alamat, address creator, string memory name, string memory symbol) 
// function getCollectionCreator(uint256 collectionId) public view returns (address creator) 