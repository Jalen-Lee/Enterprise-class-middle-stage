<template>
  <el-dropdown @command="handleCommand">
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item icon="iconfont icon-arrowleft" command="close-left" :disabled="disabled.left">关闭左侧</el-dropdown-item>
      <el-dropdown-item icon="iconfont icon-arrowright" command="close-right" :disabled="disabled.right">关闭右侧</el-dropdown-item>
      <el-dropdown-item icon="iconfont icon-minus-circle-fill" command="close-other" :disabled="disabled.other">关闭其他</el-dropdown-item>
<!--      <el-dropdown-item icon="iconfont icon-close-circle-fill" command="close-all" :disabled="disabled.all">关闭全部</el-dropdown-item>-->
    </el-dropdown-menu>
    <div class="tag-dropdown-wrap">
      <i class="iconfont icon-down"></i>
    </div>
  </el-dropdown>
</template>

<script>
  export default {
    name: "TagsDropdown",
    data(){
      return {
        disabled:{
          left:false,
          right:false,
          other:false
        }
      }
    },
    computed:{

    },
    watch:{
      // $route:function (){
      //   const visitedViews = this.$store.state.tagsView.visitedViews
      //   const index = visitedViews.findIndex(i=>{
      //     return i.path === this.$route.path
      //   })
      //   if(index ===0 && visitedViews.length === 1){
      //     this.disabled.left = this.disabled.right = this.disabled.other = true
      //   }
      //   else if(index>0 && index < visitedViews.length-1){
      //     this.disabled.left = false
      //     this.disabled.right = false
      //     this.disabled.other = false
      //   }
      //   else if(index === 0 && visitedViews.length >1){
      //     this.disabled.left = true
      //     this.disabled.right = false
      //     this.disabled.other = true
      //   }
      //   else if(index === visitedViews.length - 1){
      //     this.disabled.left = false
      //     this.disabled.right = true
      //     this.disabled.other = true
      //   }
      // }
    },
    methods:{
      handleCommand(command){
        switch (command){
          case 'close-left':
            this.$store.commit('closeLeftViews',this.$route)
            break
          case 'close-right':
            this.$store.commit('closeRightViews',this.$route)
            break
          case 'close-other':
            this.$store.commit('closeOtherViews',this.$route)
            break
          // case 'close-all':
          //   this.$store.commit('closeAllViews',this.$route)
          //   break
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .tag-dropdown-wrap{
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background-color: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
</style>
