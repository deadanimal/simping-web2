<template>

  <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">     


          <div class="mt-4">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">Mint SIMP</h3>
                  <p class="mt-1 text-sm text-gray-600">Put your image or video on Bifrost blockchain.</p>
                </div>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">


                  <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div class="grid grid-cols-3 gap-6">
                        <div class="col-span-3 sm:col-span-2">
                          <label for="company-website" class="block text-sm font-medium text-gray-700"> Name </label>
                          <div class="mt-1 flex rounded-md shadow-sm">
                            <input type="text" v-model="name" class="focus:ring-green-500 focus:border-green-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label for="about" class="block text-sm font-medium text-gray-700"> Description </label>
                        <div class="mt-1">
                          <textarea v-model="description" rows="3" class="shadow-sm focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" />
                        </div>
                        <p class="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                      </div>

                      <div>
                        <!-- <label class="block text-sm font-medium text-gray-700"> Photo </label> -->
                        <div class="mt-1 flex items-center">                        


  <div v-if="metadataJsonUrl == null">
    <input id="file-upload" name="file-upload" @change="uploadFile()" ref="file" type="file" class="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" />
  </div>
  <div v-else>
    <!-- <img :src="image" /> -->
    <button @click="removeImage" class="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Remove media</button>
  </div>


                        </div>
                      </div>

                      <!-- <div>
                        <label class="block text-sm font-medium text-gray-700"> Cover photo </label>
                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div class="space-y-1 text-center">
                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div class="flex text-sm text-gray-600">
                              <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
                                <span>Upload a file up to 10MB</span>
                                <input id="file-upload" name="file-upload" @change="uploadFile()" ref="file" type="file" class="sr-only" />
                              </label>
                            </div>
                            
                          </div>
                        </div>
                      </div> -->
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6" v-if="metadataJsonUrl">
                      <button type="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" @click="mintNFT()">Mint</button>
                    </div>
                  </div>

              </div>
            </div>
          </div>



    </div>
  </div>

</template>

<script>

import { useBasicNftStore } from '@/stores/basicNft'
import { useUserStore } from '@/stores/user'
import { NFTStorage } from 'nft.storage'

const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE4MzViRTI0Y2QxNEUwZTREMjVENTY0NGRBMDM0RjczQTExNzkyZTgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0ODM5MjY0ODIyNywibmFtZSI6InNpbXBpbmcifQ.s9oheLM37vF4kHTs-lOzTCYCUODTERg2amyV8rCPtOk';
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })


export default {


    setup() {

        const basicNft = useBasicNftStore()
        const user = useUserStore()


        return {          
          basicNft,
          user
       }
    },

    data() {
      return {
        image: '',
        name: null,
        description: null,
        metadataJsonUrl: null
      }
    },

    methods: {

        async uploadFile() {

          const someBinaryImageData = this.$refs.file.files[0];
          let fileType = this.$refs.file.files[0].type;
          fileType = fileType.toString()
          this.image = someBinaryImageData;

          let fileName; let imageFile

          if (fileType == 'image/png') {
            fileName = 'media.png';
            imageFile = new File([ someBinaryImageData ], fileName, { type: fileType })
          } else {
            fileName = 'media.png';
            imageFile = new File([ someBinaryImageData ], fileName, { type: fileType })
          }

          //const imageFile = new File([ someBinaryImageData ], fileName, { type: fileType })
          const metadata = await client.store({
            name: this.name,
            description: this.description,
            image: imageFile
          })

          this.metadataJsonUrl = metadata.ipnft;

        },


        removeImage(e) {
          console.log(this.image);
          console.log(e)
          this.image = '';
        },     
        
        async mintNFT() {

          let data = await this.basicNft.mint(this.user.walletAddress, this.metadataJsonUrl);
          
            var url = "https://chainbifrost.com/confirm?dapp=simping.org&to=" + data['to'] + "&data=" + data['data'];
            window.open(url);
        }

    }
}

</script>

<style scoped>
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
button {
  
}
</style>