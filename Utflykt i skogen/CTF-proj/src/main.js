import { createApp } from 'vue' // Import createApp from 'vue'
import App from './App.vue'
import './index.css'
import router from './router' // Import the router configuration

// Create the Vue application instance using createApp
const app = createApp(App)

// Use the router with the app instance
app.use(router)

// Mount the app to the DOM element with id 'app'
app.mount('#app')
