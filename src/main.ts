import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import ElContainer from './components/container';
import ElButton from './components/button';
import ElLayout from './components/layout';

// const ElContainer = require('./components/container');

createApp(App).use(ElContainer).use(ElButton).use(ElLayout).mount('#app');
