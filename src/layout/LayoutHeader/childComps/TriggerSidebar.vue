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
        return this.$store.state.app.aside.open
      }
    },
    methods:{
      handleClick(){
        this.$store.commit('app/toggleAside')
      }
    }
  }
</script>
