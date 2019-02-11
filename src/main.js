import Vue from 'vue';
import App from './App.vue';
import VueDarkMode from 'vuedarkmode';

Vue.use(VueDarkMode);

new Vue({
  el: '#app',
  render: h => h(App)
});
