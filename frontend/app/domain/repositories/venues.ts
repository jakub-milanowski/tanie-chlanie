import type { AxiosResponse } from "axios";

import type { TVenueDetail } from "~/domain/models/dao/venue-detail.type";
import type { TVenue } from "~/domain/models/dao/venues.type";
import type { Response } from "~/domain/models/response.type";

export interface IVenues {
  findAll: () => Promise<AxiosResponse<Response<TVenue[]>>>;
  get: (id: string) => Promise<AxiosResponse<TVenueDetail>>;
}
