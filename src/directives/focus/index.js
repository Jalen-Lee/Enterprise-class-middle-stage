
function focus_inserted(el, binding) {
    if(el.tagName !== 'input'){
        el = el.getElementsByTagName('input')[0]
        console.log("el",el.value)
    }
    if(!el.value)
        el.focus()
}
const focus = {
    inserted(el, binding) {
        focus_inserted(el, binding)
    }
}
const install = function(Vue) {
    Vue.directive('focus', focus)
}

if (window.Vue) {
    window['focus'] = focus
    Vue.use(install); // eslint-disable-line
}

focus.install = install

export default focus
