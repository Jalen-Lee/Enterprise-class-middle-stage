<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="文章" name="articles">
      <tab-pane-article/>
    </el-tab-pane>
    <el-tab-pane label="应用" name="apps">
      <tab-pane-application/>
    </el-tab-pane>
    <el-tab-pane label="项目" name="projects">
      <tab-pane-project/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import TabPaneApplication from './tab-pane-application'
  import TabPaneProject from './tab-pane-project'
  import TabPaneArticle from './tab-pane-article'
  export default {
    name: "Tabs",
    components:{TabPaneApplication,TabPaneArticle,TabPaneProject},
    data() {
      return {
        activeName: 'projects'
      };
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      }
    }
  }
</script>

<style scoped>

</style>
<style lang="scss">
  .el-tabs__header{
    margin-bottom: 0;
    padding: 0 16px;
    background: #ffffff;
  }
  .tab-pane-wrap{
    width: 100%;
    background: #ffffff;
    padding: 24px;
  }
</style>
