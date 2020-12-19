<template>
  <div class="files-tree-wrap">
    <el-tree
        :data="dir"
        :props="defaultProps"
        @node-click="handleNodeClick">
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <icon
              :image="true"
              :name="handleName(data.type)"
              :label="data.name"></icon>
        </span>
    </el-tree>
  </div>
</template>

<script>
  export default {
    name: "files-tree",
    data() {
      return {
        defaultProps: {
          children: 'children',
          label: 'name'
        }
      };
    },
    computed:{

    },
    props:{
      dir:{
        type:Array
      }
    },
    methods: {
      handleNodeClick(data,node,self) {
        this.$emit('node-click',{data,node,self})
      },
      handleName(type){
        switch (type){
          case 'html':
            return 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-fupg0rkcwtyda9cfc2/d54c6830-405e-11eb-bd01-97bc1429a9ff.png'
          case 'css':
            return 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-fupg0rkcwtyda9cfc2/da3fa640-405e-11eb-bd01-97bc1429a9ff.png'
          case 'js':
            return 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-fupg0rkcwtyda9cfc2/d6391220-405e-11eb-b680-7980c8a877b8.png'
          case 'md':
            return 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-fupg0rkcwtyda9cfc2/d7c46d10-405e-11eb-bd01-97bc1429a9ff.png'
          case 'json':
            return 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-fupg0rkcwtyda9cfc2/d701e060-405e-11eb-bd01-97bc1429a9ff.png'
          case 'vue':
            return 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-fupg0rkcwtyda9cfc2/d8779070-405e-11eb-bd01-97bc1429a9ff.png'
          case 'dir':
            return 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-fupg0rkcwtyda9cfc2/d9b54090-405e-11eb-bf0a-894cbc80c40a.png'
          default:
            return 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-fupg0rkcwtyda9cfc2/d9172bd0-405e-11eb-bd01-97bc1429a9ff.png'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .files-tree-wrap{
    height: 100%;
    overflow-x: hidden;
    background: #ffffff;
    padding-bottom: 0;
    .custom-tree-node{
      display: flex;
      align-items: center;
    }
  }
</style>

<style>
  .el-tree{

  }
</style>
