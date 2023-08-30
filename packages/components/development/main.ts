import { createApp } from 'vue';
import mitt from 'mitt';
import App from '@dev/App.vue';
import { handleInit } from '@dev/init';

const app = createApp(App);

handleInit(app);

app.config.globalProperties.$bus = mitt();

app.mount('#app');
