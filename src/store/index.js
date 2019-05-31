import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let city
try {
  city = localStorage.getItem('city')
} catch (err) {
  console.log(err)
}
const state = {
  iscity: city || '北京'
}

const mutations = {
  backfirst () {
    window.history.go(-1)
  },
  changeCity (state, text) {
    this.state.iscity = text
    try {
      localStorage.setItem('city', text)
    } catch (err) {
      console.log(err)
    }
  }
}

const store = new Vuex.Store({
  state,
  mutations
})
export default store
