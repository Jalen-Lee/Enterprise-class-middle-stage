<template>
  <div class="trigger-sidebar-wrapper">
    <navbar-button @click="handleClick">
      <icon name="icon-outdent" size="18"></icon>
    </navbar-button>
  </div>
</template>

<script>
  import NavbarButton from "./NavbarButton";
  export default {
    name: "TriggerSidebar",
    components:{NavbarButton},
    methods:{
      handleClick(){
        console.log("点击展开或关闭侧边栏")
      }
    }
  }
</script>
