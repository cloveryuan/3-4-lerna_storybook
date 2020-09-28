import MyyButton from '../'

export default {
  title: 'MyyButton',
  component: MyyButton
}

export const button = ()=>({
  components:{MyyButton},
  template:`<myy-button>登录</myy-button>`
})