import { Link } from "@remix-run/react";

const RootModule = (): JSX.Element => {
  return (
    <div>
      <div>Root module - select cit wrey</div>
      <Link to="venues">Lokale</Link>
    </div>
  );
};

export default RootModule;
