<template>
  <div :class="['avatar-wrapper','avatar-wrapper--'+labelPos]">
    <el-avatar
        :icon="icon"
        :src="src"
        :shape="shape"
        :size="size"
        :alt="alt"
        :fit="fit"
        @error="handleError"
    ></el-avatar>
    <span
        class="avatar-label"
        :style="{
          marginLeft : labelPos === 'right'?sizeFormat(marginLeft):0,
          marginRight : labelPos === 'left'?sizeFormat(marginRight):0,
        }"
    >{{label}}</span>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  methods:{
    handleError(){
      this.$emit('error')
    },
    sizeFormat(value){
      return this.$rule.number(value) ? `${value}px` : value;
    }
  },
  props:{
    //图片头像的资源地址
    src:{
      type:String,
      default:''
    },
    //头像搭配的文字
    label:{
      type:String,
      default:''
    },
    //设置头像的图标类型
    icon:{
      type:String,
      default:'el-icon-user-solid'
    },
    //设置头像的大小
    size:{
      type:[String,Number],
      default:'large'
    },
    //设置头像的形状
    shape:{
      type:String,
      default:'circle'
    },
    //描述头像的替换文本
    alt:{
      type:String,
      default:''
    },
    //当展示类型为图片的时候，设置图片如何适应容器框
    fit:{
      type:String,
      default:'cover'
    },
    labelPos:{
      type:String,
      default: 'right'
    },
    marginLeft:{
      type:[String,Number],
      default: '6px'
    },
    marginRight:{
      type:[String,Number],
      default: '6px'
    },
  }
}
</script>

<style scoped lang="scss">
  .avatar-wrapper{
    display: flex;
    align-items: center;
    &--left{
      flex-direction: row-reverse;
    }
    &--right{
      flex-direction: row;
    }
    .avatar-label{
      margin-left: 6px;
    }
  }
</style>
