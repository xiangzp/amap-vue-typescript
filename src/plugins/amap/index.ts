import { Vue as _Vue } from 'vue/types/vue'
import { PluginObject } from 'vue'
import loadApiOfAMap from './loadApiOfAMap'
import Map from './components/Map.vue'
import TileLayer from './components/TileLayer'

// 获取下载api的promise
function getLoadMapPromise (options:any):Promise<any> {
  if (typeof window === 'undefined') {
    return new Promise(() => {}).then(() => {
      console.log('there is not window object')
    })
  } else {
    const onGMapLoaded = () => {
      console.log('%cHello! The AMap API has been downloaded!', 'color: #37ba1d;font-weight: 700;')
    }
    // resolve赋值给 高德地图下载完成执行回调
    return new Promise((resolve, reject) => {
      (<any>window).vAMapInitByFlightadsb = resolve
      loadApiOfAMap(options)
    }).then(onGMapLoaded)
  }
}

// vue 插件的install方法
function installVAMapPlugin (Vue: typeof _Vue, options?: any):void {
  let loadPromise = getLoadMapPromise(options)
  // 混入到Vue对象里，方便全局调用
  Vue.mixin({
    created () {
      (<any> this).$aMapLoadedPromise = loadPromise
    }
  })
  Vue.component('a-map', Map)
  Vue.component('a-tile-layer', TileLayer)
}

// 注册一个vue插件
const VAMapPlugin: PluginObject<any> = {
  install: installVAMapPlugin
}

export default VAMapPlugin
