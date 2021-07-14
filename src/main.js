import Vue from 'vue'
import App from './App.vue'
import Button from 'ant-design-vue/lib/button';
import space from 'ant-design-vue/lib/space';
import slider from 'ant-design-vue/lib/slider';
import progres from 'ant-design-vue/lib/progress';
import 'ant-design-vue/dist/antd.css';

Vue.component(Button.name, Button);
Vue.component(space.name, space);
Vue.component(slider.name, slider);
Vue.component(progres.name, progres);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
