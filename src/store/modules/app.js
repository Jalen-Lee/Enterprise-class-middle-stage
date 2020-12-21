
const state = {
    sideBar:{
        open: true
    },
    header:{
        fixed: true
    },
    tagsView:{
        show: true
    },
    settingPanel:{
        open:false
    }
}

const mutations = {
    toggleSideBar: state=>{
        state.sideBar.open = !state.sideBar.open
    },
    toggleHeaderFixed: state=>{
        state.header.fixed = !state.header.fixed
    },
    toggleTagsView: state=>{
        state.tagsView.show = !state.tagsView.show
    },
    toggleSettingPanelOpen: state=>{
        state.settingPanel.open = !state.settingPanel.open
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
