<template>
  <div class="page-login-form">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label-width="0" prop="account">
        <el-input
            v-model="form.account"
            ref="account"
            clearable
            placeholder="登录账号/邮箱/手机号码"
            prefix-icon="el-icon-search">
        </el-input>
      </el-form-item>
      <el-form-item label-width="0" prop="password">
        <el-input
            type="password"
            ref="password"
            clearable
            show-password
            v-model="form.password"
            placeholder="密码"
            prefix-icon="el-icon-search">
        </el-input>
      </el-form-item>
      <el-form-item label-width="0">
        <el-row type="flex" justify="space-between" align="middle">
          <el-switch v-model="form.autoLogin" active-text="自动登录"></el-switch>
          <div>
            <el-button type="text">忘记密码</el-button>
            <el-button type="text">注册账户</el-button>
          </div>
        </el-row>
      </el-form-item>
      <el-form-item label-width="0">
        <el-button style="width: 100%" type="primary" @click="handleSubmit" :loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import rules from "@/utils/rules"
export default {
  name: "login-form",
  data(){
    const validateEmail = (rule, value, callback)=>{
      if(value.includes('@')){
        if(!rules.email(value))
          callback(new Error("请输入正确的邮箱"))
      }
      //必须要调用callback()
      callback()
    }
    return {
      form: {
        account:'admin',
        password:'admin',
        autoLogin: true,
        redirect:'',
        otherQuery:'',
      },
      rules:{
        account: [
          { required: true, message: '请输入登录账号/邮箱/手机号码', trigger: 'blur' },
          { validator: validateEmail, trigger: 'blur' }
        ],
        password:[
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, message: '密码不等小于5位', trigger: 'blur' }
        ]
      },
      loading:false
    }
  },
  computed:{

  },
  methods:{
    handleSubmit() {
      console.log(this.$refs.form)
      this.$refs.form.validate((valid) =>{
        if (valid) {
          this.loading = true
          setTimeout(()=>{
            this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
            this.loading = false
            this.$notify({
              type:"success",
              message:"欢迎登录！",
              duration: 2000
            })
          },2500)
        } else {
          return false;
        }
      })

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
      handler: function(oldRoute,newRoute) {
        const query = oldRoute.query
        // console.log("路由查询参数：",query)
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
    if (!this.form.account) {
      this.$refs.account.focus()
    } else if (!this.form.password) {
      this.$refs.password.focus()
    }
  },
}
</script>

<style scoped lang="scss">
  .page-login-form{
    .page-login-form-item{
      width: 100%;
    }
  }
</style>
