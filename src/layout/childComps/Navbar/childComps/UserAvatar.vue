<template>
  <el-dropdown @command="handleCommand">
    <navbar-button>
      <div>
        <avatar :label="username"  :src="avatar"></avatar>
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
  import NavbarButton from "@/layout/childComps/Navbar/childComps/NavbarButton";
  export default {
    name: "UserAvatar",
    components:{NavbarButton},
    data(){
      return {
        avatar:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        username:'David',
      }
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

            break
        }
      }
    }
  }
</script>
