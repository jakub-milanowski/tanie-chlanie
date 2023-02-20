import type { AxiosResponse } from "axios";

import { AxiosMethodEnum } from "~/domain/models/axios.type";
import type { TVenueDetail } from "~/domain/models/dao/venue-detail.type";
import type { TVenue } from "~/domain/models/dao/venues.type";
import type { Response } from "~/domain/models/response.type";
import type { IVenues } from "~/domain/repositories/venues";
import { callApi } from "~/domain/use-cases/api";

export class VenuesService implements IVenues {
  async findAll(): Promise<AxiosResponse<Response<TVenue[]>>> {
    return callApi<Response<TVenue[]>>({
      url: "/venues",
      method: AxiosMethodEnum.GET
    });
  }

  async get(id: string): Promise<AxiosResponse<TVenueDetail>> {
    return callApi<TVenueDetail>({
      url: "/venues/" + id,
      method: AxiosMethodEnum.GET
    });
  }
}
