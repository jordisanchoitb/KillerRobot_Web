/*import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')*/

// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';

createApp(App).use(router).mount('#app');


