import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import ElContainer from './components/container';
import ElButton from './components/button';
import ElLayout from './components/layout';
import ElForm from './components/form';

// const ElContainer = require('./components/container');

createApp(App).use(ElContainer).use(ElForm).use(ElButton).use(ElLayout).mount('#app');
