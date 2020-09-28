import MyyInput from '../'

export default {
  title: 'MyyInput',
  component:MyyInput
}

export const Text = ()=>({
  components: { MyyInput },
  template: '<myy-input v-model="value"  />',
  data(){
    return {
      value:'admin'
    }
  }
})

export const Password = ()=>({
  components: { MyyInput },
  template: '<myy-input v-model="value"  type="password" />',
  data(){
    return {
      value:'admin'
    }
  }
})