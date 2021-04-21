<template>
  <span class="view-tab-item">
    <el-tag
        :closable="!isCurrentRoute"
        effect="plain"
        :class="[isCurrentRoute ? 'current':'']"
        @click="handleClick"
        @close="handleClose"
    >{{route.meta.title}}</el-tag>
  </span>
</template>

<script>

  export default {
    name: "TabItem",
    computed:{
      isCurrentRoute(){
        return this.$route.fullPath === this.route.fullPath
      }
    },
    methods:{
      //点击标签
      handleClick(){
        const { path, query } = this.route
        this.$router.replace({ path, query })
        this.$emit('update:person.name',"name")
      },
      //关闭标签
      handleClose(){
        this.$store.commit('tagsView/delVisitedView',this.route)
        console.log("关闭标签",this.route.meta.title)
      }
    },
    props:{
      route:{
        type:Object,
      },
    },
    mounted() {

    }
  }
</script>

<style lang="scss">
  .view-tab-item{
    display: inline-block;
    margin-right: 6px;
    box-sizing: border-box;
    border: 1px solid transparent;
    .el-tag--plain{
      border: none;
      line-height: 32px;
      cursor: pointer;
      color: #808695;
      .el-tag__close{
        color: inherit;
      }
    }
    .current{
      color: #409eff;
      .el-tag__close{
        color: inherit;
      }
    }
  }
</style>
