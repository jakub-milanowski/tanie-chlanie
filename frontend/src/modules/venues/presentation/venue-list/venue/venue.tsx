import Card from "../../../../../components/atoms/card/card";
import Column from "../../../../../components/atoms/column/column";
import Row from "../../../../../components/atoms/row/row";
import type { TVenue } from "../../../../../domain/models/dao/venues.type";
import VenueImage from "./venue-image/venue-image";
import Link from "next/link";

interface VenueProps {
  venue: TVenue;
}

const Venue = (props: VenueProps): JSX.Element => {
  const { venue } = props;

  return (
    <Link href={"/venue/" + venue.id}>
      <Card fullwidth>
        <Row fullwidth gap={8}>
          <VenueImage src={venue.cover_photo} alt={venue.name} title={venue.name} />
          <Column fullwidth gap={10}>
            <Row fullwidth gap={8} align="bottom">
              <h4>{venue.name}</h4>
              <p>lokalizacja</p>
            </Row>
          </Column>
        </Row>
      </Card>
    </Link>
  );
};

export default Venue;
