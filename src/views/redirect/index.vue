<script>
  export default {
    name:"redirect",
    created() {
      console.log("创建")
      const { params, query } = this.$route
      const { path } = params
      console.log("path",path)
      this.$router.replace({ path: '/' + path, query })
    },
    render: function(h) {
      return h() // avoid warning message
    }
  }
</script>
