import Row from "~/components/atoms/row/row";
import type { TVenue } from "~/domain/models/dao/venues.type";
import VenueFilter from "~/modules/venues/presentation/venue-filter/venue-filter";
import VenueList from "~/modules/venues/presentation/venue-list/venue-list";

interface VenuesModuleProps {
  venues: TVenue[];
}

const VenuesModule = (props: VenuesModuleProps): JSX.Element => {
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
