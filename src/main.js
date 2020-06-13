import Vue from 'vue'
import store from "./store"
import App from './App.vue'

Vue.config.productionTip = false

Vue.config.errorHandler = function(err, vm, info) {
  console.log("***エラー情報***")
  console.log(err.toString())
  console.log(vm);
  console.log(info);
  console.log("************")
}

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
