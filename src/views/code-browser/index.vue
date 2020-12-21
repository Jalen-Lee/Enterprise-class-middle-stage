<template>
  <div class="code-browser-wrap">
    <div class="code-editor-container">
      <code-editor
          v-model="code"
          mode="javascript"
          editor-theme="mac"
          code-theme="base16-dark"
          :read-only="false"
      >
        <template slot="left">
          <files-tree
              :dir="dir"
              @node-click="handleNodeClick"
          ></files-tree>
        </template>

      </code-editor>
    </div>
  </div>
</template>

<script>
  export default {
    name: "code-browser",
    data(){
      return{
        dir:[],
        code:''
      }
    },
    computed:{

    },
    methods:{
      handleNodeClick(payload){
        const {data,node,self} = payload
        if(node.isLeaf){
          this.$request({
            url:'/api/codeFile',
            method:'post',
            data:{
              path: data.path
            }
          }).then(res=>{
            // console.log(res.data)
            this.code = res.data
          })
        }
      }
    },
    created() {
      this.$request({
        url:'/api/getFiles',
        method:'get'
      }).then(res=>{
        this.dir = res.dir
      })

      this.$request({
        url: '/api/getCode',
        method:'get'
      }).then(res=>{
        this.code = res.data
      })
    },
  }
</script>

<style scoped lang="scss">
  .code-browser-wrap{
    width: 100%;
    .code-editor-container{
      width: 100%;
      height: calc(100vh - 148px);
    }
  }
</style>
