<template>
  <svg
      class="svg-icon"
      aria-hidden="true"
      stroke="currentColor"
      :style="_style"
  >
    <use :xlink:href="_name"></use>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    size:{
      type:String,
      default:'1.5em'
    },
    color:{
      type:String
    }
  },
  computed: {
    _name() {
      if(!this.name.includes('#icon-'))
        return `#icon-${this.name}`
      return this.name
    },
    _style(){
      return {
        width : this.size,
        height: this.size,
        color: this.color
      }
    }
  }
}
</script>

<style>
.svg-icon {
  fill: currentColor;
  stroke: currentColor;
  overflow: hidden;
}
</style>


