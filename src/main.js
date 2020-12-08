import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import '@/icon/iconfont.css'
//import '@/styles/index.scss'
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import service from "@/utils/request";
import rule from "@/utils/rules";
import filters from "@/filters";
import clipboard from "@/utils/clipboard";
import globalComps from "@/components";


//import VNode from 'vue/src/core/vdom/vnode'
Vue.use(ElementUI )


Vue.config.productionTip = false
Vue.prototype.$request = service
Vue.prototype.$rule = rule
Vue.prototype.$clipboard = clipboard
// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
//注册全局组件
Object.keys(globalComps).forEach(key =>{
  Vue.component(key,globalComps[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// const a = createEmptyVNode("这是个vnode")
// console.log("vnode",a)
