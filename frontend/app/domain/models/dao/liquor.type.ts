import type { TCategoryDetail } from "~/domain/models/dao/category-detail.type";

export type TLiquor = {
  name: string;
  price: number;
  category: TCategoryDetail;
  thumbnail: string;
};
