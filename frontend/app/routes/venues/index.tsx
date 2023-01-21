import { LoaderFunction } from "@remix-run/server-runtime/dist/routeModules";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { VenuesModule } from "~/modules/venues";
import { VenuesApi } from "~/domain";

export const loader: LoaderFunction = async () => {
  console.log("test");
  const res = VenuesApi.findAll();
  console.log(res);
  return json<any>({ ...res });
};

export default function Venues() {
  const pageData = useLoaderData<typeof loader>();
  return <VenuesModule pageData={pageData} />;
}
