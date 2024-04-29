import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import VueCryptojs from 'vue-cryptojs'

createApp(App).use(VueCryptojs).mount('#app')
