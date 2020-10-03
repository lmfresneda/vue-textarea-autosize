import _TextareaAutosize from './components/TextareaAutosize.vue'
const version = '__VERSION__'

const install = Vue => {
  Vue.component('TextareaAutosize', _TextareaAutosize)
}

const plugin = {
  install,
  version
}

export const TextareaAutosize = _TextareaAutosize
export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
