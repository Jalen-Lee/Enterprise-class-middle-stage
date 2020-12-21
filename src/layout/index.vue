<template>
  <div
      :class="[
          'layout-wrapper',
          showSidebar ? 'show-sidebar' : 'hide-sidebar',
      ]"
  >
    <div class="sidebar-container">
      <sidebar></sidebar>
    </div>
    <div
        :class="[
            'main-container',
            headerFixed ? 'fixed-header':'',
        ]"
    >
      <div
          :class="['main-header',
            tagsViewShow ? 'show-tagsView':''
          ]"
      >
        <navbar></navbar>
        <transition name="tagsview-fade" mode="in-out">
          <tags-view v-if="tagsViewShow"></tags-view>
        </transition>
      </div>
      <div class="main-body">
        <app-main></app-main>
      </div>
    </div>
    <el-drawer
        size="300px"
        :show-close="true"
        :append-to-body="true"
        :visible.sync="settingPanelOpen"
        :withHeader="false">
      <setting/>
    </el-drawer>
  </div>
</template>

<script>
  import {AppMain,Navbar,Setting,Sidebar,TagsView} from './childComps'
  export default {
    name: "layout",
    components: {AppMain,Navbar,Sidebar,Setting,TagsView},
    computed:{
      showSidebar(){
        return this.$store.state.app.sideBar.open
      },
      headerFixed(){
        return this.$store.state.app.header.fixed
      },
      tagsViewShow(){
        return this.$store.state.app.tagsView.show
      },
      settingPanelOpen:{
        get() {
          return this.$store.state.app.settingPanel.open
        },
        set() {
          this.$store.commit('app/toggleSettingPanelOpen')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .layout-wrapper{
    width: 100%;
    height: 100%;
    position: relative;
    .sidebar-container{
      height: 100%;
      position: fixed;
      font-size: 0;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1001;
    }
    .main-container{
      min-height: 100%;
      transition: margin-left .3s  ease-in-out;
      margin-left: 256px;
      .main-header{
      }
      .main-body{
        min-height: calc(100vh - 64px);
        width: 100%;
        position: relative;
        overflow: hidden;
      }
    }
  }
  //顶部固定
  .fixed-header{
    .main-header{
      position: fixed;
      top: 0;
      right: 0;
      z-index: 9;
      transition: width .3s  ease-in-out;
    }
    .show-tagsView+.main-body{
      transition: padding-top .3s;
      padding-top: 108px;
    }
    .main-body{
      transition: padding-top .3s;
      padding-top: 64px;
    }
  }
  //显示侧边栏
  .show-sidebar{
    .main-container{
      margin-left: 256px;
    }
    .fixed-header{
      .main-header{
        width: calc(100% - 256px);
      }
    }
  }
  //隐藏侧边栏
  .hide-sidebar{
    .main-container{
      margin-left: 64px;
    }
    .fixed-header{
      .main-header{
        width: calc(100% - 64px);
      }
    }
  }


</style>

