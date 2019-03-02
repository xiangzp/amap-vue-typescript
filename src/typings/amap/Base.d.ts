declare namespace AMap{
  // 经纬度坐标，确定地图上的一个点。
  export class LngLat {
    constructor (lng: number, lat: number, noAutofix?: boolean);
    offset (w: number, s: number): LngLat;
    distance (lnglat: LngLat) : number;
    getLng(): number;
    getLat(): number;
    equals(lnglat: LngLat): boolean;
    toString(): string;
  }

  // 像素坐标，确定地图上的一个像素点
  export class Pixel {
    constructor (x: number, y: number);
    getX(): number;
    getY(): number;
    equals(point: Pixel): boolean;
    toString(): string;
  }

  // 地物对象的像素尺寸
  export class Size {
    constructor(width: number, height: number);
    getWidth(): number;
    getHeight(): number;
    toString(): string;
  }

  // 地物对象的经纬度矩形范围
  export class Bounds {
    constructor(southWest: LngLat, northEast: LngLat);
    contains(point: LngLat): boolean;
    getCenter(): LngLat;
    getSouthWest(): LngLat;
    getNorthEast(): LngLat;
    toString(): string;
  }
}
