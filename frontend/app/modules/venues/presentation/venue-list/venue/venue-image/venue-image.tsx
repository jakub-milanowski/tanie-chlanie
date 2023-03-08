import type { ImageProps } from "../../../../../../components/atoms/image/image";
import { SVenueImage } from "./venue-image.style";
import { FC } from "react";

export type VenueImageProps = ImageProps;

const VenueImage: FC<VenueImageProps> = (props) => {
  return <SVenueImage {...props} />;
};

export default VenueImage;
