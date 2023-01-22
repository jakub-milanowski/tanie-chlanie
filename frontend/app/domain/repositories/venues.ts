import { AxiosResponse } from "axios";

export interface IVenues {
  findAll: () => Promise<AxiosResponse<any>>;
}
