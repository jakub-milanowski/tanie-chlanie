interface VenuesModuleProps {
  pageData: any;
}

const VenuesModule = (props: VenuesModuleProps): JSX.Element => {
  const { pageData } = props;

  console.log(pageData);

  return (
    <div>
      <h1>Lokale</h1>
    </div>
  );
};

export default VenuesModule;
