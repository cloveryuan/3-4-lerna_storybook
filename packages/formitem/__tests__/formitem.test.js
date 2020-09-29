import MyyFormitem from "../src/formitem.vue"
import {mount}  from "@vue/test-utils"

describe('myy-formitem',()=>{
  test('formitem-prop',()=>{
    const wrapper = mount(MyyFormitem)
    expect(wrapper.vm.$el).toMatchSnapshot() // 生成快照
  })
})