<template>
  <div class="tags-view-wrapper">
    <el-tag v-for="item in tags">{{item}}</el-tag>
  </div>
</template>

<script>
  export default {
    name: "TagsView",
    data(){
      return {
        tags:[]
      }
    },
    methods:{

    },
    watch: {
      $route() {
        this.tags.push(this.$route.meta.title)
      },
      visible(value) {
        if (value) {
          document.body.addEventListener('click', this.closeMenu)
        } else {
          document.body.removeEventListener('click', this.closeMenu)
        }
      }
    },

  }
</script>

<style scoped lang="scss">
  .tags-view-wrapper{
    display: flex;
    height: 44px;
    padding: 6px 0;
    margin: 0 12px 0 12px;
  }
</style>
