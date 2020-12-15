import router from "@/router";
const state = {
    visitedViews:[],
    canCloseLeft:false,
    canCloseRight:false,
    canCloseOther:false,
    canCloseAll:false,
}

const mutations = {
    init:(state)=>{
        state.visitedViews = JSON.parse(localStorage.getItem('app')).historyPages
    },
    addVisitedView: (state,route)=>{
        const view = {
            fullPath: route.fullPath,
            hash: route.hash,
            meta: route.meta,
            name: route.name,
            params: route.params,
            path: route.path,
            query: route.query
        }
        state.visitedViews.push(view)
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

}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
