<template>
  <div class="trigger-sidebar-wrapper">
    <navbar-button @click="handleClick">
      <icon name="icon-earth" size="18"></icon>
    </navbar-button>
  </div>
</template>

<script>
import NavbarButton from "./NavbarButton";
export default {
  name: "Language",
  components:{NavbarButton},
  methods:{
    handleClick(){
      console.log("点击切换语言")
    }
  }
}
</script>
