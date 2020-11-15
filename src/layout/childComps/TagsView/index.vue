<template>
  <div class="tags-view-wrapper">
    <div class="tags-view-wrapper-body" ref="tagsContainer">
      <div
          ref="tagsScroll"
          class="tags-view-wrapper-body-content"
          :style="{
            transform: `translateX(${translateX}px)`
          }">
        <transition-group name="breadcrumb">
          <visited-tag v-for="item in visitedViews" :route="item" :key="item.path" :person.sync="person" />
        </transition-group>
      </div>
    </div>
    <div class="tags-view-wrapper-scroll" >
      <tag-previous @click="handlePrevious" v-if="showTagBoard"/>
      <tag-next @click="handleNext" v-if="showTagBoard"/>
      <tags-dropdown/>
    </div>
  </div>
</template>

<script>
  import VisitedTag from "./childComps/VisitedTag";
  import TagPrevious from "./childComps/TagPrevious";
  import TagNext from "./childComps/TagNext";
  import TagsDropdown from "./childComps/TagsDropdown";
  export default {
    customOption: 'foo',
    name: "TagsView",
    components: {VisitedTag,TagsDropdown,TagPrevious,TagNext},
    data(){
      return {
        translateX:0,
        tags:[],
        showTagBoard: false,
        person:{
          name:"david",
          age:18
        }
      }
    },
    computed:{
      visitedViews(){
        return this.$store.state.tagsView.visitedViews
      }
    },
    methods:{
      //初始化
      init(age){
        console.log("这是父组件的init函数")
        console.log("输出子组件的调用时的参数",age)
        console.log("输出父组件作用域的data")
        console.log("这是父组件的data",this.visitedViews)
      },
      //添加标签
      handleAddTag(){
        //跳转路由不加入视图列表
        if(this.$route.path.includes("redirect")){
          // console.log("当前是跳转")
          return
        }
        //找到则返回元素，找不到返回undefined
        const isExist= this.visitedViews.find(item=>{
          return item.path === this.$route.path
        })
        if(!isExist)
          this.$store.commit('addVisitedView',this.$route)
          // this.tags.push(this.$route)
        // this.tags.push(this.$route)
        // console.log(this.tags)
      },
      //标签栏左移
      handlePrevious(){
          this.translateX = 0
      },
      //标签栏右移
      handleNext(){
        setTimeout(()=>{
          if(this.hasOver())
              //此处减1是因为真实scrollWidth是有小数的，但是api返回的是整数
            this.translateX = this.$refs.tagsContainer.clientWidth - this.$refs.tagsScroll.scrollWidth - 1
        },100)
      },
      //判断页面是否有滚动条
      hasScrollbar() {
        const main = document.querySelector('.main-container')
        return main.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
      },
      //判断视图标签栏的长度是否超出了容器
      hasOver(){
        //此处减1是因为真实scrollWidth是有小数的，但是api返回的是整数
        const scrollContainerWidth = this.$refs.tagsContainer.clientWidth - 1
        const scrollWidth = this.$refs.tagsScroll.scrollWidth
        return scrollWidth > scrollContainerWidth
      }
    },
    watch: {
      $route:{
        handler: function (val, oldVal) {
          this.handleAddTag()
          this.$nextTick(()=>{
            this.showTagBoard = this.hasOver();
            this.handleNext()
          })
        },
        deep: true,
        immediate:true
      },
      person:{
        handler:function (newVal,oldVal){
          console.log("person改变啦，新的是",newVal)
        },
        deep:true
      }
    },
    mounted() {
      // this.init()
    }
  }
</script>

<style scoped lang="scss">
  .tags-view-wrapper{
    height: 44px;
    padding: 6px 12px;
    display: flex;
    justify-content: space-between;
    box-shadow: 1px 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
    background-color: #f7f7f7;
    &>*{
      display: inline-block;
    }
    &-body{
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      .tags-view-wrapper-body-content{
        float: left;
        transition: transform .5s ease-in-out;
      }
    }
    &-scroll{
      &>*{
        display: inline-block;
      }
    }
    .visited-tag-wrap{
      display: inline-block;
      &:not(:last-child){
        margin-right: 6px;
      }
    }
  }
</style>
