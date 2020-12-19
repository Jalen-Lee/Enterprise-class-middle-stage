
const state = {
    //已浏览的视图
    visitedViews:[],
    //已缓存的视图
    cachedViews: [],
    canCloseLeft:false,
    canCloseRight:false,
    canCloseOther:false,
    canCloseAll:false,
}

const mutations = {
    init:(state)=>{
        if(localStorage.getItem('app'))
            state.visitedViews = JSON.parse(localStorage.getItem('app')).historyPages
    },
    //添加已浏览缓存
    addVisitedView: (state,view)=>{
        if (state.visitedViews.some(v => v.name === view.name)) return
        state.visitedViews.push({
            fullPath: view.fullPath,
            hash: view.hash,
            meta: view.meta,
            name: view.name,
            params: view.params,
            path: view.path,
            query: view.query
        })
    },
    //添加到路由缓存
    addCachedViews: (state,view)=>{
        if (state.cachedViews.some(v => v.name === view.name)) return
        if(!view.meta.noCached)
            state.cachedViews.push({
                fullPath: view.fullPath,
                hash: view.hash,
                meta: view.meta,
                name: view.name,
                params: view.params,
                path: view.path,
                query: view.query
            })
    },
    delCachedView: (state,view)=>{
        const index = state.cachedViews.findIndex(item=>{
            return item.name === view.name
        })
        state.cachedViews.splice(index,1)
    },
    delVisitedView: (state,route)=>{
        const index = state.visitedViews.findIndex(item=>{
            return item.path === route.path
        })
        state.visitedViews.splice(index,1)
    },
    closeLeftViews: (state,route)=>{
        const index = state.visitedViews.findIndex(item=>{
            return item.path === route.path
        })
        state.visitedViews.splice(0,index)
    },
    closeRightViews: (state,route)=>{
        const index = state.visitedViews.findIndex(item=>{
            return item.path === route.path
        })
        state.visitedViews.splice(index+1)
    },
    closeOtherViews: (state,route)=>{
        const current = state.visitedViews.find(item=>{
            return item.path === route.path
        })
        state.visitedViews.splice(0)
        state.visitedViews.push(current)
    },
}


const actions = {
    //添加视图
    appendViews: ({commit,state},view)=>{
        return new Promise((resolve, reject) => {
            if(view.path.includes("redirect"))
                reject(new Error("redirect路由不缓存"))
            else{
                commit('addVisitedView',view)
                commit("addCachedViews",view)
                // console.log("1",state.visitedViews)
                // console.log("2",state.cachedViews)
                resolve()
            }
        })
    },
    //移除已缓存的视图
    removeCached:({commit,state},view)=>{
        // console.log("删除缓存",view.name)
        return new Promise((resolve, reject) => {
            const existed = state.cachedViews.findIndex(item=>{
                return item.name === view.name
            })
            if(existed !== -1){
                commit('delCachedView',view)
                resolve()
            }
            else
                reject(new Error("cachedView不存在指定的view"))
        })
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
