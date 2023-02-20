import type { TLiquor } from "./liquor.type";
import type { TLocationDetail } from "./location-detail.type";
import type { TReview } from "./review.type";

export type TVenueDetail = {
  name: string;
  description?: string;
  cover_photo: string;
  location: TLocationDetail;
  reviews: Array<TReview>;
  liquors: Array<TLiquor>;
};
