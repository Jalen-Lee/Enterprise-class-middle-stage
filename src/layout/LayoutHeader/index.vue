<template>
  <header
      class="gre-layout-header"
      :class="[header.fixed?'layout-header-fixed':'']"
      :style="style"
  >
    <div class="gre-layout-header-layer">
      <div class="gre-layout-header-layer-side">
        <trigger-sidebar/>
        <refresh/>
        <Breadcrumb v-if="!isMobile" />
      </div>
      <div class="gre-layout-header-layer-side">
        <notification/>
        <screen-full/>
        <user-avatar/>
        <Language/>
        <more-options/>
      </div>
    </div>
    <layout-view-tab/>
  </header>
</template>

<script>
import TriggerSidebar from "@/layout/LayoutHeader/childComps/TriggerSidebar";
import Refresh from "@/layout/LayoutHeader/childComps/Refresh";
import Breadcrumb from "@/layout/LayoutHeader/childComps/Breadcrumb";
import MoreOptions from "@/layout/LayoutHeader/childComps/MoreOptions";
import Language from "@/layout/LayoutHeader/childComps/Language";
import ScreenFull from "@/layout/LayoutHeader/childComps/ScreenFull";
import UserAvatar from "@/layout/LayoutHeader/childComps/UserAvatar";
import Notification from "@/layout/LayoutHeader/childComps/Notification";
import SearchBar from "@/layout/LayoutHeader/childComps/SearchBar";
import LayoutViewTab from '@/layout/LayoutViewTab'

import { mapState } from 'vuex'
export default {
  name: "layout-header",
  components: {TriggerSidebar,Refresh,Breadcrumb,MoreOptions,Language,ScreenFull,UserAvatar,Notification,SearchBar,LayoutViewTab},
  computed: {
    ...mapState({
      device: state => state.app.device,
      aside :state => state.app.aside,
      header : state => state.app.header
    }),
    style(){
      if(this.aside.open && this.device.type !== 'Mobile')
        return {width:"calc(100vw - 261px)"}
      else if(!this.aside.open && this.device.type !== 'Mobile')
        return {width:"calc(100vw - 69px)"}
    },
    isMobile() {
      return this.device.type === 'Mobile';
    }
  }
}
</script>

<style scoped lang="scss">
.gre-layout-header{
  display: flex;
  flex-direction: column;
  height: 108px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  &-layer{
    display: flex;
    justify-content: space-between;
    &-side{
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
}
.layout-header-fixed{
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    transition: width .3s  ease-in-out;
}
</style>
