<template>
  <div class="page-dashboard-monitor">
    <div class="fileDiv" @click="click">file1</div>

    <div class="fileDiv w">file2</div>

    <div class="fileDiv">file3</div>

    <div class="fileDiv w">file4</div>

    <div class="fileDiv">file5</div>

    <div class="fileDiv w">file6</div>

    <div class="fileDiv">file7</div>

    <div class="fileDiv w">file8</div>

    <div class="fileDiv">file9</div>
    <div class="fileDiv">file10</div>
    <div class="fileDiv">file11</div>
    <div class="fileDiv w">file12</div>
    <div class="fileDiv">file13</div>
    <div class="fileDiv">file14</div>
    <div class="fileDiv w">file15</div>
    <div class="fileDiv">file16</div>
    <div class="fileDiv">file17</div>
    <select-box target=".w" @reset="reset" @hit="hit" @nohit="nohit" @end="end"/>
  </div>
</template>

<script>

  import SelectBox from "@/components/SelectBox/index";
  export default {
    name: "index",
    components: {SelectBox},
    methods:{
      reset(nodes){
        //console.log("重置",nodes)
        for(let i =0;i<nodes.length;i++){
          nodes[i].style.border = ''
          // console.log(nodes)
        }
      },
      hit(node){
        node.style.border = "1px solid #ff0000"
      },
      nohit(node){
        node.style.border = ""
      },
      end(nodes){
        //console.log("选择结束",nodes)
      },
      click(e){
        console.log("inner的click")
      },
      mousedown(){
        console.log("inner的mousedown")
      },
      mouseup(){
        console.log("inner的mouseup")
      }
    }
  }
</script>

<style scoped lang="scss">
  .fileDiv{float:left;width:100px;height:100px;text-align:center;line-height:100px;font-size:12px;border:1px solid #ccc;margin-right:10px;margin-bottom:10px;cursor: pointer}
  .seled{border:1px solid red;background-color:#D6DFF7;}

  .page-dashboard-monitor{
    height: calc(100vh - 108px);
    flex: 1;
  }
</style>
