import MyyButton from "../src/button.vue"
import {mount} from "@vue/test-utils"

describe('myy-button',()=>{
  test('button-disabled',()=>{
    const wrapper = mount(MyyButton,{
      propsData:{
        type:'primary',
        disabled:false
      }
    })
    // wrapper.props()可以获取生成组件的指定的props，toBe判断值是否相等
    expect(wrapper.props('disabled')).toBe(false)
  })
})