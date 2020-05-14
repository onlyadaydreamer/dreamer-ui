// 所有组件的入口

// 使用方式:
// import dreamerUI from 'dreamer-ui';
// Vue.use(dreamerUI);

import Button from './button.vue';
import Icon from './icon.vue';

const install = (Vue) => {
    Vue.component(Button.name, Button);
    Vue.component(Icon.name, Icon);
}

// 有可能组件会通过script标签引入，<script src="daydreamer-ui"></script>
// 如果是通过<script src="path/vue"></script> 这种方式引入vue，Vue会被挂载到window上
if (typeof window.Vue !== 'undefined') {
    install(Vue);
}
export default {
    install
}