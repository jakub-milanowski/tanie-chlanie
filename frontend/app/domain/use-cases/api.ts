import { AxiosRequestConfig, AxiosResponse } from "axios";
import { axiosApi } from "~/domain/api";

export const callApi = async <T>(
  config: AxiosRequestConfig<unknown>
): Promise<AxiosResponse<T>> => {
  return await axiosApi.request<T>(config);
};
