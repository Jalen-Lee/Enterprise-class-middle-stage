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
  token: "fake token"
}

const mutations = {

}

const actions = {
  //状态管理初始化
  sysInit: ({commit})=>{
    //tagsView初始化
    commit('tagsView/init')
  }
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
