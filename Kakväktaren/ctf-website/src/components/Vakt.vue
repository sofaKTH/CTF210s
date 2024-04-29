<script setup>
import Cookies from './Cookies.vue'
</script>

<template>
  <div>
    <img src="/src/assets/door2.png" class="bg-gray-400 h-96 relative z-0" />
    <div class="absolute top-60 w-2/3 z-10 flex justify-center right-36">
      <img src="/src/assets/Quadrant2.png" class="w-56" />
      <p class="w-40 absolute top-12 bg-white text-black">Lösenord?</p>
    </div>
    <div class="absolute top-72 w-2/3 z-10 flex justify-center">
      <img src="/src/assets/Quadrant2.png" class="w-56 rotate-180" />
      <input
        type="text"
        placeholder="skriv här"
        v-model="password"
        class="w-40 text-black absolute top-14 bg-white"
      />
    </div>
    <!-- Visa div om lösenordet = 'Lösenordet'-->
    <div v-show="this.password == 'Lösenordet'">
      <Cookies />
    </div>
  </div>
</template>

<script>
export default {
  methods: {

  },
  data () {
    return {
      password: ""
    }
  }
}
</script>