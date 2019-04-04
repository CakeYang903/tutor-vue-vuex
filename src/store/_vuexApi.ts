import axios from 'axios'
interface store {
  commit: Function,
}
interface options {
  url: string,
  headers: Object,
  data: Object,
  params: Object
}
export default async function requestAsync({ commit }: store, type: string, options: options) {
  // Extract Type
  let method = 'get'
  const replacedType = type.replace(/get|post|put|delete/, (httpMethod) => {
    method = httpMethod
    return ""
  })
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
  // Set State
  const mutationName = `set${replacedType}Res`
  commit(mutationName, {
    status: response.status,
    data: response.data,
    statusText: response.statusText
  })
  return response
}