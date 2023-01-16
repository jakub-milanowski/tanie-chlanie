import { ICities } from "~/domain/repositories";
import { useQuery, UseQueryResult } from "react-query";
import { callApi } from "~/domain/use-cases/api";
import { AxiosMethodEnum } from "~/domain/models";
import { AxiosError, AxiosResponse } from "axios";

export class CitiesService implements ICities {
  find(): UseQueryResult<any, AxiosError> {
    //return Promise.resolve(undefined);
    return useQuery(["cities"], () => this.#fetchFind());
  }

  #fetchFind(): Promise<AxiosResponse<any>> {
    return callApi<any>({
      url: "/cities",
      method: AxiosMethodEnum.GET,
      params: undefined
    }).then((res: AxiosResponse<any>) => res.data);
  }
}
