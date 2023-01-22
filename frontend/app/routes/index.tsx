import { json } from "@remix-run/node";
import { LoaderFunction } from "@remix-run/server-runtime/dist/routeModules";
import { useLoaderData } from "@remix-run/react";
import { RootModule } from "~/modules/root";

export const loader: LoaderFunction = async () => {
  return json<any>({});
};

export default function Root() {
  const pageData = useLoaderData<typeof loader>();
  return <RootModule pageData={pageData} />;
}
