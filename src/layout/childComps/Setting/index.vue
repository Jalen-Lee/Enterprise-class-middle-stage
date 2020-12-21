<template>
  <div class="setting-panel-wrapper">
    <ul class="settings-list">
      <li class="settings-option">
        <span>固定 Header</span>
        <el-switch v-model="header"></el-switch>
      </li>
      <li class="settings-option">
        <span>显示 tagsVies</span>
        <el-switch v-model="tagsVies"></el-switch>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Setting",
    data(){
      return{

      }
    },
    computed:{
      header:{
        get(){
          return this.$store.state.app.header.fixed
        },
        set(){
          this.$store.commit('app/toggleHeaderFixed')
        }
      },
      tagsVies:{
        get(){
          return this.$store.state.app.tagsView.show
        },
        set(){
          this.$store.commit('app/toggleTagsView')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .setting-panel-wrapper{
    width: 100%;
    height: 100vh;
    overflow: scroll;
    padding: 24px;
    font-size: 14px;
    .settings-list{
      width: 100%;
      margin: 10px 0;
      .settings-option{
        &:not(:last-child){
          margin-bottom: 10px;
        }
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
