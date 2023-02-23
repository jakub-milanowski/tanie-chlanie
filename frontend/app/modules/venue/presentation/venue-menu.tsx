import type { TVenueDetail } from "~/domain/models/dao/venue-detail.type";

interface VenueMenuProps {
    venueDetail: TVenueDetail;
}

const VenueMenu = (props: VenueMenuProps): JSX.Element => {
    const { venueDetail } = props;

    const menu = venueDetail.categories.map((category) => {
        return (
            <>
                <h4>
                    {category.name}
                </h4>
                <section>
                    {category.liquors.map((liquor) => {
                        return (
                            <div>
                                <img src={liquor.thumbnail} />
                                <h5>{liquor.name}</h5>
                                <span>{liquor.price}</span>
                            </div>
                        )
                    })}
                </section>
            </>
        )
    });
    return (
        <div>
            {menu}
        </div>

    );
};

export default VenueMenu;
