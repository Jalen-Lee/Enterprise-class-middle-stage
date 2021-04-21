<template>
  <div class="page-login-third-part">
    <el-divider>其他登录方式</el-divider>
    <div class="third-part-coms">
      <svg-icon name="#icon-zhifubao" size="36px"/>
      <svg-icon name="#icon-weixin1" size="36px"/>
      <svg-icon name="#icon-weibo1" size="36px"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "login-third-part"
}
</script>

<style scoped lang="scss">
  .page-login-third-part{
    .third-part-coms{
      display: flex;
      justify-content: space-around;
    }
  }
</style>

<style>
  .el-divider__text{
    background: #f7f7f7;
  }
</style>
