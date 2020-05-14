import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {

   /*  let Ctor = Vue.extend(HelloWorld);
    let vm = new Ctor({
        propsData: {msg}
    });
    console.log(vm.$el.innerHTML).to.include(msg); */

    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {// 浅渲染
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
