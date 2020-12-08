<template>
  <div class="selecting_box" ref="selectBox"></div>
</template>
<script>
  export default {
    name: "SelectBox",
    data(){
      return {
        el:null,
        selectBox:null,
        selectedNodes:new Set(),
        parentRectLeft: 0,
        parentRectTop: 0,
        originalPosition: '',
        originalUserSelect:'',
        startX: 0,
        startY:0
      }
    },
    props:{
      target:{
        type:String,
        default: '*:not(.selecting_box)'
      },
      zIndex:{
        type:[String,Number],
        default: 9999
      },
      borderStyle:{
        type:String,
        default: 'solid'
      },
      borderColor:{
        type:String,
        default: '#6EB1EB'
      },
      backgroundColor:{
        type:String,
        default:'rgba(22, 145, 232, 0.1)'
      }
    },
    methods:{
      //初始化
      init(){
        this.el = this.$parent.$el
        this.selectBox = this.$refs.selectBox
        this.originalPosition = window.getComputedStyle(this.el).position
        this.originalUserSelect = window.getComputedStyle(this.el).userSelect
        this.el.style.cssText = `
          position: relative;
          user-select: none;
        `
        this.preventContextMenu()
        this.el.addEventListener("mousedown",this.handleMousedown)
      },
      handleMousedown(e){
        // console.log("wrapper的mousedown")
        this.clearEventBubble(e)
        //只允许鼠标左键触发
        if(e.button !== 0)
          return
        if(this.selectedNodes.size!== 0){
          this.$emit('reset',[...this.selectedNodes])
          this.selectedNodes.clear()
        }

        this.parentRectLeft = this.el.getBoundingClientRect().left
        this.parentRectTop = this.el.getBoundingClientRect().top

        this.startX = e.clientX - this.parentRectLeft
        this.startY = e.clientY - this.parentRectTop
        //将display设置为none十分重要，否则selectBox将在Z轴方向覆盖子元素，由于事件冒泡子元素除了mousedown事件其他事件都无法触发
        this.selectBox.style.cssText = `
          left: ${this.startX}px;
          top: ${this.startY}px;
          width: 0;
          height 0;
          display:none;
        `
        this.el.appendChild(this.selectBox)
        this.el.addEventListener("mousemove",this.handleMousemove)
        this.el.addEventListener("mouseup",this.handleEnd)
        // this.$emit("start",this.selectedNodes)
      },
      handleMousemove(e){
        this.clearEventBubble(e)
        //动态设置left，top，width，height
        const _x = e.clientX - this.parentRectLeft
        const _y = e.clientY - this.parentRectTop
        this.selectBox.style.left = Math.min(_x,this.startX) + 'px'
        this.selectBox.style.top = Math.min(_y,this.startY) + 'px'
        this.selectBox.style.width = Math.abs(_x - this.startX) + 'px'
        this.selectBox.style.height = Math.abs(_y - this.startY) + 'px'
        this.selectBox.style.display = 'block'

        //获取容器内的目标元素
        const tagNodes = this.el.querySelectorAll(this.target)
        const sb_l = this.selectBox.offsetLeft;
        const sb_t = this.selectBox.offsetTop;
        const sb_w = this.selectBox.offsetWidth;
        const  sb_h = this.selectBox.offsetHeight;
        const selectedNodes = new Set()
        for(let i =0;i<tagNodes.length;i++){
          const tn_l = tagNodes[i].offsetWidth + tagNodes[i].offsetLeft;
          const tn_t = tagNodes[i].offsetHeight + tagNodes[i].offsetTop;

          if (tn_l > sb_l && tn_t > sb_t && tagNodes[i].offsetLeft < sb_l + sb_w && tagNodes[i].offsetTop < sb_t + sb_h) {
            this.$emit("hit",tagNodes[i])
            selectedNodes.add(tagNodes[i])
          }else{
            this.$emit("nohit",tagNodes[i])
          }
        }
        this.selectedNodes = selectedNodes
      },
      handleEnd(e){
        // console.log("wrapper的mouseup",e)
        this.clearEventBubble(e)
        try {
          this.el.removeChild(this.selectBox)
        }catch (exp){}
        this.el.removeEventListener("mousemove",this.handleMousemove)
        this.el.removeEventListener("mouseup",this.handleEnd)
        this.$emit("end",[...this.selectedNodes])
      },
      //阻止冒泡
      clearEventBubble(e){
        if (e.stopPropagation)
          e.stopPropagation();
        else
          e.cancelBubble = true;
      },
      //阻止浏览器默认行为
      preventDefault(e){
        if (e.preventDefault)
          e.preventDefault();
        else
          e.returnValue = false;
      },
      //阻止右键菜单
      preventContextMenu(){
        this.el.oncontextmenu = function (event) {
          event.preventDefault();
        };
      }
    },
    mounted() {
      this.init()
    },
    destroyed() {
      //父dom样式还原
      this.el.style.cssText = `
          position: ${this.originalPosition};
          user-select: ${this.originalUserSelect};
        `
      //移除相关事件监听
      this.el.removeEventListener("mousedown",this.handleMousedown)
      this.el.removeEventListener("mousemove",this.handleMousemove)
      this.el.removeEventListener("mouseup",this.handleEnd)
    }
  }
</script>

<style scoped>
  .selecting_box{
    border: 1px solid #6EB1EB;
    background: rgba(22, 145, 232, 0.1);
    z-index:9999;
    position: absolute;
  }
</style>

