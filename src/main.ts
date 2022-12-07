import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import ElContainer from './components/container';

// const ElContainer = require('./components/container');

createApp(App).use(ElContainer).mount('#app')
