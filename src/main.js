// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/index';
import Mock from 'mockjs'
import axios from 'axios'

Vue.config.productionTip = false;

// Mock.mock(/user/,(opt)=>{
//   console.log(opt)
//   return opt
// })

let url = '/ 你 user'
let query = '?ID=' + encodeURIComponent('  ?=&=123哈45')
axios.get(url + query)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
});
