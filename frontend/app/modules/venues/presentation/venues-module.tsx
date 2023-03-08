import Row from "../../../components/atoms/row/row";
import type { TVenue } from "../../../domain/models/dao/venues.type";
import VenueFilter from "./venue-filter/venue-filter";
import VenueList from "./venue-list/venue-list";
import { FC } from "react";

interface VenuesModuleProps {
  venues: TVenue[];
}

const VenuesModule: FC<VenuesModuleProps> = (props) => {
  const { venues } = props;

  return (
    <div>
      <div>
        <h1>Lokale</h1>
      </div>
      <Row fullwidth gap={30}>
        <VenueFilter />
        <VenueList venues={venues} />
      </Row>
    </div>
  );
};

export default VenuesModule;
