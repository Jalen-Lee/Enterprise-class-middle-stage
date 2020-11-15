<template>
  <div class="trigger-sidebar-wrapper">
    <navbar-button @click="handleClick">
      <icon :name="hasOpened?'icon-outdent':'icon-indent'" size="18"></icon>
    </navbar-button>
  </div>
</template>

<script>
  import NavbarButton from "./NavbarButton";
  export default {
    name: "TriggerSidebar",
    components:{NavbarButton},
    computed:{
      hasOpened(){
        return this.$store.state.app.sideBar.open
      }
    },
    methods:{
      handleClick(){
        this.$store.commit('toggleSideBar')
      }
    }
  }
</script>
