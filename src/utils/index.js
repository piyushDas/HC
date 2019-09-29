import Axios from 'axios'
import {
  GET_CALL,
  POST_CALL,
  LOCAL_BASE_URL
} from '../constants/index'

export const hcAxiosInstance = (url, method, data) => {
  let instance
  const config = {
    timeout: 120000,
    headers: {
      source: 'hc'
    }
  }
  let axiosUrl = url
  if (window.location.origin.indexOf('0.0.0.0') > -1) {
    axiosUrl = `${LOCAL_BASE_URL}${url}`
  }
  if (method.toLowerCase() === GET_CALL) {
    instance = Axios.get(axiosUrl, {
      params: data,
      headers: {
        source: 'hc'
      }
    })
  } else if (method.toLowerCase() === POST_CALL) {
    instance = Axios.post(axiosUrl, data, config)
  }
  return instance
}

export const testMethod = () => {
  return true
}
