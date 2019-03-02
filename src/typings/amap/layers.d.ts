declare namespace AMap {
  export class TileLayer{
    constructor(tileOpt: TileLayerOptions)
    // 设置图层透明度
    setOpacity(alpha: number): void;
    // 在地图上显示该图层
    show(): void
    // 隐藏图层
    hide(): void;
    getTiles(): void;
    // 重新加载此图层
    reload(): void;
    // 设置图层的取图地址
    setTileUrl(): void;
    // 获取该图层可显示的级别范围；在PC上，取值范围为[3-18]；在移动设备上，取值范围为[3-19]
    getZooms(): Array<number>
    // 设置图层叠加的顺序值，默认zIndex：1
    setzIndex(index: number): void;
    // 设置要显示图层的地图对象
    setMap(map: Map): void;
  }
  export interface TileLayerOptions {
    map?: Map;
    tileSize?: number;
    tileUrl?: string;
    errorUrl?: string;
    getTileUrl?: string | Function;
    zIndex?: number;
    opacity?: number;
    zooms?: Array<number>;
    detectRetina?: boolean;
  }
}