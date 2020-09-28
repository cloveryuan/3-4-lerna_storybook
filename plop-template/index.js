import {{Component}} from './src/{{name}}.vue'

{{Component}}.install = Vue => {
  Vue.component({{Component}}.name, {{Component}})
}

export default {{Component}}