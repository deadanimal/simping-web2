
<template>


    <main class="lg:relative">
      <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span class="block xl:inline">Financialise</span>
            {{ ' ' }}
            <span class="block text-gray-600 xl:inline">social media</span>
          </h1>
          <p class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">Convert your social media content into a product on the internet. Create a community around your product and utility.</p>
          <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <router-link to="/dashboard" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"> Get started </router-link>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <router-link to="/guides" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"> Learn more </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img class="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />
      </div>
    </main>


  <div class="relative bg-white py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-base font-semibold uppercase tracking-wider text-gray-600">Financialise Social Media</h2>
      <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Everything you need to monetise your content</p>
      <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">Mint, swap, fractionalise, sell, buy, utilise your content as NFT.</p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
              <div class="-mt-6">
                <!-- <div>
                  <span class="inline-flex items-center justify-center rounded-md bg-gray-500 p-3 shadow-lg">
                    <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div> -->
                <h3 class="mt-8 text-lg font-medium tracking-tight text-gray-900">{{ feature.name }}</h3>
                <p class="mt-5 text-base text-gray-500">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gray-50 pt-12 sm:pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">Trusted by influencers all over the world</h2>
        <p class="mt-3 text-xl text-gray-500 sm:mt-4">We are the most user friendly and advanced NFT app for social media</p>
      </div>
    </div>
    <div class="mt-10 pb-12 bg-white sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-gray-50" />
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto">
            <dl class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
              <div class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Passion</dt>
                <dd class="order-1 text-5xl font-extrabold text-gray-600">100%</dd>
              </div>
              <div class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Availability</dt>
                <dd class="order-1 text-5xl font-extrabold text-gray-600">24/7</dd>
              </div>
              <div class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">User</dt>
                <dd class="order-1 text-5xl font-extrabold text-gray-600">100k</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>  


  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block">Ready to dive in?</span>
        <span class="block text-gray-600">Start your financial journey today.</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <router-link to="/dashboard" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"> Get started </router-link>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <router-link to="/guides" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-600 bg-white hover:bg-gray-50"> Learn more </router-link>
        </div>
      </div>
    </div>
  </div>  


</template>

<script>
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/vue/outline'

const features = [
  {
    name: 'Mint NFT',
    description: 'Put your content on the Bifrost blockchain by minting your NFT on simping',
    icon: CloudUploadIcon,
  },
  {
    name: 'Swap NFT',
    description: 'Buy or sell your NFTs or tokens of the NFT on this platform',
    icon: LockClosedIcon,
  },
  {
    name: 'Fractional',
    description: 'Make NFT to be fungible by issuing tokens based on the NFT',
    icon: RefreshIcon,
  },
  {
    name: 'Social Media',
    description: 'Top social media platforms are automatically integrated with simping',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Bridge',
    description: 'Enjoy real-life benefits of owning NFTs in real-world',
    icon: CogIcon,
  },
  {
    name: 'Metaverse',
    description: 'Access the metaverse via NFTs and its associative utility',
    icon: ServerIcon,
  },
]

export default {
  setup() {
    return {
      features,
    }
  },
}
</script>