<template>
  <div class="vue-AMap" ref="vueAMap">
    <slot v-if="map"></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Provide } from 'vue-property-decorator';
import { bindProps, getPropsValue } from '../utils/props';
import bindEvents from '../utils/events';

import AMapMapOptions = AMap.AMapMapOptions;

const props = {
  viewMode: {
    type: String
  },
  zoom: {
    type: Number
  },
  center: {
    type: Object
  },
  lang: {
    type: String
  },
  mapStyle: {
    type: String
  },
  features: {
    type: Array
  },
  options: {
    type: Object
  }
};

const events = [
  'complete',
  'movestart',
  'moveend',
  'mapmove',
  'zoomchange',
  'zoomstart',
  'zoomend',
  'dragstart',
  'dragend',
  'resize',
  'click'
];

@Component({
  props
})
export default class HomeMap extends Vue {
  map:any = null

  providePromiseCallback: any = null

  @Provide () mapPromise:Promise<any> = new Promise((resolve, reject) => {
    this.providePromiseCallback = { resolve, reject }
  })

  render () {
    return ''
  }

  mounted() {
    return (<any>this).$aMapLoadedPromise.then(() => {
      let mapEle = this.$refs['vueAMap']
      if (!mapEle) return
      // 创建地图
      const options:AMapMapOptions = {
        ...getPropsValue(this, props),
      };
      this.map = new AMap.Map(<any>mapEle, options);
      this.providePromiseCallback.resolve(this.map)
      bindProps(this, this.map, props)
      bindEvents(this, this.map, events)
    })
  }
}
</script>

<style scoped>
  .vue-AMap{
    width: 100%;
    height: 100%;
  }
</style>
