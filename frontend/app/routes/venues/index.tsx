import type { TypedResponse } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime/dist/routeModules";

import type { TVenue } from "../../domain/models/dao/venues.type";
import { VenuesApi } from "../../domain/use-cases";
import VenuesModule from "../../modules/venues/presentation/venues-module";

export const loader: LoaderFunction = async (): Promise<TypedResponse<TVenue[]>> => {
  const res = await VenuesApi.findAll();
  return json<TVenue[]>(res.data.results);
};

const Venues = (): JSX.Element => {
  const pageData: TVenue[] = useLoaderData<TVenue[]>();
  return <VenuesModule venues={pageData} />;
};

export default Venues;
