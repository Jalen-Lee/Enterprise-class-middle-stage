<template>
  <div class="login-wrapper">
    <header class="login-header-wrap"></header>
    <main class="login-main-wrap">
      <div class="login-main-body">
        <el-input
            v-model="account"
            placeholder="请输入登录账号"
            prefix-icon="iconfont icon-user"
            clearable
            ref="account"
        ></el-input>
        <el-input
            v-model="password"
            placeholder="请输入密码"
            prefix-icon="iconfont icon-lock"
            show-password
            ref="password"
        ></el-input>
        <el-button type="primary" style="width: 100%" @click="handleLogin">登录</el-button>
        <el-divider><span>第三方登录</span></el-divider>
      </div>
    </main>
    <footer class="login-footer-wrap">
      <div>
        <span>
            Develop By David
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "login",
    data(){
      return {
        account:'',
        password:'',
        redirect:'',
        otherQuery:''
      }
    },
    methods:{
      handleLogin(){
        this.$router.push({ path: '/', query: this.otherQuery })
      },
      getOtherQuery(query) {
        return Object.keys(query).reduce((acc, cur) => {
          if (cur !== 'redirect') {
            acc[cur] = query[cur]
          }
          return acc
        }, {})
      }
    },
    watch: {
      $route: {
        handler: function(route) {
          const query = route.query
          // console.log("路由查询：",query)
          if (query) {
            this.redirect = query.redirect
            this.otherQuery = this.getOtherQuery(query)
            // console.log(this.otherQuery)
          }
        },
        immediate: true
      }
    },
    mounted() {
      if (this.account === '') {
        this.$refs.account.focus()
      } else if (this.password === '') {
        this.$refs.password.focus()
      }
    },
  }
</script>

<style scoped lang="scss">
  .login-wrapper{
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    background: #f7f7f7;
    @media (min-width: 768px){
      &{
        background-image: url(~@/assets/img/view-login/bg.svg);
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 100%;
      }
    }
    .login-header-wrap{
      height: 50px;
    }
    .login-main-wrap{
      flex: 1 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .login-main-body{
        width: 384px;
        margin-bottom: 150px;
        /deep/.el-input{
          margin-bottom: 24px;
        }
        /deep/.el-button{
          margin-bottom: 24px;
        }

      }
    }
    .login-footer-wrap{
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

</style>

<style lang="scss">
  .el-divider__text{
    background-color: #f7f7f7;
  }
</style>
