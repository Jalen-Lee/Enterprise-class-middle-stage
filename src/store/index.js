import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters";
import appModule from './modules/app'
import tagsViewModule from "./modules/tagsView";
Vue.use(Vuex)

/**
 * 根级别状态
 * **/
const state = {

}

const mutations = {

}

const actions = {

}




const store = new Vuex.Store({
  modules: {
    app: appModule,
    tagsView: tagsViewModule
  },
  state,
  mutations,
  actions,
  getters
})

export default store
