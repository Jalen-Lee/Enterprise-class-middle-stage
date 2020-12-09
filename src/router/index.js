import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import Layout from '@/layout'
import {getToken} from "@/utils/authority"
import {httpCheckToken} from "@/api/auth";
import {Notification} from "element-ui";

//重写push、place方法，用来处理vue-router在相同路由跳转时报错
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}


//路由白名单
const routeWhiteList = ['/login','/dashboard']

NProgress.configure({ showSpinner: false }) // NProgress Configuration
Vue.use(VueRouter)


export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    meta: {title: "跳转"},
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect'),
        meta: {title: "跳转"}
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    hidden: true,
  },
  {
    path:'/dashboard',
    component: Layout,
    redirect: '/dashboard/analysis',
    meta: {title: '仪表盘',icon: 'icon-dashboard'},
    children: [
      {
        path:'/dashboard/analysis',
        component: () => import('@/views/dashboard/analysis'),
        name: 'DashboardAnalysis',
        meta: {title:"分析",icon:'icon-barchart'}
      },
      {
        path:'/dashboard/monitor',
        component: () => import('@/views/dashboard/monitor'),
        name: 'DashboardMonitor',
        meta: {title:"监控",icon:'icon-monitor'}
      },
      {
        path:'/dashboard/workplace',
        component: () => import('@/views/dashboard/workplace'),
        name: 'DashboardWorkplace',
        meta: {title:"工作台",icon:'icon-Report'}
      },
    ]
  },
  {
    path: '/form',
    component: Layout,
    redirect: '/form/basis-form',
    meta: {title: '表单',icon:'icon-table'},
    children: [
      {
        path: '/form/advanced-form',
        name: 'AdvancedForm',
        component: ()=> import('@/views/form/advanced-form'),
        meta: {title: '高级表单',icon: 'icon-pic-right'}
      },
      {
        path: '/form/basis-form',
        name: 'BasisForm',
        component: ()=> import('@/views/form/basic-form'),
        meta: {title: '基础表单',icon: 'icon-table1'}
      },
      {
        path: '/form/step-form',
        name: 'StepForm',
        component: ()=> import('@/views/form/step-form'),
        meta: {title: '分步表单',icon: 'icon-pic-center'}
      }
    ]
  },
  {
    path: '/list',
    component: Layout,
    meta: {title: '列表',icon: 'icon-unorderedlist'},
    redirect: '/list/basis-list',
    children: [
      {
        path: '/list/basis-list',
        name: 'BasisList',
        component: ()=> import('@/views/list/basis-list'),
        meta: {title: '基础列表',icon: 'icon-orderedlist'}
      },
      {
        path: '/list/card-list',
        name: 'CardForm',
        component: ()=> import('@/views/list/card-list'),
        meta: {title: '卡片列表', icon: 'icon-block'}
      },
      {
        path: '/list/query-list',
        name: 'QueryList',
        component: ()=> import('@/views/list/query-list'),
        meta: {title: '查询列表',icon: 'icon-idcard'}
      },
      {
        path: '/list/search',
        meta: {title: '搜索列表',icon: 'icon-filesearch'},
        component: ()=> import('@/components/NestedLayout'),
        redirect: '/list/search/projects',
        children:[
          {
            path: '/list/search/applications',
            name: 'ApplicationsSearch',
            component: ()=> import('@/views/list/search/applications'),
            meta: {title: '应用搜索',icon: 'icon-book'}
          },
          {
            path: '/list/search/articles',
            name: 'ArticlesSearch',
            component: ()=> import('@/views/list/search/articles'),
            meta: {title: '文章搜索',icon: 'icon-file-text'}
          },
          {
            path: '/list/search/projects',
            name: 'ProjectsSearch',
            component: ()=> import('@/views/list/search/projects'),
            meta: {title: '项目搜索',icon: 'icon-database'}
          }
        ]
      },
    ]
  },
  {
    path: '/result',
    component: Layout,
    meta: {title: '结果',icon: 'icon-check-circle'},
    redirect: '/result/success',
    children: [
      {
        path: '/result/success',
        name: 'SuccessResult',
        component: ()=> import('@/views/result/success'),
        meta: {title: '成功页',icon: 'icon-smile'}
      },
      {
        path: '/result/fail',
        name: 'FailResult',
        component: ()=> import('@/views/result/fail'),
        meta: {title: '失败页',icon: 'icon-frown'}
      },
    ]
  },
  {
    path:'/account',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/account/center',
        name: 'AccountCenter',
        component: ()=> import('@/views/account/center'),
        meta: {title: '个人中心'}
      },
      {
        path: '/account/setting',
        name: 'AccountSetting',
        component: ()=> import('@/views/account/settings'),
        meta: {title: '个人设置'}
      },
    ]
  },
  {
    path:'/login',
    name: 'Login',
    component: ()=> import('@/views/login'),
    meta:{title:"登录"},
    hidden: true
  },
  {
    path:'/404',
    name:'error404',
    component: ()=> import('@/views/error-page/error404'),
    meta: {title: '404 not found'},
    hidden: true
  },
  {
    path:'/401',
    name:'error401',
    component: ()=> import('@/views/error-page/error401'),
    meta: {title: '401 not allow'},
    hidden: true
  },
  { path: '*', redirect: '/404', hidden: true }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const hasToken = getToken()

  if(hasToken){
    console.log(to.path)
    if (to.path === '/login') {
      // 如果已登录，则跳转至主页
      next({ path: '/' })
      NProgress.done() // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
    } else {
      next()
      NProgress.done()
    }
  }else{
    if(routeWhiteList.indexOf(to.path) !== -1){
      next()
    }else{
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach(async (to, from) => {
  document.title = to.meta.title || 'LiJiaLong'
  NProgress.done()
})

export default router
