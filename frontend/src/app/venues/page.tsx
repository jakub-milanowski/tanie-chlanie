import type { TVenue } from "../../domain/models/dao/venues.type";
import { VenuesApi } from "../../domain/use-cases";
import VenuesModule from "../../modules/venues/presentation/venues-module";

const getData = async (): Promise<TVenue[]> => {
  const res = await VenuesApi.findAll();
  return res.data.results;
};

const Venues = async () => {
  const pageData = await getData();
  return <VenuesModule venues={pageData} />;
};

export default Venues;
