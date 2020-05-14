import {shallowMount} from '@vue/test-utils';// vue提供的快速测试的方法
import {expect} from 'chai';

import Button from '@packages/button.vue';
import Icon from '@packages/icon.vue';

describe('button.vue', () => {
    it ('1.测试1+1', () => {
        expect (getComputedStyle(document.body).color).to.eq(2);
    });
});