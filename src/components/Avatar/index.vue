<template>
  <div class="avatar-wrapper">
    <el-avatar  icon="el-icon-user-solid" :src="src"></el-avatar>
    <span class="avatar-label">{{label}}</span>
  </div>
</template>

<script>
export default {
  name: "index",
  props:{
    src:{
      type:String,
      default:''
    },
    label:{
      type:String,
      default:'You'
    }
  }
}
</script>

<style scoped lang="scss">
  .avatar-wrapper{
    display: flex;
    align-items: center;
    .avatar-label{
      margin-left: 6px;
    }
  }
</style>
