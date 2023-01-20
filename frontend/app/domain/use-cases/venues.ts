import { useQuery, UseQueryResult } from "react-query";
import { callApi } from "~/domain/use-cases/api";
import { AxiosMethodEnum } from "~/domain/models";
import { AxiosError, AxiosResponse } from "axios";
import { IVenues } from "~/domain/repositories/venues";

export class VenuesService implements IVenues {
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
