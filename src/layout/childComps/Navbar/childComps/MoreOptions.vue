<template>
  <div class="trigger-sidebar-wrapper">
    <navbar-button @click="handleClick">
      <icon name="icon-menu" size="18"></icon>
    </navbar-button>
    <el-drawer
        title="我是标题"
        append-to-body
        :visible.sync="drawer.visible"
        :direction="drawer.direction"
        :with-header="drawer.withHeader"
        :destroyOnClose="drawer.destroyOnClose"
        >
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
import NavbarButton from "./NavbarButton";
export default {
  name: "MoreOptions",
  components:{NavbarButton},
  data(){
    return{
      drawer:{
        //是否显示 Drawer，支持 .sync 修饰符
        visible:false,
        //	Drawer 打开的方向 rtl / ltr / ttb / btt
        direction:'rtl',
        //是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效
        withHeader:false,
        //是否在关闭 Drawer 之后将子元素全部销毁
        destroyOnClose:false,
        //Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释
        size:''
      }
    }
  },
  methods:{
    handleClick(){
      this.drawer.visible = !this.drawer.visible
    }
  }
}
</script>
