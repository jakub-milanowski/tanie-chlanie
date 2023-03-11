import Link from "next/link";

const RootModule = (): JSX.Element => {
  return (
    <div>
      <div>Root module - select cit wrey</div>
      <Link href="venues">Lokale</Link>
    </div>
  );
};

export default RootModule;
