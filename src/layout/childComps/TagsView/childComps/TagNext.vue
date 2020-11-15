<template>
  <div class="tag-previous-wrap" @click="handleClick">
    <i class="iconfont icon-right"></i>
  </div>
</template>

<script>
  export default {
    name: "TagNext",
    methods:{
      handleClick(){
        this.$emit('click')
      }
    }
  }
</script>

<style scoped lang="scss">
.tag-previous-wrap{
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
}
</style>
