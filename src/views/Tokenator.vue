<template>
  <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
    <div class="mt-3 max-w-4xl mx-auto">   


      <div class="md:flex md:items-center md:justify-between mt-4">
          <div class="flex-1 min-w-0">
              <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Tokenator</h2>
          </div>
          <div class="mt-4 flex md:mt-0 md:ml-4">
              <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Connect</button>
              <button type="button" @click="makan()" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Reload</button>          
          </div>
      </div>


    </div>
  </div>


</template>