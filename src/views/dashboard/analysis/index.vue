<template>
  <div class="page-dashboard-analysis">
    <div class=" block-wrapper ljl-skeleton-wrapper">
        <div class="avatar ljl-skeleton-wrapper-circle">

        </div>
        <p class="content ljl-skeleton-wrapper-rect">
          图片块的绘制比文本块要相对简单很多，但是在订方案的过程中也踩了一些坑，这儿简单分享下采坑经历。

          最初订的方案是通过一个 DIV 元素来替换 IMG 元素，然后设置 DIV 元素背景为灰色，DIV 的宽高等同于原来 IMG 元素的宽高，这种方案有一个严重的弊端就是，原来通过元素选择器设置到 IMG 元素上的样式无法运用到 DIV 元素上面，导致最终图片块的骨架效果和真实的图片在页面样式上有出入，特别是没法适配不同的移动端设备，因为 DIV 的宽高被硬编码。

          接下来我们又尝试了一种看似「高级」的方法，通过 Canvas 来绘制和原来图片大小相同的灰色块，然后将 Canvas 转化为 dataUrl 赋予给 IMG 元素的 src 特性上，这样 IMG 元素就显示成了一个灰色块了，看似完美，当我们将生成的骨架页面生成 HTML 文件时，一下就傻眼了，文件大小尽然有 200 多 kb，我们做骨架页面渲染的一个重要原因就是希望用户在感知上感觉页面加载快了，如果骨架页面都有 200 多 kb，必将导致页面加载比之前要慢一些，违背了我们的初衷，因此该方案也只能够放弃。

          最终方案，我们选择了将一张1 * 1 像素的 gif 透明图片，转化成 dataUrl ，然后将其赋予给 IMG 元素的 src 特性上，同时设置图片的 width 和 height 特性为之前图片的宽高，将背景色调至为骨架样式所配置的颜色值，完美解决了所有问题。
        </p>
      <p class="content ljl-skeleton-wrapper-rect">
        图片块的绘制比文本块要相对简单很多，但是在订方案的过程中也踩了一些坑，这儿简单分享下采坑经历。

        最初订的方案是通过一个 DIV 元素来替换 IMG 元素，然后设置 DIV 元素背景为灰色，DIV 的宽高等同于原来 IMG 元素的宽高，这种方案有一个严重的弊端就是，原来通过元素选择器设置到 IMG 元素上的样式无法运用到 DIV 元素上面，导致最终图片块的骨架效果和真实的图片在页面样式上有出入，特别是没法适配不同的移动端设备，因为 DIV 的宽高被硬编码。

        接下来我们又尝试了一种看似「高级」的方法，通过 Canvas 来绘制和原来图片大小相同的灰色块，然后将 Canvas 转化为 dataUrl 赋予给 IMG 元素的 src 特性上，这样 IMG 元素就显示成了一个灰色块了，看似完美，当我们将生成的骨架页面生成 HTML 文件时，一下就傻眼了，文件大小尽然有 200 多 kb，我们做骨架页面渲染的一个重要原因就是希望用户在感知上感觉页面加载快了，如果骨架页面都有 200 多 kb，必将导致页面加载比之前要慢一些，违背了我们的初衷，因此该方案也只能够放弃。

        最终方案，我们选择了将一张1 * 1 像素的 gif 透明图片，转化成 dataUrl ，然后将其赋予给 IMG 元素的 src 特性上，同时设置图片的 width 和 height 特性为之前图片的宽高，将背景色调至为骨架样式所配置的颜色值，完美解决了所有问题。
      </p>
        <div class="footer ">
          <p class="ljl-skeleton-wrapper-rect">code by david</p>
        </div>
    </div>
<!--    <skeleton :loading="show"/>-->
    <select-box/>
  </div>
</template>

<script>
  import SelectBox from "@/components/SelectBox/index";
  export default {
    name: "dashboard-analysis",
    components: {SelectBox},
    data(){
      return{
        show:true
      }
    },
    computed:{

    },
    methods:{
      copy(event){
        this.$clipboard(this.$refs.text.innerHTML,event)
      }
    },
    mounted() {
      // setTimeout(()=>{
      //   this.show=!this.show
      //   console.log(this.show)
      // },2000)
    }
  }
</script>

<style scoped lang="scss">
  .page-dashboard-analysis{
    //display: flex;
    position: relative;
    flex: 1;
    .block-wrapper{
      width: 600px;
      //height: 600px;
      background-color: aqua;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding: 15px;
      .avatar{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: red;
        margin-bottom: 20px;
      }
      .content{
        text-align: justify;
        margin-bottom: 30px;
      }
      .footer{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 60px;
      }
    }
  }
</style>
