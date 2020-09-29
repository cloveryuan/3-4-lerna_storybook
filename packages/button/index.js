import MyyButton from './src/button.vue'

MyyButton.install = Vue => {
  Vue.component(MyyButton.name, MyyButton)
}

export default MyyButton