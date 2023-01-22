import { callApi } from "~/domain/use-cases/api";
import { AxiosMethodEnum } from "~/domain/models";
import { AxiosResponse } from "axios";
import { IVenues } from "~/domain/repositories/venues";

export class VenuesService implements IVenues {
  async findAll(): Promise<AxiosResponse<any>> {
    return await callApi<any>({
      url: "/venues",
      method: AxiosMethodEnum.GET,
      params: undefined
    });
  }
}
