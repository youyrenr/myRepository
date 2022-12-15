import {App} from 'vue';
import ElFrom from './Form.vue';

export default {
  install(app:App){
    app.component('ElFrom',ElFrom);
  }
};