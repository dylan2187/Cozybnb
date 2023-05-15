import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

//通过类对axios做二次封装，因为类有更高的内聚性
//二次封装axios的目的：传入配置的baseURL， timeout， 做请求/响应拦截

class httpRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })

    // 拦截器
    //响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )
  }

  //提供一些请求方法
  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: 'GET' })
  }

  post(config) {
    return this.request({ ...config, method: 'POST' })
  }
}

const instance = new httpRequest(BASE_URL, TIMEOUT)
export default instance
