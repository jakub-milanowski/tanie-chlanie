import { UseQueryResult } from "react-query";
import { AxiosError } from "axios";

export interface IVenues {
  find: () => UseQueryResult<any, AxiosError>;
}
