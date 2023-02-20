import type { TypedResponse } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/server-runtime/dist/routeModules";

import { RootModule } from "~/modules/root";

export const loader: LoaderFunction = (): TypedResponse<unknown> => {
  // Załadować Miasta
  return json<unknown>({});
};

const Root = (): JSX.Element => {
  return <RootModule />;
};

export default Root;
