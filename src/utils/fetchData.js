import axios from 'axios'

const remote = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // 跨域请求时发送cookies send cookies when cross-domain requests
  // timeout: 60000, // request timeout
  timeout: 30000, // request timeout
})

// request interceptor
remote.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

remote.interceptors.response.use(
  response => {
    const requestURL = response.config.url
    const res        = response.data
    if (response.headers['content-type'] == 'application/octet-stream') {return response}
    if (Object.prototype.toString.call(res) == '[object ArrayBuffer]') {return response}

    return res
    // if (res.code !== 0) {
    //   return Promise.reject(new Error(res.msg || 'Error'))
    // }
    // else {
    //   return res
    // }
  },
  error => {
    console.error(error)
    return Promise.reject(error)
  },
)

// export const fetchData = (cb) => {
//   axios.get('http://jsonplaceholder.typicode.com/posts').then((res) => {
//     // console.log(`res = `,res);
//     let data = res.data
//     cb && cb(data)
//   }).catch((err) => {
//     console.log(`\x1b[41m${err}\x1b[0m`)
//   })
// }

export const fetchData = () => {
  return remote.get('http://jsonplaceholder.typicode.com/posts')
}
