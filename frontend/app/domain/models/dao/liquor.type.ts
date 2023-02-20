import type { TCategoryDetail } from "./category-detail.type";

export type TLiquor = {
  name: string;
  price: number;
  category: TCategoryDetail;
  thumbnail: string;
};
