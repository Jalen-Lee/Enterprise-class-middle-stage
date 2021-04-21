import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters";
import appModule from './modules/app'
import tagsViewModule from "./modules/tags-view";
import accountCenterModule from "./modules/account-center"
import {httpLogin,httpLogout} from "@/api/auth";
import {setToken,removeToken} from "@/utils/authority";
import router, { resetRouter } from '@/router'
Vue.use(Vuex)

/**
 * 根级别状态
 **/
const state = {
  token: "fake token",
  userInfo: {
    username:"David",
    avatar:"https://pic4.zhimg.com/v2-3d2e688690fedb3f276cabd1c4c3f575_xs.jpg",
    roles:[]
  },

}

const mutations = {
  //设置state中的token
  SET_TOKEN: (state, token) => {
    state.token = token
  },
}
/**
 * 在sysInit内完成应用启动所需所有数据的预拉取，完成后关闭加载动画
 **/
const actions = {
  //状态管理初始化
  sysInit: ({commit})=>{
    //tagsView初始化
    commit('tagsView/init')
    // //移除加载动画
    // setTimeout(()=>{
    //   document.body.removeChild(document.getElementById('loading-wrapper'))
    // },3000)
  },
  login: ({commit},userForm)=>{
    return new Promise((resolve, reject) => {
      httpLogin(userForm)
          .then(res=>{
            if(res.code === 0){
              setToken(res.token)
              commit("SET_TOKEN",res.token)
              resolve()
            }else{
              reject()
            }
          })
          .catch(err=>{
            reject(err)
          })
    })
  },
  logout: ({commit})=>{
    return new Promise((resolve, reject) => {
      httpLogout()
          .then((res)=>{
            if(res.code === 0){
              removeToken()
              commit('SET_TOKEN','')
              resolve()
            }else{
              reject()
            }
          })
          .catch((err)=>{
            reject(err)
          })
    })
  }
}




const store = new Vuex.Store({
  modules: {
    app: appModule,
    tagsView: tagsViewModule,
    accountCenter: accountCenterModule
  },
  state,
  mutations,
  actions,
  getters
})

export default store

