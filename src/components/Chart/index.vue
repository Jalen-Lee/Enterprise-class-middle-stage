<template>
  <div
      class="ljl-chart-wrapper"
      ref="chartWrapper"
      :style="{
        width: width,
        height: height
      }"
  >
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: "Chart",
  data(){
    return {

    }
  },
  methods:{
    init(){
      let chart = echarts.init(this.$refs.chartWrapper);

      // 指定图表的配置项和数据
      let option = {
        title: {
          text: this.title
        },
        tooltip: {},
        legend: {
          data:['销量']
        },
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };

      // 使用刚指定的配置项和数据显示图表。
      chart.setOption(option);
    }
  },
  props:{
    title:{
      type:String,
      default:'图表示例'
    },
    width:{
      type:String,
      default:'100%'
    },
    height:{
      type:String,
      default: '100%'
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style scoped lang="scss">
  .ljl-chart-wrapper{


  }

</style>
