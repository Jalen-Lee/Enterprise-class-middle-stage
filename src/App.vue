<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import {setToken,getToken} from "@/utils/authority";
import {httpCheckToken} from "@/api/auth";
export default {
  name: 'App',
  methods:{
    async handleCheckAuth(){
      if(getToken()){
        const res = await httpCheckToken()
        if(res.code !== 0){
          console.log(res.msg)
          await this.$router.push(`/login?redirect=${this.$route.path}`,)
        }
      }
    }
  },
  async created() {
    //await this.handleCheckAuth()
    //状态管理初始化
    await this.$store.dispatch('sysInit')
  },
}
</script>
