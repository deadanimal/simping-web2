import { defineStore } from 'pinia'
import { ethers } from "ethers";
import axios from 'axios';
import { useUserStore } from '@/stores/user'

const provider = new ethers.providers.JsonRpcProvider('https://rpc.chainbifrost.com');

const address = "0x2b0BB6d7545B1F0230b2714087DD5e0816701A7B";
const abi = [
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


export const useBasicNftStore = defineStore({
    
  id: 'basicNft',
  state: () => ({
        mintEvents:  null,
        allMinteds: []
  }),
  getters: {

  },
  actions: {

    async eventMints() {
        const filterAll = contract.filters.Transfer("0x0000000000000000000000000000000000000000", null, null);
        const events = await contract.queryFilter(filterAll);
        this.mintEvents = events;
        //console.log(events)
        return events;
    },   
    
    async getAllMinteds() {
        let totalSupply = await contract.totalSupply();
        totalSupply = ethers.utils.formatUnits(totalSupply, 0)

        let allMinteds = []

        for(var i = 0; i < totalSupply; i++) {
            let tokenUri = await contract.tokenURI(i);
            const response = await axios.get('https://cloudflare-ipfs.com/ipfs/' + tokenUri + '/metadata.json')      
            //tokenUri = 'https://cloudflare-ipfs.com/ipfs/' + tokenUri + '/metadata.json'
            const maxLength = response.data['image'].length;
            let imageUrl = response.data['image'].substring(7, maxLength)
            let data = response.data;
            data['imageUrl'] = imageUrl;
            allMinteds.push(data);
        }

        this.allMinteds = allMinteds;
        return allMinteds;
    },

    async eventMintedLastDay() {
        const filterAll = contract.filters.Minted(null, null, null, null);
        // all minted events from 86400 blocks or 1 day prior
        const events = await contract.queryFilter(filterAll, -86400);
        return events;
    },   
    
    async eventMintedByUser() {
        const user = useUserStore();
        const filterAll = contract.filters.Minted(null, user.walletAddress, null, null);
        const events = await contract.queryFilter(filterAll);
        this.mintedEvents = events;
        this.mintedEventCount = events.length;
    },      

    async eventCreatedByUser() {
        const user = useUserStore();
        const filterAll = contract.filters.Created(null, null, user.walletAddress, null, null);
        const events = await contract.queryFilter(filterAll);
        this.createdEvents = events;
        this.createdEventCount = events.length;
        console.log(events.length)
    },


    async mint( to, uri) {
        const txData = await contract.populateTransaction.safeMint(to, uri);
        return txData;        
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