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
/**
 * 在sysInit内完成应用启动所需所有数据的预拉取，完成后关闭加载动画
 *
 **/
const actions = {
  //状态管理初始化
  sysInit: ({commit})=>{
    //tagsView初始化
    commit('tagsView/init')
    //移除加载动画
    setTimeout(()=>{
      document.body.removeChild(document.getElementById('loading-wrapper'))
    },3000)
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
