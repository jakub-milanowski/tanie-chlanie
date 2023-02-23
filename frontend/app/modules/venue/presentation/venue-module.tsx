import type { TVenueDetail } from "~/domain/models/dao/venue-detail.type";
import VenueCategories from "./venue-categories";
import VenueHeader from "./venue-header";
import VenueMenu from "./venue-menu";

interface VenueModuleProps {
  venueDetail: TVenueDetail;
}

const VenueModule = (props: VenueModuleProps): JSX.Element => {
  const { venueDetail } = props;

  return (
    <>
      <VenueHeader venueDetail={venueDetail} />
      <VenueCategories venueDetail={venueDetail} />
      <VenueMenu venueDetail={venueDetail} />
    </>
  );
};

export default VenueModule;
