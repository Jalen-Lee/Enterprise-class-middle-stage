<template>
  <div
      class="empty-wrapper"
      :style="{
        color:color,
        fontSize: fontSize
      }"
      v-if="show">
      <icon :name="icon[mode].name" :size="iconSize" :color="iconColor"/>
      <div class="empty-slot">
        <slot>{{text ? text : icon[mode].text}}</slot>
      </div>
  </div>
</template>

<script>
  export default {
    name: "empty",
    data(){
      return {
        icon:{
          data:{
            name:'icon-wuneirong',
            text:'无内容'
          },
          notice:{
            name:'icon-zanwutongzhi',
            text:'无消息'
          },
          search:{
            name:'icon-wujilu',
            text:'无记录'
          },
          list:{
            name:'icon-liebiaoweikong',
            text:'列表为空'
          }
        }
      }
    },
    props:{
      show:{
        type:Boolean,
        default:false
      },
      mode:{
        type:String,
        default: 'data'
      },
      text:{
        type:String,
        default:"无内容"
      },
      color:{
        type:String,
        default:'rgb(192, 196, 204)'
      },
      fontSize:{
        type:[Number,String],
        default:'18px'
      },
      iconColor:{
        type:String,
        default:'rgb(192, 196, 204)'
      },
      iconSize:{
        type:[String,Number],
        default:"60px"
      }
    }
  }
</script>

<style scoped lang="scss">
  .empty-wrapper{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 73px 0 88px;
    .empty-slot{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
    }
  }
</style>
