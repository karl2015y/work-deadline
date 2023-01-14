import { defineStore } from 'pinia';
import { ref } from 'vue';

interface State {
  data: string;
}

export const use{{pascalCase name}}Store = defineStore('{{kebabCase name}}', ()=>{
  const data = ref('codfish');
  
  return {
    data,
  }
})