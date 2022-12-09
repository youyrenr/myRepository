import {App} from 'vue';
import ElRow from './Row.vue';

export default {
  install(app:App){
    app.component('ElRow',ElRow);
  }
};