import type { TVenue } from "../../domain/models/dao/venues.type";
import { VenuesApi } from "../../domain/use-cases";
import dynamic from "next/dynamic";

const VenuesModule = dynamic(() => import("../../modules/venues/presentation/venues-module"));

const Venues = async () => {
  const pageData = await getData();
  return <VenuesModule venues={pageData} />;
};

const getData = async (): Promise<TVenue[]> => {
  const res = await VenuesApi.findAll();
  return res.data.results;
};

export default Venues;
