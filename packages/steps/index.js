import MyySteps from './src/steps.vue'

MyySteps.install = Vue => {
  Vue.component(MyySteps.name, MyySteps)
}

export default MyySteps