
const state = {
    sideBar:{
        open: true
    }
}

const mutations = {
    toggleSideBar: state=>{
        state.sideBar.open = !state.sideBar.open
    }
}


const actions = {

}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
