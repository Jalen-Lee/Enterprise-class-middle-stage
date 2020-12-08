<template>
  <div class="articles-search-wrapper">
    <el-table
        :data="tableData"
        id="toexcel"
        style="width: 100%">
      <el-table-column
          prop="date"
          label="日期"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址">
      </el-table-column>
    </el-table>
    <button @click="excel">excel</button>
    <input @change="fileChange" style="display:block;width: 500px;height: 500px;background: aqua" type="file">

    </input>
  </div>
</template>

<script>
import FileSaver from 'file-saver'
  export default {
    name: "articles-search",
    data(){
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          a:123,
          b: 456,
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          a:123,
          b: 456,
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          a:123,
          b: 456,
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          a:123,
          b: 456,
        }]
      }
    },
    methods:{
      fileChange(e){
        console.log("change",e)
        console.log("files", e.target.files)
      },
      excel(){
        // import('@/utils/Export2Excel').then(excel => {
        //   const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
        //   const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
        //   const list = this.tableData
        //   const data = this.tableData
        //   console.log(data)
        //   excel.export_json_to_excel({
        //     header: tHeader,
        //     data,
        //   })
        //   // this.downloadLoading = false
        // })
        var file = new File(["Hello, world!"], "hello world.txt", {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(file);
      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => {
          if (j === 'timestamp') {
            return this.parseTime(v[j])
          } else {
            return v[j]
          }
        }))
      },
      parseTime(time, cFormat) {
        if (arguments.length === 0 || !time) {
          return null
        }
        const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
        let date
        if (typeof time === 'object') {
          date = time
        } else {
          if ((typeof time === 'string')) {
            if ((/^[0-9]+$/.test(time))) {
              // support "1548221490638"
              time = parseInt(time)
            } else {
              // support safari
              // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
              time = time.replace(new RegExp(/-/gm), '/')
            }
          }

          if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000
          }
          date = new Date(time)
        }
        const formatObj = {
          y: date.getFullYear(),
          m: date.getMonth() + 1,
          d: date.getDate(),
          h: date.getHours(),
          i: date.getMinutes(),
          s: date.getSeconds(),
          a: date.getDay()
        }
        const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
          const value = formatObj[key]
          // Note: getDay() returns 0 on Sunday
          if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
          return value.toString().padStart(2, '0')
        })
        return time_str
      }
    }
  }
</script>

<style scoped lang="scss">
  .articles-search-wrapper{
    width: 100%;
    height: calc(100vh - 108px);
  }
</style>
