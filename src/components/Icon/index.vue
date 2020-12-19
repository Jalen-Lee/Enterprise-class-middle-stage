  <template>
  <div :class="['icon-wrap','icon-wrap--' + labelPos]">
    <i
        v-if="!image"
        :class="[customPrefix,name]"
        :style="{
            color: color,
            fontSize: sizeFormat(size),
            fontWeight: bold? 'bold':'normal'
          }"
    ></i>
    <img
        v-else
        :src="name"
        :style="{
          width: sizeFormat(size),
          height: sizeFormat(size)
        }"
    >
    <span
        v-if="label !== ''"
        :style="{
            color: labelColor,
            fontSize: sizeFormat(labelSize),
            fontWeight: labelBold? 'bold':'normal',
            marginLeft: labelPos === 'right' ? sizeFormat(marginLeft) : 0,
            marginRight: labelPos === 'left' ? sizeFormat(marginRight) : 0,
          }"
    >{{label}}</span>
  </div>
</template>

<script>
export default {
  name: "Icon",
  props:{
    // 图标类名
    name: {
      type: String,
      default: ''
    },
    // 图标颜色
    color: {
      type: String,
      default: ''
    },
    // 字体大小，单位默认为px
    size: {
      type: [Number, String],
      default: '16px'
    },
    // 自定义扩展前缀，方便用户扩展自己的图标库
    customPrefix: {
      type: String,
      default: 'iconfont'
    },
    // 图标是否显示粗体
    bold: {
      type: Boolean,
      default: false
    },
    // 图标右边或者左边的文字
    label: {
      type: [String, Number],
      default: ''
    },
    // label的位置，只能右边或者左边
    labelPos: {
      type: String,
      default: 'right'
    },
    // label的大小
    labelSize: {
      type: [String, Number],
      default: '16px'
    },
    //文字是否粗体
    labelBold: {
      type: Boolean,
      default: false
    },
    // label的颜色
    labelColor: {
      type: String,
      default: '#606266'
    },
    // label与图标的距离(横向排列)
    marginLeft: {
      type: [String, Number],
      default: '6px'
    },
    // label与图标的距离(横向排列)
    marginRight: {
      type: [String, Number],
      default: '6px'
    },
    image:{
      type: Boolean,
      default: false,
    }
  },
  methods:{
    sizeFormat(value){
      return this.$rule.number(value) ? `${value}px` : value;
    }
  }
}
</script>

<style scoped lang="scss">
  .icon-wrap{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &--left{
      flex-direction: row-reverse;
    }

    &--right {
      flex-direction: row;
    }
  }
</style>

