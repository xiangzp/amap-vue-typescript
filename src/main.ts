import Vue from 'vue'
import App from './App.vue'

import vAMapPlugin from '@/plugins/amap'

Vue.config.productionTip = false

// 异步加载高德地图
Vue.use(vAMapPlugin, {
  v: '1.4.10',
  key: 'YOU_TOKEN'
})

new Vue({
  render: h => h(App)
}).$mount('#app')
