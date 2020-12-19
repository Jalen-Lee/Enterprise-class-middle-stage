<template>
  <div class="profile-card-wrap">
    <div class="profile-card-wrap-row">
      <img :src="userInfo.avatar" class="profile-card-wrap-avatar">
      <div class="profile-card-wrap-username">{{userInfo.username}}</div>
      <div class="profile-card-wrap-desc">大风起兮云飞扬</div>
    </div>
    <el-divider></el-divider>
    <div class="profile-card-wrap-row">
      <el-row>
        <el-col :span="24">
          <icon name="el-icon-s-cooperation" label="前端技术专家" :image="true"></icon>
        </el-col>
        <el-col :span="24">
          <icon name="el-icon-user-solid" label="中台-数据平台团队-前端创新团队-前端架构"></icon>
        </el-col>
        <el-col :span="24">
          <icon name="el-icon-s-flag" label="广东省 深圳市 字节跳动"></icon>
        </el-col>
      </el-row>
    </div>
    <el-divider></el-divider>
    <div class="profile-card-wrap-row">
      <el-row>
        <el-col :span="24">
          <icon :name="img_vue"  :image="true" size="22px"></icon>
          <el-progress :percentage="90" :format="format"></el-progress>
        </el-col>
        <el-col :span="24">
          <icon :name="img_react"  :image="true" size="22px"></icon>
          <el-progress :percentage="50" :format="format"></el-progress>
        </el-col>
        <el-col :span="24">
          <icon :name="img_angular"  :image="true" size="22px"></icon>
          <el-progress :percentage="35" :format="format"></el-progress>
        </el-col>
        <el-col :span="24">
          <icon :name="img_nodejs"  :image="true" size="22px"></icon>
          <el-progress :percentage="66" :format="format"></el-progress>
        </el-col>
      </el-row>
    </div>
    <el-divider></el-divider>
    <div class="profile-card-wrap-row">
      <el-tag closable size="medium">默认标签</el-tag>
      <el-tag closable size="medium">默认</el-tag>
      <el-tag closable size="medium">默认标</el-tag>
      <el-tag closable size="medium">默</el-tag>
      <el-tag closable size="medium">默认标签ff</el-tag>
      <el-tag closable size="medium">默认标签645</el-tag>
      <el-tag closable size="medium">默认标签</el-tag>
      <el-tag closable size="medium">默认标签</el-tag>
      <el-tag closable size="medium">默认标签</el-tag>
      <el-tag closable size="medium">默认标签</el-tag>
    </div>
    <el-divider></el-divider>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "profile-card",
    data(){
      return {
        img_vue:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-fupg0rkcwtyda9cfc2/d8779070-405e-11eb-bd01-97bc1429a9ff.png',
        img_react: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-fupg0rkcwtyda9cfc2/67e3cf90-41f8-11eb-bc56-c9cea619f663.png',
        img_angular: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-fupg0rkcwtyda9cfc2/689ac380-41f8-11eb-bd01-97bc1429a9ff.png',
        img_nodejs: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-fupg0rkcwtyda9cfc2/67334440-41f8-11eb-b680-7980c8a877b8.png'
      }
    },
    computed:{
      ...mapState([
        'userInfo'
      ])
    },
    methods:{
      format(percentage) {
        return percentage >=70 ? '精通' : `熟悉`;
      }
    }
  }
</script>

<style scoped lang="scss">
  .profile-card-wrap{
    padding: 24px;
    /*flex: 1;*/
    /*width: 100%;*/
    background: #ffffff;
    text-align: center;
    &-row{
      width: 100%;
    }
    &-avatar{
      width: 104px;
      height: 104px;
      margin-bottom: 20px;
      border-radius: 50%;
    }
    &-username{
      margin-bottom: 4px;
      color: rgba(0,0,0,.85);
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
    }
    &-desc{

    }
  }
</style>
<style lang="scss">
  .profile-card-wrap{
    .el-col{
      display: flex;
      margin-bottom: 10px;
      align-items: center;
      width: 100%;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-progress{
      width: 100%;
    }
    .el-divider{
      margin: 24px 0;;
    }
    .el-tag{
      padding: 0 10px;
      margin: 5px;
    }
  }
</style>
