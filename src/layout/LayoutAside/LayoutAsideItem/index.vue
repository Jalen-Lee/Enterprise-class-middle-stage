<template>
  <component
      v-if="!item.hidden"
      :key="item.path"
      :is="item.children && item.children.length > 0 ? 'el-submenu':'el-menu-item'"
      :index = "item.path"
      :route="item.children && item.children.length > 0 ? {path: item.path}:null"
  >
    <template slot="title">
      <i v-if="item.meta.icon && item.meta.icon.length > 0" :class="['iconfont',item.meta.icon]"></i>
      <span>{{item.meta.title}}</span>
    </template>
    <template
        v-if="item.children && item.children.length > 0"
        v-for="child in item.children"
    >
      <layout-aside-item
          :item="child"
      />
    </template>
  </component>
</template>

<script>
/**
 *  递归组件，用于渲染多层嵌套的路由表
 * */
export default {
  name: "layout-aside-item",
  data(){
    return {

    }
  },
  props:{
    item: {
      type: Object,
      required: true
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
.iconfont{
  margin-right: 8px;
}
</style>
