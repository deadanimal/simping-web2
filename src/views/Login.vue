<template>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">Logging you via Bifrost</h1>
    </div>
  </div>

</template>

<script>
export default {

  mounted() {
      setTimeout(()=> {
        window.location.href = "https://chainbifrost.com/connect?dapp=simping.org";
      }, 1000);
  }
}
</script>