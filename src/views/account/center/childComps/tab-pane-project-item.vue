<template>
  <el-card
      :body-style="{ padding: '0px'}"
      shadow="hover"
  >
    <img :src="item.cover" class="image">
    <div style="padding: 14px;">
      <span class="title">{{item.title}}</span>
      <div class="summary">
        {{item.summary}}
      </div>
      <div class="bottom clearfix">
        <span class="time">{{item.time | timeFrom }}</span>
      </div>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: "tab-pane-project-item",
    data(){
      return{
        currentDate: Date.now()
      }
    },
    props:{
      item:{
        type:Object
      }
    }
  }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }
  .title{
    overflow: hidden;
    color: rgba(0,0,0,.85);
    font-weight: 800;
    font-size: 16px;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    transition: color .3s;
    margin-bottom: 10px;
  }
  .summary{
    font-size: 14px;
    color: rgba(0,0,0,.45);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
