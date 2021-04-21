import store from '@/store'
import commonUtils from "@/utils/common";

const { body } = document
const WIDTH = 992 // refer to Bootstrap's responsive design


export default {
  watch: {

  },
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler)
  },
  mounted() {
    console.log("混入mounted")
    const type = commonUtils.detectDeviceType()
    store.commit('app/toggleDevice',{type})
    // if(device === 'Mobile'){
    //   this.resizeHandler()
    // }

  },
  methods: {
    $_isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.$_isMobile()
        if(isMobile) {
          store.commit('app/toggleDevice', {type: 'Mobile'})
        }else{
          store.commit('app/toggleDevice', {type: 'Desktop'})
        }
      }
    }
  }
}
