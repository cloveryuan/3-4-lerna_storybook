import MyyInput from "../src/input.vue"
import {mount} from "@vue/test-utils"

describe('myy-input',()=>{
  test('input-text',()=>{
    const wrapper = mount(MyyInput)
    expect(wrapper.html()).toContain('input type="text"')//是否包含
  })

  test('myy-input-password',()=>{
    const wrapper = mount(MyyInput,{
      propsData:{
        type:'password'
      }
    })
    expect(wrapper.html()).toContain('input type="password"')//是否包含
  })
  
  test('myy-input-password',()=>{
    const wrapper = mount(MyyInput,{
      propsData:{
        type:'password'
      }
    })
    expect(wrapper.props('type')).toBe('password')//是否相等prop
  })

  test('input-snapshot', () => {
    const wrapper = mount(MyyInput, {
      propsData: {
        type: 'text',
        value: 'admin'
      }
    })
    expect(wrapper.vm.$el).toMatchSnapshot() // 生成快照
  })
})

