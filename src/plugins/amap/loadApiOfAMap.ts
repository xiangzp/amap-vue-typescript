function loadAMapApi (options:any) {
  if (typeof document === 'undefined') {
    // 只在浏览器环境加载
    return
  }
  if (typeof (<any>window).AMap === 'undefined') {
    if (typeof options !== 'object') {
      console.error('You should specify parameters for the AMap')
      return
    }
    options['callback'] = 'vAMapInitByFlightadsb'

    let baseUrl = 'https://webapi.amap.com/'

    let _scriptTab = document.createElement('script')

    let url = baseUrl + 'maps?' + Object.keys(options).map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(options[key])
    }).join('&')

    _scriptTab.setAttribute('src', url)
    _scriptTab.setAttribute('async', '')
    _scriptTab.setAttribute('defer', '')
    _scriptTab.setAttribute('charset', 'utf-8')
    document.head.appendChild(_scriptTab)
  } else {
    console.error('Has loaded the AMap!')
  }
}

export default loadAMapApi
