import type { TVenue } from "../../../../domain/models/dao/venues.type";
import Venue from "./venue/venue";
import { SVenueList } from "./venue-list.style";
import { FC } from "react";

interface VenueListProps {
  venues: TVenue[];
}

const VenueList: FC<VenueListProps> = (props) => {
  const { venues } = props;

  return (
    <SVenueList width="70%">
      {venues?.map((venue) => (
        <Venue key={venue.id} venue={venue} />
      ))}
    </SVenueList>
  );
};

export default VenueList;
