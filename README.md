# amap-vue-plugin

## 这是一个基于vue和TypeScript开发高德地图插件。
### 在typing/amap里提供了关于高德地图的声明文件（待完善），可以为ts开发时省下一点时间。
### 可以在src/plugins/amap/components下查看各组件的使用参数（后期应该会逐渐完善）
参考自vue-google-maps

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Start
Register AMap plugins in main.js
```
Vue.use(vAMapPlugin, {
  v: '1.4.10',
  key: 'YOU_TOKEN'
})
```