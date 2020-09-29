import MyySteps from "../src/steps.vue"
import {mount} from "@vue/test-utils"

describe('myy-steps',()=>{
  test('myy-steps-snapshot',()=>{
    const wrapper = mount(MyySteps, {
      propsData: {
        count:4,
        active:1
      }
    })
    expect(wrapper.vm.$el).toMatchSnapshot()//生成快照
  })
})