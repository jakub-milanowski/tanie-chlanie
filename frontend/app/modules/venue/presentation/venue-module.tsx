import type { TVenueDetail } from "../../../domain/models/dao/venue-detail.type";
import { FC } from "react";

interface VenueModuleProps {
  venueDetail: TVenueDetail;
}

const VenueModule: FC<VenueModuleProps> = (props) => {
  const { venueDetail } = props;

  return <div>{JSON.stringify(venueDetail)}</div>;
};

export default VenueModule;
