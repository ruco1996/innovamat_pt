import { apiUrl } from '../helpers/common'
import { checkResponse } from '../helpers/validators'

async function get<T>(
  pathname: string,
  request: () => void,
  success: (data: T) => void,
  error: (err: string) => void
) {
  request()
  return fetch(`${apiUrl}${pathname}`)
    .then(checkResponse)
    .then(response => response.json())
    .then(data => success(data))
    .catch(e => {
      error(e)
    })
}

async function post<B, T>(
  pathname: string,
  body: B,
  request: () => void,
  success: (data: T) => void,
  error: (err: string) => void
) {
  request()
  return fetch(`${apiUrl}${pathname}`, {
    method: 'post',
    body: JSON.stringify(body)
  })
    .then(checkResponse)
    .then(response => response.json())
    .then(data => success(data))
    .catch(e => {
      error(e)
    })
}

const apiService = {
  get,
  post
}

export default apiService
