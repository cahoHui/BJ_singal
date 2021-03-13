
const defaultUrl = process.env.NODE_ENV === 'development' ?
  'http://39.100.128.220:12345' :
  // 'http://11.82.12.118:20191' // 内网打包
  'http://39.100.128.220:12345' // 外网打包

export default defaultUrl
