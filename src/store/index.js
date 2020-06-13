import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const state = {
    count: 0
  };
const store = new Vuex.Store({
  state: {
    state,
    count:0
   },
  getters: {
    countGetter: state => {
      return state.count + state.count;
    },
    countTotal: state => {
      return state.count;
    }
   },
  mutations: {
    increment (state) {
      state.count++
    },
    total(state,count){
      state.count += count;      
    }
  },
  actions: {
    total(context,count){
      setTimeout(() => {
        context.commit('total',count);
      }, 1000)
    }
  }
});
export default store;