<template>
  <div class="page-404-wrapper">
    <empty show>
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
      <el-button>123</el-button>
    </empty>
  </div>
</template>

<script>
  export default {
    name: "error404"
  }
</script>

<style scoped lang="scss">
  .page-404-wrapper{
    height: 100%;
  }

</style>
