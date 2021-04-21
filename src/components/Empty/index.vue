<template>
  <div
      class="empty-wrapper"
      v-if="show">
    <img :src="_imgSrc" :alt="this.type" class="empty-img">
    <div class="empty-text">
      <slot name="text">
        <span >{{text}}</span>
      </slot>
    </div>
    <div class="empty-slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import svgMap from "@/assets/svgs";
  export default {
    name: "empty",
    data(){
      return {

      }
    },
    props:{
      show:{
        type:Boolean,
        default:false
      },
      type:{
        type:String,
        default:"暂无数据"
      },
      customImg:{
        type:String,
        default: ''
      },
      text:{
        type:String,
        default:'暂无数据'
      }
    },
    computed:{
      _imgSrc(){
        return svgMap[this.type + '.svg']
      }
    },
    mounted() {

    }
  }
</script>

<style scoped lang="scss">
  .empty-wrapper{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 73px 0 88px;
    .empty-img{
      width: 30%;
      height: 30%;
      overflow: hidden;
      margin-bottom: 15px;
    }
    .empty-text{
      font-size: 20px;
      margin-bottom: 15px;
    }
    .empty-slot{

    }
  }
</style>
