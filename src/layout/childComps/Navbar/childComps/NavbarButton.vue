<template>
  <div class="navbar-button-wrapper" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "NavbarButton",
    methods:{
      handleClick(){
        this.$emit('click')
      }
    }
  }
</script>

<style scoped lang="scss">
  .navbar-button-wrapper{
    padding: 0 12px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .2s ease-in-out;
    &:hover{
      background: #f8f8f9;
    }
  }
</style>
