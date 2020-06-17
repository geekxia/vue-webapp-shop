import fetch from './fetch'

// 用于获取商品列表
export function fetchGoodList(params) {
  // 返回Promise
  return fetch({
    method: "GET",
    params: params,
    url: '/xxx/getGoodList'
  })
}


// 登录接口
export function fetchLogin(data) {
  return fetch({
    method: "post",
    data: data,
    url: '/xxx/login'
  })
}



export default {
  fetchGoodList,
  fetchLogin
}
