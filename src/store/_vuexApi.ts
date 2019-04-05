import axios from "axios";
interface store {
  commit: Function;
}
interface options {
  url: string;
  headers?: Object;
  data?: Object;
  params?: Object;
}
/**
 *  導入自製工具明顯在打API的地方比較複雜，但是需要自己手動創造的部分減少了
 * @param store 
 * @param type 
 * @param options 
 */
export default async function requestAsync(store: store, type: string, options: options) {
  const { commit } = store
  // Extract Type
  let method = "get";
  const replacedType = type.replace(/get|post|put|delete/, httpMethod => {
    method = httpMethod;
    return "";
  });
  // Send Request
  const { url, headers, data, params } = options;
  const axiosConfig = {
    url: `${url}`,
    method,
    headers,
    params: params ? { ...params } : {},
    data,
  };
  const response = await axios(axiosConfig);
  // Set State
  const mutationName = `set${replacedType}Res`;
  commit(mutationName, {
    status: response.status,
    data: response.data,
    statusText: response.statusText,
  });
  return response;
}
