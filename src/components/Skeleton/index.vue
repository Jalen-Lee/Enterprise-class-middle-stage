<template>
  <div
      v-if="loading"
      :style="{
        position: 'absolute',
        left: posLeft+'px',
        top: posTop+'px',
        width:wrapperWidth + 'px',
        height:wrapperHeight + 'px',
        backgroundColor: bgColor,
        zIndex:9998,
        overflow:'hidden'
      }"
  >
    <div
        v-for="item in renderRectList"
        :class="[animation?'ljl-skeleton-fade':'']"
        :style="{
        position: 'absolute',
        left: (item.left - wrapperLeft)+'px',
        top: (item.top - wrapperTop)+'px',
        width:item.width + 'px',
        height:item.height + 'px',
        backgroundColor: elColor,
        zIndex:9998
      }"
    ></div>
    <div
        v-for="item in renderCircleList"
        :class="[animation?'ljl-skeleton-fade':'']"
        :style="{
        position: 'absolute',
        left: (item.left - wrapperLeft)+'px',
        top: (item.top - wrapperTop)+'px',
        width:item.width + 'px',
        height:item.height + 'px',
        backgroundColor: elColor,
        borderRadius: item.radius,
        zIndex:9998
      }"
    ></div>
  </div>
</template>

<script>
  export default {
    name: "skeleton",
    data(){
      return {
        wrapperLeft:0,
        wrapperTop:0,
        wrapperWidth:0,
        wrapperHeight: 0,
        posLeft:0,
        posTop: 0,
        // filletNodes: [], // 圆角元素
        circleNodes: [], // 圆形元素
        rectNodes: [], // 矩形元素
        renderCircleList: [],//包含节点信息的圆形元素列表
        renderRectList: []//包含节点信息的矩形元素列表
      }
    },
    methods:{
      getNodesInfo(){
        const parentEl = this.$parent.$el
        const wrapper = parentEl.querySelector('.ljl-skeleton-wrapper')
        const rect = wrapper.getBoundingClientRect()
        this.wrapperWidth = rect.width
        this.wrapperHeight = rect.height

        this.wrapperLeft = rect.left
        this.wrapperTop = rect.top

        this.posLeft = this.wrapperLeft - parentEl.getBoundingClientRect().left
        this.posTop = this.wrapperTop - parentEl.getBoundingClientRect().top

        this.circleNodes = [...wrapper.querySelectorAll(".ljl-skeleton-wrapper-circle")]
        this.rectNodes = [...wrapper.querySelectorAll('.ljl-skeleton-wrapper-rect')]
        // console.log(this.circleNodes)
        // console.log(this.rectNodes)
        //
        // console.log(this.rectNodes)
        // console.log(wrapper.getBoundingClientRect().left);
      },
      renderRectNodes(){
        this.renderRectList = this.rectNodes.map(item=>{
          const itemRect = item.getBoundingClientRect()
          return {
            width: itemRect.width,
            height: itemRect.height,
            left: itemRect.left,
            top: itemRect.top
          }
        })
      },
      renderCircleNodes(){
        this.renderCircleList = this.circleNodes.map(item=>{
          const itemRect = item.getBoundingClientRect()
          return {
            width: itemRect.width,
            height: itemRect.height,
            left: itemRect.left,
            top: itemRect.top,
            radius: window.getComputedStyle(item).borderRadius
          }
        })
      }

    },
    props:{
      // 需要渲染的元素背景颜色，十六进制或者rgb等都可以
      elColor: {
        type: String,
        default: '#e5e5e5'
      },
      // 整个骨架屏页面的背景颜色
      bgColor: {
        type: String,
        default: '#ffffff'
      },
      // 是否显示加载动画
      animation: {
        type: Boolean,
        default: true
      },
      // 圆角值，只对类名为u-skeleton-fillet的元素生效，为数值，不带单位
      borderRadius: {
        type: [String, Number],
        default: "10"
      },
      // 是否显示骨架，true-显示，false-隐藏
      loading: {
        type: Boolean,
        default: true
      }
    },
    mounted() {
      // this.windowWidth = document.body.clientWidth
      // this.windowHeight = document.body.clientHeight
      // console.log(window.screen.availWidth)
      // console.log(window.screen.availHeight)
      this.getNodesInfo()
      this.renderRectNodes()
      this.renderCircleNodes()
    }
  }
</script>

<style scoped lang="scss">
  .ljl-skeleton-fade {
    width: 100%;
    height: 100%;
    //background: rgb(194, 207, 214);
    //animation-duration: 1.5s;
    //animation-name: blink;
    //animation-timing-function: ease-in-out;
    //animation-iteration-count: infinite;
    background: linear-gradient(90deg,#f2f2f2 25%,#e6e6e6 37%,#f2f2f2 63%);
    background-size: 400% 100%;
    animation: ljl-skeleton-loading 1.4s ease infinite;
  }
  @keyframes blink {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.4;
    }

    100% {
      opacity: 1;
    }
  }
  @keyframes ljl-skeleton-loading {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
</style>
