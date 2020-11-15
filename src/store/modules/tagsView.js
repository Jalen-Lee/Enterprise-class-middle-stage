import router from "@/router";

const state = {
    visitedViews:[],
    canCloseLeft:false,
    canCloseRight:false,
    canCloseOther:false,
    canCloseAll:false,
}

const mutations = {
    addVisitedView: (state,route)=>{
        state.visitedViews.push(route)
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
        state.visitedViews.splice(0)
        state.visitedViews.push(route)
    },
    closeAllViews: (state,route)=>{
        state.visitedViews.splice(0)
        router.push('/dashboard')
    },
}


const actions = {

}


export default {
    state,
    mutations,
    actions
}
