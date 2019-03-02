import Vue from 'vue'
import { Component, Inject, Prop } from 'vue-property-decorator'

@Component
export default class TileLayer extends Vue {
  @Prop({ required: true, type: String }) readonly tileUrl!: string
  @Prop({ default: 3, type: Number }) readonly zIndex!: number

  layer: AMap.TileLayer | null = null

  map: AMap.Map | null = null

  @Inject() readonly mapPromise!: Promise<any>

  render () {
    return ''
  }

  async mounted () {
    let map = await this.mapPromise
    const tileLayer: AMap.TileLayer = new AMap.TileLayer({
      getTileUrl: this.tileUrl,
      zIndex: this.zIndex
    })
    tileLayer.setMap(map)
    this.map = map
    this.layer = tileLayer
  }

  destroyed () {
    if (this.map && this.layer) {
      this.map.remove(this.layer)
    }
  }
}
