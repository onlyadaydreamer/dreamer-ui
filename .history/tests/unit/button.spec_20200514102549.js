import {shallowMount} from '@vue/test-utils';// vue提供的快速测试的方法
import {expect} from 'chai';

import Button from '@/packages/button.vue';
import Icon from '@/packages/icon.vue';

describe('button.vue', () => {
    // it ('1.测试1+1', () => {
    //     expect(getComputedStyle(document.body).color).to.eq(3);
    // });
    it ('1. 测试button能否正常显示slot内的内容', () => {
        const wrapper = shallowMount(Button, {
            slots: {
                default: 'dreamer-button'
            }
        });
        expect(wrapper.text()).to.eq('dreamer-button');
    });
    it ('2. 测试icon能否正常显示', () => {
        const wrapper = shallowMount(Button, {
            stubs: {
                'dreamer-icon': Icon// 替换
            },
            propsData: {
                icon: 'edit'
            }
        });
        expect(wrapper.find('use').attributes('href')).to.eq('#icon-edit');
    });
    it ('3. 测试loading时，按钮是否是禁用状态', () => {
        const wrapper = shallowMount(Button, {
            stubs: {
                'dreamer-icon': Icon// 替换
            },
            propsData: {
                icon: 'edit'
            }
        });
        expect(wrapper.find('use').attributes('href')).to.eq('#icon-loading');
        expect(wrapper.find('button').attributes('disabled')).to.eq('disabled');
    });
    it ('4. 测试按钮能否正常触发事件', () => {

    });
    it ('5. 按钮icon位置是否正常', () => {

    });
});