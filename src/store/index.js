import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    count: 0
  },
  mutations: {
    countFun(state) {
      state.count++
      console.log(state.count)
    }
  },
  actions: {
  },
  modules: {
  }
});
