interface RootModuleProps {
  pageData: any;
}

const RootModule = (props: RootModuleProps): JSX.Element => {
  const {} = props;

  return <div>Root module - select city</div>;
};

export default RootModule;
