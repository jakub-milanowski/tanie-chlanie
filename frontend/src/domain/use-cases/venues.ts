import type { AxiosResponse } from "axios";

import { AxiosMethodEnum } from "../models/axios.type";
import type { TVenueDetail } from "../models/dao/venue-detail.type";
import type { TVenue } from "../models/dao/venues.type";
import type { Response } from "../models/response.type";
import type { IVenues } from "../repositories/venues";
import { callApi } from "./api";

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
