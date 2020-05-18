import { shallowMount} from '@vue/test-utils';
import Row from '@/packages/layout/row.vue';
import Col from '@/packages/layout/col.vue';
import {expect} from 'chai';

describe('测试row.vue', () => {
    it('1.测试gutter是否ok？', async () => {
        let wrapper = shallowMount(Row, {
            attachToDocument: true,
            stubs: {
                'd-col': Col,// row组件内部用到的d-col，使用我们上面导入的Col来替换
            },
            slots: {
                default: `<d-col></d-col>`
            },
            propsData: {
                gutter: 20
            }
        });
        expect(getComputedStyle(wrapper.vm.$el).marginLeft).to.eq('-10px');
        expect(getComputedStyle(wrapper.vm.$el).marginRight).to.eq('-10px');

        await wrapper.vm.$nextTick();
        let col = wrapper.vm.$el.querySelector('.d-col');
        expect(getComputedStyle(col).paddingLeft).to.eq('10px');
        expect(getComputedStyle(col).paddingRight).to.eq('10px');
    });
    it('2. 测试justify属性', () => {
        it('1.测试justify是否ok？', async () => {
            let wrapper = shallowMount(Row, {
                attachToDocument: true,
                stubs: {
                    'd-col': Col,// row组件内部用到的d-col，使用我们上面导入的Col来替换
                },
                slots: {
                    default: `<d-col></d-col>`
                },
                propsData: {
                    justify: 'start'
                }
            });
            expect(getComputedStyle(wrapper.vm.$el).justifyContent).to.eq('flex-start');
            await wrapper.setProps({justify: 'end'});
            expect(getComputedStyle(wrapper.vm.$el).justifyContent).to.eq('flex-end');
            await wrapper.setProps({justify: 'center'});
            expect(getComputedStyle(wrapper.vm.$el).justifyContent).to.eq('center');
            await wrapper.setProps({justify: 'space-between'});
            expect(getComputedStyle(wrapper.vm.$el).justifyContent).to.eq('space-between');
            await wrapper.setProps({justify: 'space-around'});
            expect(getComputedStyle(wrapper.vm.$el).justifyContent).to.eq('space-around');
        });
    });
})