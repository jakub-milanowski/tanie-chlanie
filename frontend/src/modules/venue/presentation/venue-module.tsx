("");

import type { TVenueDetail } from "../../../domain/models/dao/venue-detail.type";

interface VenueModuleProps {
  venueDetail: TVenueDetail;
}

const VenueModule = (props: VenueModuleProps): JSX.Element => {
  const { venueDetail } = props;

  return <div>{JSON.stringify(venueDetail)}</div>;
};

export default VenueModule;
