//判断客户端设备类型
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop'


const commonUtils = {
  detectDeviceType
}

export default commonUtils
