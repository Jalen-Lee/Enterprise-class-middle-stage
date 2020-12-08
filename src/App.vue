<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import {setToken} from "@/utils/authority";

export default {
  name: 'App',
  async created() {
    //状态管理初始化
    await this.$store.dispatch('sysInit')
    const res = await this.$request({
      url:"/api/auth/login",
      method:'post',
      data:{
        username:"admin",
        password:"123456"
      }
    })
    setToken(res.token)
  }
}
</script>
