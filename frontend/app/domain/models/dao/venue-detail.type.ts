import type { TCategoryDetail } from "~/domain/models/dao/category-detail.type";
import type { TLocationDetail } from "~/domain/models/dao/location-detail.type";
import type { TReview } from "~/domain/models/dao/review.type";

export type TVenueDetail = {
  name: string;
  description?: string;
  cover_photo: string;
  location: TLocationDetail;
  reviews: Array<TReview>;
  categories: Array<TCategoryDetail>;
};
