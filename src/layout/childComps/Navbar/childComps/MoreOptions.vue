<template>
  <div class="trigger-sidebar-wrapper">
    <navbar-button @click="handleClick">
      <icon name="icon-menu" size="18"></icon>
    </navbar-button>
  </div>
</template>

<script>
import NavbarButton from "./NavbarButton";
export default {
  name: "MoreOptions",
  components:{NavbarButton},
  methods:{
    handleClick(){
      console.log("点击刷新页面")
    }
  }
}
</script>
