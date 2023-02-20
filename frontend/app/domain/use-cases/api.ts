import type { AxiosRequestConfig, AxiosResponse } from "axios";

import { axiosApi } from "../api/axios";

export const callApi = async <T>(
  config: AxiosRequestConfig<unknown>
): Promise<AxiosResponse<T>> => {
  return axiosApi.request<T, AxiosResponse<T>>(config);
};
