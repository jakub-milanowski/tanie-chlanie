import { Link } from "@remix-run/react";

interface RootModuleProps {
  pageData: any;
}

const RootModule = (props: RootModuleProps): JSX.Element => {
  const {} = props;

  return (
    <div>
      <div>Root module - select cit wrey</div>
      <Link to="venues">lokale</Link>
    </div>
  );
};

export default RootModule;
