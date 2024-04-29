<template>
  <div>
    <div class="m-4">
      <h1 class="text-2xl">Grattis! Du hittade en kaka :)</h1>
      <h2 class="text-xl">Ta dig en tugga!</h2>
    </div>
    <button
      @click="
        setCookie('Flagga', this.flag),
          setCookie('url', url),
          setCookie('Secret Code', code)
      "
      class="transition hover:scale-105 active:scale-110 rounded-full focus:outline-none border-0 m-2"
    >
      <img src="../assets/Cookie.png" class="" />
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    setCookie (id, value) {
      document.cookie = id + '=' + value
    }
  },
  data () {
    return {
      flag: "evg2moeZbfOrz207s9A7Fg96J0WVKGF5J+8QVc2zt/KufhWenXtoSx3X33VhkUnf",
      url: "https://www.devglan.com/online-tools/text-encryption-decryption",
      code: "perfektaReceptet"
    }

  }

}
</script>

<style>
</style>