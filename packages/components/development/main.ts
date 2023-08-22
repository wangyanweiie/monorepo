import { createApp } from 'vue';
import App from './App.vue';
import mitt from 'mitt';

import { initApp } from './init';

const app = createApp(App);

initApp(app);

app.config.globalProperties.$bus = mitt();

app.mount('#app');
