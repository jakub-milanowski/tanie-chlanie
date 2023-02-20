import type { TLiquor } from "~/domain/models/dao/liquor.type";
import type { TLocationDetail } from "~/domain/models/dao/location-detail.type";
import type { TReview } from "~/domain/models/dao/review.type";

export type TVenueDetail = {
  name: string;
  description?: string;
  cover_photo: string;
  location: TLocationDetail;
  reviews: Array<TReview>;
  liquors: Array<TLiquor>;
};
