<template>
  <div class="notice-item-wrapper">
    <div class="notice-item-meta-avatar" v-if="type === 'notice'|| type === 'message'">
      <el-avatar icon="el-icon-user-solid"></el-avatar>
    </div>
    <div class="notice-item-meta-content">
      <h4 class="notice-item-meta-content-title">
        <div class="notice-item-meta-content-title-body">你收到了14份新周报</div>
        <div class="notice-item-meta-content-tag" v-if="type === 'todo'">
          <el-tag type="success" size="mini">标签二</el-tag>
        </div>
      </h4>
      <div class="notice-item-meta-content-description">
        <div class="notice-item-meta-content-description-body" v-if="type === 'message'">
          大苏打三大势力大萨达萨达萨达萨达是
        </div>
        <div class="notice-item-meta-content-date">3年前</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NotificationItem",
    data(){
      return {

      }
    },
    methods:{

    },
    props:{
      type:{
        type:String,
        required:true
      },
      data:{
        type:Object
      }
    }
  }
</script>

<style scoped lang="scss">
  .notice-item-wrapper{
    display: flex;
    width: 100%;
    padding: 12px 0;
    overflow: hidden;
    cursor: pointer;
    transition: all .3s;
    border-bottom: 1px solid #f0f0f0;
    &:hover{
      background: #e6f7ff;
    }
    .notice-item-meta-avatar{
      margin-right: 16px;
    }
    .notice-item-meta-content{
      display: flex;
      flex: 1 0;
      flex-direction: column;
      .notice-item-meta-content-title{
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        color: rgba(0,0,0,.85);
        font-size: 14px;
        line-height: 1.5715;
        .notice-item-meta-content-title-body{

        }
        .notice-item-meta-content-tag{
          float: right;
          margin-top: -1.5px;
          margin-right: 0;
          color: rgba(0,0,0,.45);
          font-weight: 400;
        }
      }
      .notice-item-meta-content-description{
        color: rgba(0,0,0,.45);
        font-size: 14px;
        line-height: 1.5715;
        .notice-item-meta-content-description-body{
          font-size: 12px;
          line-height: 1.5715;
        }
        .notice-item-meta-content-date{
          margin-top: 4px;
          font-size: 12px;
          line-height: 1.5715;
        }
      }
    }
  }
</style>
