import axios from "axios"

const createRequest = (method, {headers, body}) => (url, token) => {
  const config = {
    'x-auth-token': token, ...headers,
  }

  return axios[method](
    url,
    body,
    config
  )
}
const createPostRequest = (headers, fn) => (url, token, data) => {
  const body = fn ? fn(data) : data
  
  return createRequest('post', {headers, body})(url, token)
}

export const req = {
  postJSON: createPostRequest({'Content-Type': 'application/json'}),
  get: createRequest('get', {headers: ''}),
}