import type { AxiosResponse } from "axios";

import type { TVenueDetail } from "../models/dao/venue-detail.type";
import type { TVenue } from "../models/dao/venues.type";
import type { Response } from "../models/response.type";

export interface IVenues {
  findAll: () => Promise<AxiosResponse<Response<TVenue[]>>>;
  get: (id: string) => Promise<AxiosResponse<TVenueDetail>>;
}
