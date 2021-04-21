<template>
  <el-dropdown @command="handleCommand">
    <navbar-button>
      <div>
        <avatar :label="userInfo.username"  :src="userInfo.avatar"></avatar>
      </div>
    </navbar-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item icon="iconfont icon-user" command="profile">个人中心</el-dropdown-item>
      <el-dropdown-item icon="iconfont icon-setting" command="setting">个人设置</el-dropdown-item>
      <el-dropdown-item divided icon="iconfont icon-logout" command="logout">退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  import { mapState } from 'vuex'
  import NavbarButton from "@/layout/childComps/Navbar/childComps/NavbarButton";
  export default {
    name: "UserAvatar",
    components:{NavbarButton},
    data(){
      return {

      }
    },
    computed: {
      ...mapState([
          'userInfo'
      ])
    },
    methods:{
      handleCommand(command){
        switch (command){
          case 'profile':
            this.$router.push('/account/center')
            break
          case 'setting':
            this.$router.push('/account/setting')
            break
          case 'logout':
            this.$confirm('确认退出登录?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(()=>{
              return this.$store.dispatch('logout')
            }).then(() => {
              this.$router.push('/login')
              this.$notify({
                title:"提示",
                type:"success",
                message:"退出成功"
              })
            }).catch(() => {});
            break
        }
      }
    }
  }
</script>
