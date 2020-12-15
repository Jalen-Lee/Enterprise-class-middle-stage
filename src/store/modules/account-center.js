import request from "@/utils/request";

const state = {
    articles:[],
    applications:[],
    projects:[],
}

const mutations = {
    SET_ARTICLES: (state,articles)=>{
        state.articles = articles
    },
    SET_APPLICATIONS: (state,apps)=>{
        state.applications = apps
    },
    SET_PROJECTS: (state,projects)=>{
        state.projects = projects
        // console.log("1",state.projects)
    }
}


const actions = {
    getProjects: ({commit})=>{
        request({
            url: '/api/accountCenter/get/projects',
            method:'get'
        }).then(res=>{
            // console.log(res.data)
            commit('SET_PROJECTS',res.data)
        }).catch(err=>{})
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
