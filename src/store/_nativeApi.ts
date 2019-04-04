import axios from 'axios'
interface options {
  url: string,
  headers?: Object,
  data?: Object,
  params?: Object
}
export default async function requestAsync(method: string, options: options) {
  // Send Request
  const { url, headers, data, params } = options
  const axiosConfig = {
    url: `${url}`,
    method,
    headers,
    params: params ? { ...params } : {},
    data
  }
  const response = await axios(axiosConfig)
  return response
}