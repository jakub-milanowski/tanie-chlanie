import type { TVenueDetail } from "~/domain/models/dao/venue-detail.type";

interface VenueHeaderProps {
    venueDetail: TVenueDetail;
}

const VenueHeader = (props: VenueHeaderProps): JSX.Element => {
    const { venueDetail } = props;

    return (
        <div>
            <div>
                <h2>{venueDetail.name}</h2>
                <h3>{venueDetail.location.street} {venueDetail.location.building} {venueDetail.location.venue || ''}</h3>
                <button>Wyświetl na mapie</button>
                <button>Odwiedź stronę</button>
            </div>
            <div>
                <div>
                    Reviews
                </div>
                <div>
                    Tags
                </div>
            </div>
            <div>
                <div>
                    <h4>12</h4>
                    <h5>Pozycji w menu</h5>
                </div>
                <div>
                    <h4>12</h4>
                    <h5>Pozycji w menu</h5>
                </div>
                <div>
                    <h4>12</h4>
                    <h5>Pozycji w menu</h5>
                </div>
            </div>
        </div>

    );
};

export default VenueHeader;
