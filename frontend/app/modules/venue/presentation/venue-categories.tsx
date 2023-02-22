import type { TVenueDetail } from "~/domain/models/dao/venue-detail.type";

interface VenueCategoriesProps {
    venueDetail: TVenueDetail;
}

const VenueCategories = (props: VenueCategoriesProps): JSX.Element => {
    const { venueDetail } = props;

    const categoriesElements = venueDetail.categories.map((category) => {
        return (
            <button>
                {category.name}
            </button>
        )
    });
    return (
        <div>
            {categoriesElements}
        </div>

    );
};

export default VenueCategories;
