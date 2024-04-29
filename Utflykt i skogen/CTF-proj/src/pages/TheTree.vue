<template>
  <div class="h-screen flex justify-center">
    <button @click="ingenFlaggaHär">
      <div class="w-44 h-20 bg-green-600 hover:bg-green-500 text-white flex justify-center">
        <p class="self-center">Flagga?</p>
      </div>
    </button>
    <!-- <button @click="härÄrFlaggan('denkrypteradflagga')">
      <div class="w-44 h-20 bg-green-600 hover:bg-green-500 text-white flex justify-center">
        <p class="self-center">Flagga?</p>
      </div>
    </button> -->
    <RouterView></RouterView>
  </div>
</template>

<script>
import { krypto } from '../Style.js'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods:{
    ingenFlaggaHär(){
      alert("2102{ÄrDetHärFlaggan?}")
    },
    härÄrFlaggan(flagga){
      krypto(flagga)
    }
  }
}
</script>

<style>

</style>