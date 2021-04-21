
const state = {
    device:{
      type:''
    },
    aside:{
        open: true,
        mobileOpen:false
    },
    header:{
        fixed: true
    },
    viewTabs:{
        show: true
    },
    settingPanel:{
        open:false
    }
}

const mutations = {
    toggleAside: state=>{
        if(state.device.type === 'Desktop')
            state.aside.open = !state.aside.open
        else
            state.aside.mobileOpen = !state.aside.mobileOpen
    },
    toggleHeaderFixed: state=>{
        state.header.fixed = !state.header.fixed
    },
    toggleTagsView: state=>{
        state.viewTabs.show = !state.viewTabs.show
    },
    toggleSettingPanelOpen: state=>{
        state.settingPanel.open = !state.settingPanel.open
    },
    toggleDevice:(state,payload)=>{
        state.device.type = payload.type
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
