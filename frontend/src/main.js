import { createApp } from 'vue'
import App from './App.vue';
import store from '@/store'

createApp(App).use(store).mount('#app')

// new Vue({
//   render: h => h(App)
// }).$mount('#app');

  // createApp(App).mount();
