import type { ImageProps } from "../../../../../../components/atoms/image/image";
import { SVenueImage } from "./venue-image.style";

export type VenueImageProps = ImageProps;

const VenueImage = (props: VenueImageProps): JSX.Element => {
  return <SVenueImage {...props} />;
};

export default VenueImage;
