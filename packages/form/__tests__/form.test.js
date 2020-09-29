import MyyForm from "../src/form.vue"
import {mount}  from "@vue/test-utils"

describe('myy-form',()=>{
  test('form-snapshot',()=>{
    const wrapper = mount(MyyForm)
    expect(wrapper.vm.$el).toMatchSnapshot() // 生成快照
  })
})