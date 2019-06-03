import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})
const httpRequire = {}
httpRequire.install = function (Vue, options) {
  Vue.prototype.$http = instance
}
export default httpRequire
