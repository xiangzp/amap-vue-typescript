function capitalizeFirstLetter (string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 * 如果vue对象里含有传入的对象中的值，则取vue对象的值
 * @param {*} vueObj
 * @param {*} props
 */
export const getPropsValue = (vueObj: any, props: any) => {
  return Object.keys(props).reduce((resArr, prop) => {
    if (vueObj[prop] !== undefined) {
      (<any>resArr)[prop] = vueObj[prop]
    }
    return resArr
  }, {})
}

/**
 * 给地图对象绑定props 监听props变化
 * 也就是说 当props某一个属性变化的时候 自动调用地图的相对应的更新方法
 * @param vueInst
 * @param mapInst
 * @param props
 */
export const bindProps = (vueInst: any, mapInst: any, props: any) => {
  for (let attr in props) {
    const { type } = props[attr]
    const setterMethod = `set${capitalizeFirstLetter(attr)}`
    const initialValue = vueInst[attr]
    // const getterMethod = `get${capitalizeFirstLetter(attr)}`

    if (typeof mapInst[setterMethod] === 'undefined') {
      continue
    }

    vueInst.$watch(
      attr,
      () => {
        const attrValue = vueInst[attr]
        mapInst[setterMethod](attrValue)
      },
      {
        immediate: typeof initialValue !== 'undefined',
        deep: type === Object
      }
    )
  }
}
