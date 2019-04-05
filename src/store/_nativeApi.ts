import axios from "axios";
interface options {
  url: string;
  headers?: Object;
  data?: Object;
  params?: Object;
}
/**
 * 不導入自製工具比較單純，可以看出來, API應該怎麼進行集中管理
 * @param method 
 * @param options 
 */
export default async function requestAsync(method: string, options: options) {
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
  return {
    status: response.status,
    data: response.data,
    statusText: response.statusText,
  };
}
