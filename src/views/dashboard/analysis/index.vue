<template>
  <div class="page-dashboard-analysis">
    <Editor :value="value" :plugins="plugins" @change="handleChange" :locale="zh" :upload-images="uploadImages"/>
  </div>
</template>

<script>
  import 'bytemd/dist/index.min.css';
  import zh from 'bytemd/lib/locales/zh_Hans.json'
  import { Editor, Viewer } from '@bytemd/vue';
  import gfm from '@bytemd/plugin-gfm';

  const plugins = [
    gfm(),
    // Add more plugins here
  ];
  export default {
    name: "dashboard-analysis",
    components: {Editor,Viewer},
    data(){
      return{
        value: '',
        zh,
        plugins
      }
    },
    computed:{

    },
    methods:{
      handleChange(v) {
        this.value = v;
      },
      uploadImages(e){
        console.log(e)
        return [
          {
            url: 'http://localhost:9527/static/img/grace-admin-white.5f7dc66b.svg',
            alt: '12', // optional
            title: 'image' // optional
          }
        ]
      }
    },
    mounted() {

    }
  }
</script>

<style scoped lang="scss">
  .page-dashboard-analysis{
    //display: flex;
    position: relative;
    flex: 1;
  }
</style>
