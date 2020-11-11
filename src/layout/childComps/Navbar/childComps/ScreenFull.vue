<template>
  <div class="trigger-sidebar-wrapper">
    <navbar-button @click="handleClick">
      <icon name="icon-expend" size="18"></icon>
    </navbar-button>
  </div>
</template>

<script>
import screenfull from 'screenfull'
import NavbarButton from "./NavbarButton";
export default {
  name: "ScreenFull",
  components:{NavbarButton},
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    handleClick() {
      if (!screenfull.isEnabled) {
        this.$message({
          message: '浏览器全屏失败',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
      if (screenfull.isEnabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy() {
      if (screenfull.isEnabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>
