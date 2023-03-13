import { TVenueDetail } from "../../../domain/models/dao/venue-detail.type";
import { HttpStatusCode } from "../../../domain/models/axios.type";
import { VenuesApi } from "../../../domain/use-cases";
import dynamic from "next/dynamic";

const VenueModule = dynamic(() => import("../../../modules/venue/presentation/venue-module"));

interface VenueProps {
  params: {
    id: string;
  };
}

const Venue = async (props: VenueProps): Promise<JSX.Element> => {
  console.log(props);
  const pageData = await getData(props.params.id);
  return <VenueModule venueDetail={pageData} />;
};

const getData = async (id: string): Promise<TVenueDetail> => {
  if (!id) throw new Response("", { status: HttpStatusCode.BAD_REQUEST });
  const res = await VenuesApi.get(id);
  if (!res) throw new Response("", { status: HttpStatusCode.NOT_FOUND });
  return res.data;
};

export default Venue;
