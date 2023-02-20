import type { LoaderArgs, TypedResponse } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime/dist/routeModules";

import { HttpStatusCode } from "~/domain/models/axios.type";
import type { TVenueDetail } from "~/domain/models/dao/venue-detail.type";
import { VenuesApi } from "~/domain/use-cases";
import VenueModule from "~/modules/venue/presentation/venue-module";

export const loader: LoaderFunction = async ({
  params
}: LoaderArgs): Promise<TypedResponse<TVenueDetail>> => {
  if (!params.venue) throw new Response("", { status: HttpStatusCode.BAD_REQUEST });
  const res = await VenuesApi.get(params.venue);
  if (!res) throw new Response("", { status: HttpStatusCode.NOT_FOUND });
  return json<TVenueDetail>(res.data);
};

const Venue = (): JSX.Element => {
  const pageData = useLoaderData<TVenueDetail>();
  return <VenueModule venueDetail={pageData} />;
};

export default Venue;
