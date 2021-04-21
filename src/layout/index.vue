<!--<template>-->
<!--  <div-->
<!--      class="gre-basic-layout"-->
<!--      :class="[showSidebar ? 'show-sidebar' : 'hide-sidebar']"-->
<!--  >-->

<!--    <sidebar></sidebar>-->
<!--    <section-->
<!--        class="main-container"-->
<!--        :class="[headerFixed ? 'fixed-header':'',]"-->
<!--    >-->
<!--      <header-->
<!--          :class="['main-header',-->
<!--            tagsViewShow ? 'show-tagsView':''-->
<!--          ]"-->
<!--      >-->
<!--        <navbar></navbar>-->
<!--        <transition name="tagsview-fade" mode="in-out">-->
<!--          <tags-view v-if="tagsViewShow"></tags-view>-->
<!--        </transition>-->
<!--      </header>-->
<!--      <main class="main-body">-->
<!--        <app-main></app-main>-->
<!--      </main>-->
<!--    </section>-->
<!--    <el-drawer-->
<!--        size="256px"-->
<!--        :show-close="true"-->
<!--        :append-to-body="true"-->
<!--        :visible.sync="settingPanelOpen"-->
<!--        direction="ltr"-->
<!--        :withHeader="false">-->
<!--&lt;!&ndash;      <Setting v-if="$store.state.app.device.name === 'Desk'"/>&ndash;&gt;-->
<!--      <sidebar/>-->
<!--    </el-drawer>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div
      class="gre-basic-layout"
      :class="[aside.open?'':'aside-hide']"
  >
    <aside
        :style="aside.open?asideOpenStyle:asideHideStyle"
        v-if="!isMobile"
    ></aside>
    <layout-aside v-if="!isMobile"/>
    <section class="gre-basic-layout-section">
      <header style="height: 108px" v-if="header.fixed"></header>
      <layout-header />
      <layout-main/>
    </section>
    <el-drawer
        size="300px"
        :show-close="true"
        :append-to-body="true"
        :visible.sync="settingPanelOpen"
        direction="rtl"
        :withHeader="false">
      <layout-setting/>
    </el-drawer>
    <el-drawer
        size="256px"
        :show-close="true"
        :append-to-body="true"
        :visible.sync="mobileAsideOpen"
        direction="ltr"
        :withHeader="false">
      <layout-aside/>
    </el-drawer>
  </div>
</template>

<script>
  import LayoutMain from './LayoutMain'
  import LayoutAside from './LayoutAside'
  import LayoutHeader from './LayoutHeader'
  import LayoutSetting from './LayoutSetting'
  import resize from "@/mixins/resize";
  import { mapState } from 'vuex'
  export default {
    name: "layout",
    components: {LayoutMain,LayoutAside,LayoutHeader,LayoutSetting},
    mixins:[resize],
    data(){
      return {
        asideHideStyle:{
          width:'64px',
          minWidth:'64px',
          height: `100%`,
          background: `#191a23`,
          transition: `all .3s ease-in-out`,
          overflow: `auto`,
        },
        asideOpenStyle:{
          width: '256px',
          minWidth: `256px`,
          height: `100%`,
          background: `#191a23`,
          transition: `all .3s ease-in-out`,
          overflow: `auto`,
        },
      }
    },
    computed:{
      ...mapState({
        aside: state => state.app.aside,
        device: state => state.app.device,
        header: state => state.app.header,
        viewTabs: state => state.app.viewTabs,
      }),
      settingPanelOpen:{
        get() {
          return this.$store.state.app.settingPanel.open
        },
        set() {
          this.$store.commit('app/toggleSettingPanelOpen')
        }
      },
      mobileAsideOpen:{
        get() {
          return this.$store.state.app.aside.mobileOpen
        },
        set() {
          this.$store.commit('app/toggleAside')
        }
      },
      isMobile(){
        console.log("改变了")
        return this.device.type === 'Mobile'
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss">
  .gre-basic-layout{
    height: 100%;
    position: relative;
    display: flex;
    &-section{
      flex: auto;
    }
  }
</style>

<!--<style scoped lang="scss">-->
<!--  .gre-basic-layout{-->
<!--    width: 100%;-->
<!--    height: 100%;-->
<!--    position: relative;-->
<!--    .main-container{-->
<!--      min-height: 100%;-->
<!--      transition: margin-left .3s  ease-in-out;-->
<!--      margin-left: 256px;-->
<!--      .main-header{-->
<!--      }-->
<!--      .main-body{-->
<!--        min-height: calc(100vh - 64px);-->
<!--        width: 100%;-->
<!--        position: relative;-->
<!--        overflow: hidden;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--  //顶部固定-->
<!--  .fixed-header{-->
<!--    .main-header{-->
<!--      position: fixed;-->
<!--      top: 0;-->
<!--      right: 0;-->
<!--      z-index: 9;-->
<!--      transition: width .3s  ease-in-out;-->
<!--    }-->
<!--    .show-tagsView+.main-body{-->
<!--      transition: padding-top .3s;-->
<!--      padding-top: 108px;-->
<!--    }-->
<!--    .main-body{-->
<!--      transition: padding-top .3s;-->
<!--      padding-top: 64px;-->
<!--    }-->
<!--  }-->
<!--  //显示侧边栏-->
<!--  .show-sidebar{-->
<!--    .main-container{-->
<!--      margin-left: 256px;-->
<!--    }-->
<!--    .fixed-header{-->
<!--      .main-header{-->
<!--        width: calc(100vw - 256px);-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--  //隐藏侧边栏-->
<!--  .hide-sidebar{-->
<!--    .main-container{-->
<!--      margin-left: 64px;-->
<!--    }-->
<!--    .fixed-header{-->
<!--      .main-header{-->
<!--        width: calc(100vw - 64px);-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</style>-->



