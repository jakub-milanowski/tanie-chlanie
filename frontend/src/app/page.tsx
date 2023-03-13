import dynamic from "next/dynamic";

const RootModule = dynamic(() => import("../modules/root/presentation/root-module"));

const RootPage = () => {
  return <RootModule />;
};

export default RootPage;
