<template>
  <el-popover
      width="336"
      placement="bottom"
      trigger="click">
    <div class="popper-body-wrapper">
      <div class="popper-body-tabs">
        <el-tabs
            :stretch="true"
            v-model="activeTab"
            @tab-click="handleClick">
          <el-tab-pane label="通知" name="notice">
            <div>
<!--              <notification-item type="notice"/>-->
<!--              <notification-item type="notice"/>-->
              <empty :show="true" mode="list" text="消息为空"/>

            </div>
          </el-tab-pane>
          <el-tab-pane label="消息" name="message">
            <div>
              <notification-item type="message"/>
              <notification-item type="message"/>
            </div>
          </el-tab-pane>
          <el-tab-pane label="待办" name="todo">
            <div>
              <notification-item type="todo"/>
              <notification-item type="todo"/>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <navbar-button @click="handleClick" slot="reference">
      <icon name="icon-bell" size="20"></icon>
    </navbar-button>
  </el-popover>
</template>

<script>
import NavbarButton from "./NavbarButton";
import NotificationItem from "./NotificationItem";
export default {
  name: "Notification",
  components:{NavbarButton,NotificationItem},
  data(){
    return{
      activeTab:'notice',
    }
  },
  methods:{
    handleClick(){
      console.log("点击刷新页面")
    }
  }
}
</script>

<style lang="scss" scoped>
  .popper-body-wrapper{
    width: 100%;
    display: flex;
    flex-direction: column;
    .popper-body-tabs{
      width: 100%;

    }
  }
</style>


