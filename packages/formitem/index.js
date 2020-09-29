import MyyFormitem from './src/formitem.vue'

MyyFormitem.install = Vue => {
  Vue.component(MyyFormitem.name, MyyFormitem)
}

export default MyyFormitem