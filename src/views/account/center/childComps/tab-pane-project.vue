<template>
  <div class="tab-pane-wrap tab-pane-article-wrap">
    <el-row :gutter="20">
      <el-col :span="6" v-for="(project, index) in projects" :key="index" >
        <tab-pane-project-item :item="project"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import tabPaneProjectItem from './tab-pane-project-item'
  export default {
    name: "tab-pane-project",
    components:{tabPaneProjectItem},
    computed:{
      ...mapState({
        projects: state => state.accountCenter.projects,
      })
    },
    mounted() {
      // console.log(this.projects)
    }
  }
</script>

<style  lang="scss">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col{
    margin-bottom: 20px;
  }
</style>
