<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>



<template>
  <div>
    <div class="card">
      <button type="button" @click="count++">
        Keep the cookies coming! {{ count }}
      </button>
    </div>
    <div v-show="count>=9">
      <p>2102{inte riktigt rätt}</p>
    </div>
    <div>
      <div class="place-self-start">
        <img
          src="https://www.suffolkgazette.com/wp-content/uploads/2017/02/cookie-monster-diabetes.jpg"
        />
      </div>
    </div>

    <!-- <style scoped>
.read-the-docs {
  color: #888;
}
</style> -->
    <div>
      <!-- <p>{{cryptojs.AES.encrypt("flag210S{Kakmonstret_är_äntligen_mätt!}", "kakis").toString()}}</p> -->
    </div>
  </div>
</template>
