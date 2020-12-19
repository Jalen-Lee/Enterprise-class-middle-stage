<template>
  <div
      :class="['code-editor',`theme-` + editorTheme,]"
  >
    <div class="code-editor-header">
      <span class="code-editor-header-title">{{mode}}</span>
      <span class="code-editor-header-icon" @click="handleCopy"><i class="iconfont icon-copy"></i></span>
      <span class="code-editor-header-icon" @click="handleSelectAll"><i class="iconfont icon-complete"></i></span>
      <span class="code-editor-header-icon" @click="handleExport"><i class="iconfont icon-bottom"></i></span>
    </div>
    <textarea ref="editor"/>
  </div>
</template>

<script>
//basis
import CodeMirror from 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'

//codemirror插件
import 'codemirror/addon/scroll/simplescrollbars'
import 'codemirror/addon/scroll/simplescrollbars.css'
import 'codemirror/addon/hint/show-hint.css'
require('codemirror/addon/hint/show-hint')
require('codemirror/addon/hint/sql-hint')
require('codemirror/addon/edit/matchbrackets')
require('codemirror/addon/selection/active-line')

//codemirror语言配置文件
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/python/python'



import {
  importEditorTheme,
  importCodeTheme,
} from "./model/utils";

export default {
  name: "CodeEditor",
  data(){
    return{
      editor: null,
    }
  },
  props:{
    //初始值
    code:{
      type:String,
      default:'console.log("Hello Vue-code-editor")'
    },
    //代码的语言类型
    mode:{
      type:String,
      default:'javascript'
    },
    //代码样式主题
    codeTheme:{
      type:String,
      default: 'ambiance'
    },
    //制表符长度,设置后会将缩进长度设置为和它一样
    tabSize:{
      type: [String,Number],
      default: 2
    },
    //是否自动聚焦
    autofocus: {
      type: Boolean,
      default: true
    },
    //是否显示左侧行号
    lineNumbers:{
      type:Boolean,
      default: true
    },
    //滚动条样式
    scrollbarStyle:{
      type: String,
      default: 'overlay'
    },
    //编辑器主题
    editorTheme:{
      type:String,
      default: 'mac'
    },
    readOnly:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    //配置项初始化
    configInit(){
      importCodeTheme(this.codeTheme)
      importEditorTheme(this.editorTheme)
      console.log(this.$options.props)
    },
    //编辑器初始化
    editorInit(){
      console.log("CodeMirror.modes",CodeMirror.modes)
      console.log("CodeMirror.mimeModes",CodeMirror.mimeModes)
      this.editor = CodeMirror.fromTextArea(this.$refs.editor, {
        value: this.code,
        mode: this.mode,
        theme: this.codeTheme,
        autofocus: this.autofocus,
        tabSize: this.tabSize,
        lineNumbers: this.lineNumbers,
        indentWithTabs: true,
        smartIndent: true,
        scrollbarStyle: this.scrollbarStyle,
        readOnly: this.readOnly
      })
      this.editor.setValue(this.code)
      // 代码自动提示功能，记住使用cursorActivity事件不要使用change事件，这是一个坑，那样页面直接会卡死
      this.editor.on('change', cm => {
        this.$emit('change', cm.getValue())
        console.log(cm.getValue())
      })
    },
    //复制
    handleCopy(){
      this.$emit('copy', this.editor.getValue())
    },
    //全选
    handleSelectAll(){
      this.editor.execCommand('selectAll')
    },
    //导出
    handleExport(){
      console.log("导出")
    }
  },
  watch:{
    code(newVal,oldVal){
      this.editor.setValue(newVal)
    },
    mode(nv,ov){
      this.editor.setOption('mode',nv)
    },
    codeTheme(newVal,oldVal){
      importCodeTheme(newVal)
      this.editor.setOption('theme',newVal)
    },
  },
  created() {
    this.configInit()
  },
  mounted() {
    this.editorInit()
  },
}
</script>

<style scoped lang="scss">
  @import "font/iconfont.css";
  .code-editor{
    width: 100%;
    height: 100%;
    min-width: 300px;
    min-height: 400px;
    text-align: left;
    .code-editor-header{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 10px;
      box-sizing: border-box;
      position: relative;
      &-title{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
      }
      &-icon{
        cursor: pointer;
        &:not(:last-child){
          margin-right: 10px;
        }
      }
    }
  }
</style>
