import { UseQueryResult } from "react-query";
import { AxiosError } from "axios";

export interface ICities {
  find: () => UseQueryResult<any, AxiosError>;
}
